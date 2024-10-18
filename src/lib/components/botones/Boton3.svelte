<script lang="ts">
	interface myProps {
		href: string;
		titulo: string;
	}

	let { href, titulo }: myProps = $props();
</script>



<a {href} class="btn btn-3"><span>{titulo}</span></a>

<style>
	.btn {
		font-weight: bold;
		display: inline-flex;
		position: relative;
		padding: 20px 50px;
		text-decoration: none;
		color: #ffff;
		justify-content: space-around;
		border: none;
		margin: 0 10px;

		& span {
			z-index: 20;
		}

		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			background-image: linear-gradient(
				100deg,
				rgb(255, 30, 143),
				rgb(19, 227, 255),
				rgb(251, 255, 20),
				rgb(255, 15, 15)
			);
			background-size: 300%;
			border-radius: 5px;
			transition: 0.6s ease all;
		}

		&:hover::after {
			background-position: 100%;
			filter: blur(15px);
		}

		&::before {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			background-image: linear-gradient(
				100deg,
				rgb(255, 30, 143),
				rgb(19, 227, 255),
				rgb(251, 255, 20),
				rgb(255, 15, 15)
			);
			background-size: 300%;
			border-radius: 5px;
		}
	}
</style>
