import { librosPrestadosUsuario } from "$lib/server/ormQueries/query";
import { librosDevueltosUsuario } from "$lib/server/ormQueries/updates";
import { fail } from "@sveltejs/kit";



export const actions = {

    librosPrestados: async ({request}:{request:Request}) => {

        const data = Object.fromEntries(await request.formData());
        try {
            const resultados = await librosPrestadosUsuario(String(data.codUsuario));

            resultados.forEach((element: { [key: string]: any }) => {
                element['mostrar'] = false;
            });
            console.log(resultados)          
            return {resultados}
        } catch (error) {
            fail(500,{error: "no se pudo realizar la consulta"})
        }

    }

  

}