import { prestamos, ejemplares, libros, usuarios } from "$lib/server/database/data"// Asegúrate de importar las tablas correctas
import { db } from '$lib/server/database/client'; // Asegúrate de importar tu instancia de base de datos
import { eq, and, isNull} from "drizzle-orm";



export const obtenerEstadoLibros = async () => {
    const resultados = await db
        .select({
            titulo_libro: libros.titulo,
            codigo_ejemplar: ejemplares.codigoEjemplar,
            estado: ejemplares.estado,
            nombre_usuario: usuarios.nombre,
            fecha_prestamo: prestamos.fechaPrestamo,
            fecha_limite: prestamos.fechaLimite
        })
        .from(libros)
        .leftJoin(ejemplares, eq(libros.id, ejemplares.idLibro))
        .leftJoin(prestamos, and(
            eq(ejemplares.id, prestamos.idEjemplar),
            isNull(prestamos.fechaDevolucion)
        ))
        .leftJoin(usuarios, eq(prestamos.idUsuario, usuarios.id));

    // Convertir los timestamps a fechas legibles
    const resultadosFormateados = resultados.map(row => ({
        ...row,
        fecha_prestamo: row.fecha_prestamo 
            ? new Date(Number(row.fecha_prestamo)).toLocaleDateString()
            : '',
        fecha_limite: row.fecha_limite
            ? new Date(Number(row.fecha_limite)).toLocaleDateString()
            : ''
    }));

    return resultadosFormateados;
}