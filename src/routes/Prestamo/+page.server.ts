import { db } from "$lib/server/database/client";
import { ejemplares, libros, prestamos, usuarios } from "$lib/server/database/schema";
import { librosPrestadosUsuario } from "$lib/server/ormQueries/query";
import { librosDevueltosUsuario } from "$lib/server/ormQueries/updates";
import { fail } from "@sveltejs/kit";
import { LibsqlError } from '@libsql/client';

export async function load() {
	return {};
}


export const actions =  {

    CrearPrestamo: async ({request}:{request:Request}) => {

       const data = Object.fromEntries(await request.formData());
 
       const nombre = data.nombre as string;
       const codigo = data.codigo as string;
       const titulo = data.titulo as string;
       const fechaPrestamo = new Date(data.fechaPrestamo as string);
       const fechaLimite = new Date(data.fechaLimite as string);

       if (!nombre || nombre.trim() === '') {
        return fail(400, { message: 'El nombre es obligatorio' });
      }

       try {
       await Promise.all([
        db.insert(usuarios).values({
             nombre: data.nombre as string,
              codigo: data.codigo }),

        db.insert(libros).values({ 
            titulo: data.titulo as string,
             codigo: data.codigo }),

        db.insert(prestamos).values({ 
            fechaPrestamo: fechaPrestamo, 
            fechaLimite: new Date(data.fechaLimite as string) })
      ]);
      
      return { success: true, message: 'Préstamo creado correctamente' };
    } catch (error) {
        if (error instanceof LibsqlError) {
            console.log(error);
        }

        return fail(500, { error });
    }

    return { success: true };
}
};
  





