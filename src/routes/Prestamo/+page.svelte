
<script>

import Botonprestamo1 from '$lib/components/botones/botonprestamo1.svelte';

import Botonprestamo2 from '$lib/components/botones/botonprestamo2.svelte';
	let { form } = $props();
</script>

<br />

{#if form?.message}
    <p>{form.message}</p>
{/if}




<form method="post" action="?/CrearPrestamo">
	<center>
		<div class="cont1" ></div>
		<br /><br />
		<label for="codEst" style="font-size: 20px;">ID del Estudiante</label>
		<input
			type="text"
			placeholder="Dijite su Tarjeta de Identidad o Cedula "
			id="codigoEst"
			name="codigoEst"
			size="37"
			required
		/>
		<br /><br />
		<label for="codigoLib" style="font-size: 20px;">ID del Libro</label>
		<input
			type="text"
			class="tres"
			placeholder="Dijite el ID de Libro "
			id="codigolib"
			name="codigoLib"
			size="42"
			required
		/>
		
    
            
    
            
          
      
	</center>
    <br><br>
	<button type="submit" class="btn"> Enviar </button>
    <br><br>
    <Botonprestamo2 href="/" titulo="Salida" ></Botonprestamo2>

</form>

<style>
 .btn{
    position: relative;
    padding: 21px 50px;
    font-family: 'Lora', serif;
left: 40%;
color: #ffff;
background-color: rgb(235, 132, 195);
 }





</style>











