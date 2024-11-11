import { obtenerEstadoLibros } from "$lib/server/ormQueries/estadolib";

export const load = async () => {
    const libros = await obtenerEstadoLibros();
    return { libros };
};

