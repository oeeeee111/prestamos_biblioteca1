import { db } from '$lib/server/database/client';
import { ejemplares, prestamos, usuarios } from '$lib/server/database/schema';
import { fail, error } from '@sveltejs/kit';
import { LibsqlError } from '@libsql/client';
import { eq } from 'drizzle-orm';

export async function load() {
	return {};
}

export const actions = {
	CrearPrestamo: async ({ request }: { request: Request }) => {
		const data = Object.fromEntries(await request.formData());
		const { codigoEst, codigoLib } = data;


		if (typeof codigoEst !== 'string' || typeof codigoLib !== 'string')
			throw error(400, 'Los datos son incorrectos');


		try {
			const libro = await db
				.select({id:ejemplares.id, estado: ejemplares.estado, plazo: ejemplares.plazoPrestamo })
				.from(ejemplares)
				.where( eq( ejemplares.codigoEjemplar, String(codigoLib) ) )
				.limit(1);

			if (libro.length === 0) {
				return fail(404, { message: 'El libro no existe en la colección' });
			}

			if (libro[0].estado !== "disponible") {
				return fail(400, { message: 'El libro ya está prestado' });
			}

			const usuario = await db.select( {id: usuarios.id, nombre: usuarios.nombre}).from(usuarios).where( eq(usuarios.codigo, String(codigoEst)) ).limit(1);

			if (usuario.length === 0) { return fail(404, { message: 'El usuario no existe' }); }


			const prestamo = await db.insert(prestamos).values({idUsuario: Number(usuario[0].id), idEjemplar: libro[0].id, fechaPrestamo: Date.now(), fechaLimite: Date.now() + libro[0].plazo * 24 * 60 * 60 * 1000}).returning();

			await db.update(ejemplares).set({estado: "prestado"}).where( eq(ejemplares.id, libro[0].id) );

			return { success: true, message: 'Préstamo creado correctamente' };
		} catch (error) {
			if (error instanceof LibsqlError) {
				console.log(error);
			}
			return fail(500, { error });
		}
	}
};






