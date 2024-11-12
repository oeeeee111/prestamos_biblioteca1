<script lang="ts">
	interface myProps {
		href: string;
		titulo: string;
	}

	let { href, titulo }: myProps = $props();
</script>


<a {href} class="btn btnp-2"><span>{titulo}</span></a>

<style>

.btn{
   font-family: 'Lora', serif;
   display: inline-flex;
   position: relative;
   padding: 11px 20px;
   text-decoration: none;
   color: #ffffff;
   justify-content: space-around;
   letter-spacing: 1px;
   border: none;
   

}
.btnp-2{
    top: -170px;
left: 740px;
overflow: hidden;
z-index: 3;


}
.btnp-2::after{
    content:"";
    position: absolute;
    width: 100%;
    height: 120%;
    top: 0;
    left: 0;
    background-color:rgb(10,157, 255);
z-index: -2;

}
.btnp-2::before{

    content: "";
    position: absolute;
    width: 99%;
    height: 130px;
   left: 0;
   bottom: -150%;
   border-radius: 30%;
    background-color:#081c63;
     z-index: -1;

}
.btnp-2:hover::before{
animation: btn-5 3s linear both;


}
@keyframes btn-5{
0%{

transform: rotate(0deg);

}
    100%{
    bottom: 100px;
    transform: rotate(360deg);

}

}






</style>