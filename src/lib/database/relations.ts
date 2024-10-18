import { relations } from "drizzle-orm/relations";
import { libros, prestamos, usuario } from "./schema";

export const prestamosRelations = relations(prestamos, ({one}) => ({
	libro: one(libros, {
		fields: [prestamos.id_libro],
		references: [libros.id_libro]
	}),
	usuario: one(usuario, {
		fields: [prestamos.id_usuario],
		references: [usuario.id_usuario]
	}),
}));

export const librosRelations = relations(libros, ({many}) => ({
	prestamos: many(prestamos),
}));

export const usuarioRelations = relations(usuario, ({many}) => ({
	prestamos: many(prestamos),
}));