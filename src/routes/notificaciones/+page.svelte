<script lang="ts">
    export let data;
</script>

<div class="container">
    <h2>Estado de Libros</h2>
    <table>
        <thead>
            <tr>
                <th>Título del Libro</th>
                <th>Código Ejemplar</th>
                <th>Estado</th>
                <th>Prestado a</th>
                <th>Fecha Préstamo</th>
                <th>Fecha Límite</th>
            </tr>
        </thead>
        <tbody>
            {#each data.libros as libro}
                <tr>
                    <td>{libro.titulo_libro}</td>
                    <td>{libro.codigo_ejemplar}</td>
                    <td>{libro.estado}</td>
                    <td>{libro.nombre_usuario || '-'}</td>
                    <td>{libro.fecha_prestamo || '-'}</td>
                    <td>{libro.fecha_limite || '-'}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    .container {
        padding: 20px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }

    th, td {
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    th {
        background-color: #f4f4f4;
        font-weight: bold;
    }

    tr:hover {
        background-color: #f5f5f5;
    }

    tr:nth-child(even) {
        background-color: #fafafa;
    }
</style>