<script>
	let { form } = $props();

	let resultados = $state(form?.resultados);
	let activarBoton = $derived.by(() => {
		if (resultados) {
			return resultados.some((resultado) => resultado.mostrar);
		} else {
			return false;
		}
	});
</script>

<svelte:head>
	<title>Pagina de devoluciones</title>
</svelte:head>

<form action="?/librosPrestados" method="post" class="miContainer">
	<div>
		<label for="page">Codigo del usuario</label>
		<input type="text" name="codUsuario" id="page" required />
	</div>
	<button type="submit">Buscar</button>
</form>

{#if resultados && resultados.length > 0}
	<form action="?/devolverLibros" method="post">
		<table>
			<thead>
				<tr>
					<th>Título del Libro</th>
					<th>Fecha de Préstamo</th>
					<th>Código del Ejemplar</th>
					<th>Devolver</th>
				</tr>
			</thead>

			<tbody>
				{#each resultados as resultado}
					<tr>
						<td>{resultado.titulo_libro}</td>
						<td>{resultado.fecha_prestamo}</td>
						<td>{resultado.codigo_ejemplar}</td>
						<td>
                            <input type="checkbox" name={String(resultado.id_prestamo)} bind:checked={resultado.mostrar} />
                        </td>
					</tr>
				{/each}
			</tbody>
		</table>
		<button disabled={!activarBoton} style="display:block; margin: 0.5rem auto">Devolver libros</button>
	</form>
{:else}
    <p style="text-align: center">No se encontraron resultados</p>
{/if}



<style>
	.miContainer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2rem;
		background-color: #f1f1f1;
		border-radius: 20px;
		margin: 5rem auto;
		width: 50%;
	}

	input {
		padding: 0.5rem;
		margin: 0.5rem;
		border-radius: 10px;
	}

	button {
		padding: 0.5rem;
		margin: 0.5rem;
		
        color: white;
        background-color: #4caf50;
		border-radius: 10px;
		cursor: pointer;
	}
    
	button:hover {
        color: rgb(82, 79, 79);
        border: solid 1px #4caf50;
        background-color: white;
	}

	button:disabled {
		background-color: #e0e0e0;
		color: #a0a0a0;
		border: solid 1px #a0a0a0;
		cursor: not-allowed;
	}

	table {
		width: 70%;
		border-collapse: collapse;
		margin: 2rem auto;
	}
	th,
	td {
		border: 1px solid black;
		padding: 8px;
		text-align: left;
	}
	th {
		background-color: #f2f2f2;
	}
</style>