import { obtenerEstadoLibros } from "$lib/server/ormQueries/erenmivida";

export const load = async () => {
    const libros = await obtenerEstadoLibros();
    return { libros };
};

