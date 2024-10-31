<script>
	import Boton1 from '$lib/components/botones/Boton1.svelte';
	import Boton2 from '$lib/components/botones/Boton2.svelte';
	import Boton3 from '$lib/components/botones/Boton3.svelte';


</script>


<div class="botones">
    <Boton1 href="/notificaciones" titulo="Notificaciones" />
	<Boton2  href="/devoluciones" titulo="Devolución" />
	<Boton3 href="/Prestamo" titulo="Prestamo" />
</div>


<style>
	.botones {
		display: flex;
        height: 70vh;
        justify-content: center;
        align-items: center;
    }
</style>
