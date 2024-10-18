import { sqliteTable, integer, text, foreignKey, numeric } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"
import { primaryKey } from "drizzle-orm/mysql-core";

export const libros = sqliteTable("libros", {
	id_libro: integer("id_libro").primaryKey(),
	titulo: text("titulo").notNull(),
});

export const usuario = sqliteTable("usuario", {
	id_usuario: integer("id_usuario").notNull(),
	nombre: text("nombre").notNull(),
});

export const prestamos = sqliteTable("prestamos", {
	id_prestamo: integer("id_prestamo").primaryKey(),
	id_usuario: integer("id_usuario").notNull().references(() => usuario.id_usuario),
	id_libro: integer("id_libro").notNull().references(() => libros.id_libro),
	fecha_devoluvion: numeric("fecha_devoluvion").notNull(),
	fecha_retraso: numeric("fecha_retraso"),
});