
<script>
import Botonprestamo1 from "$lib/components/botones/botonprestamo1.svelte";
import Botonprestamo2 from "$lib/components/botones/botonprestamo2.svelte";

</script>


     

<br>
<main class="container mx-auto p-4 flex-1">
       <form action="/?CrearPrestamo" method="post">
        <center>
            <div class="cont1"></div>
                <br><br>
                <label for="nombre" style="font-size: 20px;" >Nombres Completos</label>
                <input type="text" placeholder="Escriba sus Nombres y Apellidos" id="nombre" name="nombre" size="34" width="100" height="10">
                <br><br>
                <label for="codigo" style="font-size: 20px;" >ID del estudiantes</label>
                <input type="text" placeholder="Dijite su Tarjeta de Identidad o Cedula " id="codigo" name="codigo" size="37">
                <br><br>
                <label for="titulo" style="font-size: 20px;">Titulo del libro</label>
                <input type="text" class="tres" placeholder="Ingrese el Nombre del Libro " id="titulo" name="titulo" size="41">
                <br><br>
                <label for="codigo" style="font-size: 20px;">ID del libro</label>
                <input type="text" class="tres" placeholder="Dijite el ID de Libro " id="codigo" name="codigo" size="45">
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
</main>
       
<style>

.btn{
    display: flex;
    font-family: 'Lora', serif;
    display: inline-flex;
    position: relative;
    padding: 20px 50px;
    text-decoration: none;
    color: #000000;
    justify-content: space-around;
    align-items: center;  
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
}

.btn span{
    position: relative;
    z-index: 2;
    transition: 0.6s ease all;
}
.btn{
    transition: 0.6s ease all;
   
}


.btn1{
    left: -60px;
    border: 3px solid #e970d5;
   
overflow: hidden;

::after{
    content: "";
    width: 400%;
    height: 400px;
    top: -500px;
    left: -120%;
    background-color: #e970d5;
    color: azure;
    position: absolute;
    z-index: -1;
    transition: 0.9s ease-in-out all;
    border-radius: 0px 0px 300px 300px;

}

:hover{
    color: azure;
    transition: 0.9s ease all;
}
:hover::after{
    top: -110%;
}
}


</style>
