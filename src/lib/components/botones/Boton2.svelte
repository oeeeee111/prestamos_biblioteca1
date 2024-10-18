<script lang="ts">
	interface myProps {
		href: string;
		titulo: string;
	}

	let { href, titulo }: myProps = $props();
</script>

<a {href} class="btn2"
	>{titulo}<span></span>
	<span></span>
</a>

<style>
	.btn2 {
		
		font-family: 'Lora', serif;
   display: inline-flex;
   position: relative;
   padding: 20px 50px;
   text-decoration: none;
   color: #ffffff;
   justify-content: space-around;
   letter-spacing: 1px;
   border: none;
			
		border: 3px solid;
  border: 3px solid;
   transition: 0.6s ease all;
  border-color: #ffff;

		& span {
			position: relative;
			z-index: 2;
			transition: 0.6s ease all;
		}

		&:hover {
			background-color: #042e4b;
			box-shadow: 0 0 20px var(--color);
			border-color: var(--color);
		}

		& > span {
			position: absolute;
			width: 16px;
			height: 16px;
			border: 3px solid;
		}

		& :first-child {
			right: 10%;
			top: -15%;
			background-color: #ffff;
		}

		& :last-child {
			left: 10%;
			bottom: -16%;
			background-color: #ffff;
			border-color: #ffff;
		}

		&:hover :first-child {
			right: 80%;
			transform: rotate(90deg);
			color: var(--color);
			background-color: var(--color);
		}

		&:hover :last-child {
			left: 80%;
			transform: rotate(90deg);
			background-color:#042e4b;
		}


	}

</style>
