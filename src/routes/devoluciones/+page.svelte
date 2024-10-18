
<script>

	import Botonprestamo2 from '$lib/components/botones/botonprestamo2.svelte';
	import Botonprestamo1 from '$lib/components/botones/botonprestamo1.svelte';


</script>




<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>


    <center>
       
        <br>
    </center>
    <img src="escudo.jpeg" alt="" class="1">
    <div class="contenedor">
      
        <center>
             
                <br><br><br><br>
              <label for="idl" style="font-size: 20px;">Nombre del libro</label>
              <input type="text" class="uwu" placeholder="Escriba Nombre del Libro" id="idl" name="idl" size="40">
              <br><br>
    
              <label for="F" style="font-size: 20px;">Nombres Completo </label>
              <input type="text" class="tres" placeholder="Dijiste sus Nombres y Apellidos" id="F" name="F" size="38">
              <br><br>
    
              <label for="F" style="font-size: 20px;">ID del Estudiante</label>
              <input type="text" class="tres" placeholder="Dijite su Tarjeta de Identidad o Cedula " id="F" name="F" size="40">
              <br><br>
    
              <label for="F" style="font-size: 20px;">ID del libro</label>
              <input type="text" class="tres" placeholder="Escriba el ID de Libro" id="F" name="F" size="46">
              <br><br>
            
              <Botonprestamo1 href="/devoluciones" titulo="Enviar" > </Botonprestamo1>
<br><br>

<Botonprestamo2 href="/referencia" titulo="Salida" > </Botonprestamo2>

        </center>
     </div>
        
        <style>
         



        </style>