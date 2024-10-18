
<script>
import Botonprestamo1 from "$lib/components/botones/botonprestamo1.svelte";
import Botonprestamo2 from "$lib/components/botones/botonprestamo2.svelte";

</script>


     

<br>
       
        <center>
            <div class="cont1"></div>
                <br><br>
                <label for="n" style="font-size: 20px;" >Nombres Completos</label>
                <input type="text" placeholder="Escriba sus Nombres y Apellidos" id="n" name="n" size="34" width="100" height="10">
                <br><br>
                <label for="idL" style="font-size: 20px;" >ID del estudiantes</label>
                <input type="text" placeholder="Dijite su Tarjeta de Identidad o Cedula " id="idL" name="idL" size="37">
                <br><br>
                <label for="F" style="font-size: 20px;">Titulo del libro</label>
                <input type="text" class="tres" placeholder="Ingrese el Nombre del Libro " id="F" name="F" size="41">
                <br><br>
                <label for="F" style="font-size: 20px;">ID del libro</label>
                <input type="text" class="tres" placeholder="Dijite el ID de Libro " id="F" name="F" size="45">
                <br><br>
                <label for="F" style="font-size: 20px;">Fecha de devolucion</label>
                <input type="text" class="tres" placeholder="Ingrese la Fecha de Devolucion " id="F" name="F" size="34">
                <br><br>


                
  <Botonprestamo1 href="/botones" titulo="Enviar" > </Botonprestamo1>
        <br><br>
        <Botonprestamo2 href="/botones" titulo="Salida"></Botonprestamo2>
        </center>
        

        <style>


        </style>

