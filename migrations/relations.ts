import { relations } from "drizzle-orm/relations";
import { libros, prestamos, usuario } from "./schema";

export const prestamosRelations = relations(prestamos, ({one}) => ({
	libro: one(libros, {
		fields: [prestamos.idLibro],
		references: [libros.idLibro]
	}),
	usuario: one(usuario, {
		fields: [prestamos.idUsuario],
		references: [usuario.idUsuario]
	}),
}));

export const librosRelations = relations(libros, ({many}) => ({
	prestamos: many(prestamos),
}));

export const usuarioRelations = relations(usuario, ({many}) => ({
	prestamos: many(prestamos),
}));