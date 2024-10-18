import { sqliteTable, AnySQLiteColumn, integer, text, foreignKey, numeric } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const usuario = sqliteTable("usuario", {
	idUsuario: integer("id_usuario").primaryKey(),
	nombre: text("nombre").notNull(),
});

export const libros = sqliteTable("libros", {
	idLibro: integer("id_libro").primaryKey(),
	titulo: text("titulo").notNull(),
});

export const prestamos = sqliteTable("prestamos", {
	idPrestamo: integer("id_prestamo").primaryKey(),
	idUsuario: integer("id_usuario").notNull().references(() => usuario.idUsuario),
	idLibro: integer("id_libro").notNull().references(() => libros.idLibro),
	fechaDevoluvion: numeric("fecha_devoluvion").notNull(),
	fechaRetraso: numeric("fecha_retraso"),
});