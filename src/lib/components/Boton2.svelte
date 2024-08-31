<a href="bibliotecaE.html" class="btn btn-2"
	>Devolución <span></span>
	<span></span>
</a>

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

	.btn-2:hover {
		background-color: #042e4b;
		box-shadow: 0 0 20px var(--color);
		border-color: var(--color);
	}

	.btn-2 span:nth-child(n) {
		position: absolute;
		width: 16px;
		height: 16px;
		border: 3px solid;
	}

	.btn-2 span:nth-child(1) {
		right: 10%;
		top: -15%;
		background-color: #ffff;
	}

	.btn-2 span:nth-child(2) {
		left: 10%;
		bottom: -16%;
		background-color: #ffff;
		border-color: #ffff;
	}

	.btn-2:hover span:nth-child(1) {
		right: 80%;
		transform: rotate(90deg);
		color: var(--color);
		background-color: var(--color);
	}

	.btn-2:hover span:nth-child(2) {
		left: 80%;
		transform: rotate(90deg);
		background-color: #042e4b;
	}
</style>
