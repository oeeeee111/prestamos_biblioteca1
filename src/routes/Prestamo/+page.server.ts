import { db } from "$lib/server/database/client";
import { ejemplares, libros, prestamos, usuarios } from "$lib/server/database/schema";
import { fail } from "@sveltejs/kit";
import { LibsqlError } from '@libsql/client';

export async function load() {
    return {};
}

export const actions = {
    CrearPrestamo: async ({request}:{request:Request}) => {
        const data = Object.fromEntries(await request.formData());

      
        const codigo = data.codigo as string;
       
     
       
       
        if (!codigo || .trim(codigo) === '') {
            return fail(400, { message: 'El id es obligatorio' });
        }

        try {
            await Promise.all([
                db.insert(usuarios).values({
                    codigo: data.codigo as string,
                   
                }),

                db.insert(libros).values({ 
                    codigo: data.codigo as string
                }),

            ]);
      
            return { success: true, message: 'Préstamo creado correctamente' };
        } catch (error) {
            if (error instanceof LibsqlError) {
                console.log(error);
            }
            return fail(500, { error });
        }
    }
};





