<script lang="ts">
	interface myProps {
		href: string;
		titulo: string;
	}

	let { href, titulo }: myProps = $props();
</script>

<a {href} class="btn btnp-1"><span>{titulo}</span></a>


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


.btnp-1{
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