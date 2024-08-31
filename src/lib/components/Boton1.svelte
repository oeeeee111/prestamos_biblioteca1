<script lang="ts">
  interface myProps {
      href: string;
      titulo: string;
  }
  let {href, titulo}: myProps = $props(); 
</script>

<a {href} class="btn btn-4"><span>{titulo}</span></a>

<style>
	.btn {
		display: flex;
		font-family: 'Lora', serif;
		display: inline-flex;
		position: relative;
		padding: 20px 50px;
		text-decoration: none;
		color: #000;
		justify-content: space-around;
		letter-spacing: 1px;
		border: none;
		transition: 0.6s ease all;
		overflow: hidden;
		margin: 0 10px;
	}

	.btn span {
		position: relative;
		z-index: 2;
		transition: 0.6s ease all;
	}

	.btn-4 {
		transition: 0.6s ease all;
	}

	.btn-4::after {
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

	.btn-4::before {
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

	.btn-4:hover::after {
		background-color: #ffffff31;
		transform: skew(20deg, 0deg) translateX(225px);
	}

	.btn-4:hover::before {
		background-color: #fd8802;
		transition: 0.6s ease all;
		transform: skew(20deg, 0 deg) scale(1.1);
	}
</style>
