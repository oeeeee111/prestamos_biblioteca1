import { relations } from "drizzle-orm/relations";
import { libros, ejemplares, prestamos, usuarios } from "./schema";

export const ejemplaresRelations = relations(ejemplares, ({one, many}) => ({
	libro: one(libros, {
		fields: [ejemplares.idLibro],
		references: [libros.id]
	}),
	prestamos: many(prestamos),
}));

export const librosRelations = relations(libros, ({many}) => ({
	ejemplares: many(ejemplares),
}));

export const prestamosRelations = relations(prestamos, ({one}) => ({
	ejemplare: one(ejemplares, {
		fields: [prestamos.idEjemplar],
		references: [ejemplares.id]
	}),
	usuario: one(usuarios, {
		fields: [prestamos.idUsuario],
		references: [usuarios.id]
	}),
}));

export const usuariosRelations = relations(usuarios, ({many}) => ({
	prestamos: many(prestamos),
}))
export const usuariosRelations = relations(usuarios, ({many}) => ({
	prestamos: many(prestamos),
}));