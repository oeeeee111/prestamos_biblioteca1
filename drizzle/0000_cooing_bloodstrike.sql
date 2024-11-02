-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `usuarios` (
	`id` integer PRIMARY KEY,
	`nombre` text NOT NULL,
	`codigo` text NOT NULL,
	`email` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `libros` (
	`id` integer PRIMARY KEY,
	`titulo` text NOT NULL,
	`codigo` text
);
--> statement-breakpoint
CREATE TABLE `ejemplares` (
	`id` integer PRIMARY KEY,
	`idLibro` integer NOT NULL,
	`codigoEjemplar` text NOT NULL,
	`estado` text DEFAULT 'disponible',
	FOREIGN KEY (`idLibro`) REFERENCES `libros`(`id`) ON UPDATE cascade ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `prestamos` (
	`id` integer PRIMARY KEY,
	`idUsuario` integer NOT NULL,
	`idEjemplar` integer NOT NULL,
	`fechaPrestamo` numeric NOT NULL,
	`fechaDevolucion` numeric,
	`fechaLimite` numeric NOT NULL,
	`fechaRetraso` numeric,
	FOREIGN KEY (`idEjemplar`) REFERENCES `ejemplares`(`id`) ON UPDATE cascade ON DELETE set null,
	FOREIGN KEY (`idUsuario`) REFERENCES `usuarios`(`id`) ON UPDATE cascade ON DELETE set null
);

*/