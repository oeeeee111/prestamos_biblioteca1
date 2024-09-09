-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `libros` (
	`id` integer PRIMARY KEY,
	`titulo` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `usuario` (
	`id` integer NOT NULL,
	`nombre` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `prestamos` (
	`id_usuario` integer NOT NULL,
	`id_libro` integer NOT NULL,
	`fecha_devoluvion` numeric NOT NULL,
	`fecha_retraso` numeric,
	FOREIGN KEY (`id_libro`) REFERENCES `libros`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id`) ON UPDATE no action ON DELETE no action
);

*/