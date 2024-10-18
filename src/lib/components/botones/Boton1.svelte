<script lang="ts">

	interface myProps {
		href: string;
		titulo: string;
	}

	let { href, titulo }: myProps = $props();
	
</script>

<a {href} class="btn"><span>{titulo}</span></a>

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
			width: 8%;
			height: 100%;
			left: 5%;
			top: 0;
			background-color: #ffff;
			transform: skew(20deg, 0deg);
			transition: 0.6s ease all;
		}

		&::before {
			content: '';
			position: absolute;
			width: 78%;
			height: 100%;
			left: -11;
			top: 0;
			transform: skew(20deg, 0deg);
			border: 2px solid #e48820;
			border-bottom: right;
			transition: 0.6s ease all;
		}

		&:hover {
			&::after {
				background-color: #ffffff31;
				transform: skew(20deg, 0deg) translateX(225px);
				opacity: 0;
			}
		}

		&:hover {
			&::before {
				background-color: #fd8802;
				transition: 0.6s ease all;
			}
		}
	}
</style>
