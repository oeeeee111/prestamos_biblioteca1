<script lang="ts">
	interface myProps {
		href: string;
		titulo: string;
	}

	let { href, titulo }: myProps = $props();
</script>


<a {href} class="btn btnp-3"><span>{titulo}</span></a>

<style>

.btn{
   font-family: 'Lora', serif;
   display: inline-flex;
   position: relative;
   padding: 20px 50px;
   text-decoration: none;
   color: #ffffff;
   justify-content: space-around;
   letter-spacing: 1px;
   border: none;
   

}
.btnp-3{
    top: -1100%;
left: 87%;

overflow: hidden;

}
.btnp-3::after{
    content:"";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color:rgb(10,157, 255);
z-index: -2;

}
.btnp-3::before{

    content: "";
    position: absolute;
    width: 100%;
    height: 250px;
   left: 0;
   bottom: -150%;
   border-radius: 30%;
    background-color:#081c63;
     z-index: -1;

}
.btnp-3:hover::before{
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
