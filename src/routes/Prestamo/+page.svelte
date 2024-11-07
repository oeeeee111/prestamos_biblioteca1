
<script>
import Botonprestamo1 from "$lib/components/botones/botonprestamo1.svelte";
import Botonprestamo2 from "$lib/components/botones/botonprestamo2.svelte";

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
                <label for="fechaPrestamo" style="font-size: 20px;">Fecha Prestamo</label>
                <input type="text" class="tres" placeholder="Ingrese la Fecha del Prestamo " id="fechaPrestamo" name="fechaPrestamo" size="34">
                <br><br>
                <label for="fechaLimite" style="font-size: 20px;">Fecha Limite</label>
                <input type="text" class="tres" placeholder="Ingrese la Fecha Limite " id="fechaLimite" name="fechaLimite" size="34">
                <br><br>
            </center>
           

           <center>     
            <button type="submit" class="btn btn1">
                Enviar
            </button>
        <br><br>
        <Botonprestamo2 href="/" titulo="Salida"></Botonprestamo2>
        </center>
        
    </form>


