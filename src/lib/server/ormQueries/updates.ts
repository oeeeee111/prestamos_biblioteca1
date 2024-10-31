import { prestamos, ejemplares} from "$lib/server/database/data"// Asegúrate de importar las tablas correctas
import { db } from '$lib/server/database/client'; // Asegúrate de importar tu instancia de base de datos
import { eq, and, isNull} from "drizzle-orm";

export const librosDevueltosUsuario = async (idPrestamo:number) => {
    
    try {
        const codigoEjemplar = await db.select({codigo: prestamos.idEjemplar}).from(prestamos).where( eq(prestamos.id, idPrestamo) );

        await db.update(prestamos)
            .set({fechaDevolucion: (new Date()).getTime() })
            .where( and( eq(prestamos.id, idPrestamo), isNull(prestamos.fechaDevolucion) ) );
            
        await db.update(ejemplares).set({estado: "disponible"}).where( eq(ejemplares.id, codigoEjemplar[0].codigo) );    
    } catch (error) {
        return {error: "No se pudo realizar la actualización"}    
    }
}