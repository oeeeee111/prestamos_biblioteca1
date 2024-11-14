import { sqliteTable, integer, text, numeric } from "drizzle-orm/sqlite-core"


export const usuarios = sqliteTable("usuarios", {
	id: integer().primaryKey(),
	nombre: text().notNull(),
	codigo: text().notNull(),
	email: text().notNull(),
});

export const libros = sqliteTable("libros", {
	id: integer().primaryKey(),
	titulo: text().notNull(),
	codigo: text(),
});

export const ejemplares = sqliteTable("ejemplares", {
	id: integer().primaryKey(),
	idLibro: integer().notNull().references(() => libros.id, { onDelete: "cascade", onUpdate: "cascade" } ),
	codigoEjemplar: text().notNull(),
	estado: text().default("disponible"),
	plazoPrestamo: integer("plazo_prestamo").default(30).notNull(),
});

export const prestamos = sqliteTable("prestamos", {
	id: integer().primaryKey(),
	idUsuario: integer("idUsuario").notNull().references(() => usuarios.id, { onDelete: "set null", onUpdate: "cascade" } ),
	idEjemplar: integer("idEjemplar").notNull().references(() => ejemplares.id, { onDelete: "set null", onUpdate: "cascade" } ),
	fechaPrestamo: numeric().notNull(),
	fechaDevolucion: numeric(),
	fechaLimite: numeric().notNull(),
	fechaRetraso: numeric(),
});

