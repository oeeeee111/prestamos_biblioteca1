
<script>



import Botonprestamo2 from '$lib/components/botones/botonprestamo2.svelte';
	let { form } = $props();
</script>

<br />

{#if form?.message}
    <p>{form.message}</p>
{/if}

<form method="post" action="?/CrearPrestamo">
	<center>
		<div class="cont1"></div>
		<br /><br />
		<label for="codEst" style="font-size: 20px;">ID del estudiantes</label>
		<input
			type="text"
			placeholder="Dijite su Tarjeta de Identidad o Cedula "
			id="codigoEst"
			name="codigoEst"
			size="37"
			required
		/>
		<br /><br />
		<label for="codigoLib" style="font-size: 20px;">ID del libro</label>
		<input
			type="text"
			class="tres"
			placeholder="Dijite el ID de Libro "
			id="codigolib"
			name="codigoLib"
			size="45"
			required
		/>
		<br /><br />
	</center>
	<button type="submit" class="btn btn1"> Enviar </button>

	<center>
		<br /><br />

		<br /><br />
		<Botonprestamo2 href="/" titulo="Salida"></Botonprestamo2>
	</center>
</form>

<style>
	.btn1 {
		display: flex;
		font-family: 'Lora', serif;
		display: inline-flex;
		position: relative;
		padding: 20px 50px;
		text-decoration: none;
		color: #000000;
		justify-content: space-around;
		align-items: center;
		top: 200%;
	}
	.btn {
		display: flex;
		font-family: 'Lora', serif;
		display: inline-flex;
		position: relative;
		padding: 20px 50px;
		text-decoration: none;
		color: #ffff;
		justify-content: space-around;
		letter-spacing: 1px;
		border: none;
		position: relative;
		z-index: 2;
		transition: 0.6s ease all;
	}
</style>











