
<div class="hola">
    <div class="search-container">
     
             
        <form action="/buscar" method="get">
           
            <br><br>
            <input type="text" id=buscador name="query" class="search-box" placeholder="Buscar...">

            <br><br>
            <button  type="submit" class="search-button" >Buscar</button>
        </form>
        
    </div>

</div>


    <style>

        .search-container {

            width: 200%;
            max-width: 600px;
            margin: auto;
        }
        .search-box {
            
            width: 100%;
            padding: 10px 30px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            display: block;
        }
        

        .search-button {
           
            padding: 10px 20px;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            
        }
        .search-button:hover {
            background-color: #0056b3;
        }
    </style>



