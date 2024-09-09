<script>
	import Boton1 from '$lib/components/botones/Boton1.svelte';
	import Boton2 from '$lib/components/botones/Boton2.svelte';
	import Boton3 from '$lib/components/botones/Boton3.svelte';
</script>

<div class="botones">
	<Boton1 href="/notificaciones" titulo="Notificaciones" />
	<Boton2 href="/notificaciones" titulo="Opcion1" />
	<Boton3 href="/notificaciones" titulo="Otro sitio" />
</div>

<style>
	.botones {
		display: flex;
        height: 70vh;
        justify-content: center;
        align-items: center;
    }
</style>
