import { sqliteTable, AnySQLiteColumn, integer, text, foreignKey, numeric } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const libros = sqliteTable("libros", {
	id: integer("id").primaryKey(),
	titulo: text("titulo").notNull(),
});

export const usuario = sqliteTable("usuario", {
	id: integer("id").notNull(),
	nombre: text("nombre").notNull(),
});

export const prestamos = sqliteTable("prestamos", {
	idUsuario: integer("id_usuario").notNull().references(() => usuario.id),
	idLibro: integer("id_libro").notNull().references(() => libros.id),
	fechaDevoluvion: numeric("fecha_devoluvion").notNull(),
	fechaRetraso: numeric("fecha_retraso"),
});