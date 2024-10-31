import { prestamos, ejemplares, libros, usuarios } from "$lib/server/database/data";

import { db } from '$lib/server/database/client'; 
import { eq, and, isNull} from "drizzle-orm";


export const librosPrestadosUsuario = async (codigoUsuario:string) => {

    const resultados = await db
        .select({
            id_prestamo: prestamos.id,
            titulo_libro: libros.titulo,
            codigo_ejemplar: ejemplares.codigoEjemplar,
            fecha_prestamo: prestamos.fechaPrestamo,
            fecha_limite: prestamos.fechaLimite
        })
        .from(prestamos)
        .innerJoin(ejemplares, eq(prestamos.idEjemplar,ejemplares.id))
        .innerJoin(libros, eq(ejemplares.idLibro,libros.id))
        .innerJoin(usuarios, eq(prestamos.idUsuario,usuarios.id))
        .where( and( eq( usuarios.codigo, codigoUsuario ), isNull( prestamos.fechaDevolucion ) ) )

        // Convertir los timestamps a fechas
        const resultadosConFechas = resultados.map(row => ({
            ...row,
            fecha_prestamo: new Date(Number(row.fecha_prestamo) ).toISOString().split('T')[0],
            fecha_limite: new Date(Number(row.fecha_limite) * 1000).toISOString().split('T')[0]
        }));

        return resultadosConFechas;
}