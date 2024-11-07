
<script>
import Botonprestamo1 from "$lib/components/botones/botonprestamo1.svelte";
import Botonprestamo2 from "$lib/components/botones/botonprestamo2.svelte";
    import { enhance } from '$app/forms';


</script>


     

<br>

    <form method="post" action="?/CrearPrestamo"  >
        <center>
            <div class="cont1"></div>
                <br><br>
                <label for="nombre" style="font-size: 20px;" >Nombres Completos</label>
                <input type="text" placeholder="Escriba sus Nombres y Apellidos" id="nombre" name="nombre" size="34" width="100" height="10">
                <br><br>
                <label for="codigo" style="font-size: 20px;" >ID del estudiantes</label>
                <input type="text" placeholder="Dijite su Tarjeta de Identidad o Cedula " id="codigousu" name="codigo" size="37">
                <br><br>
                <label for="titulo" style="font-size: 20px;">Titulo del libro</label>
                <input type="text" class="tres" placeholder="Ingrese el Nombre del Libro " id="titulo" name="titulo" size="41">
                <br><br>
                <label for="codigo" style="font-size: 20px;">ID del libro</label>
                <input type="text" class="tres" placeholder="Dijite el ID de Libro " id="codigolib" name="codigo" size="45">
                <br><br>
               
            
            </center>
            <button type="submit" class="btn btn1">
                Enviar
            </button>

           <center>     
           
            <br><br>
     
        <br><br>
        <Botonprestamo2 href="/" titulo="Salida"></Botonprestamo2>
        </center>
        
    </form>


<style>

.btn1{
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
.btn{
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