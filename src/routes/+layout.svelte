<script>
    let { children } = $props();
    import Encabezado from '$lib/components/encabezado/Encabezado.svelte';
    import '../app.css';
</script>

<Encabezado />

{@render children()}