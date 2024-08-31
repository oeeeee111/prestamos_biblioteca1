<a href="Abiblioteca.html" class="btn btn-3"><span>Prestamo</span></a>

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

	.btn-3 {
		border: 3px solid #faa5ec;
	}

	.btn-3::after {
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
		transition: o.9s ease all;
	}

	.btn-3:hover::after {
		background-position: 100%;
		filter: blur(15px);
	}

	.btn-3::before {
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
</style>
