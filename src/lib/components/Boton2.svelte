<a href="bibliotecaE.html" class="btn"
	>Devolución <span></span>
	<span></span>
</a>

<style>
	.btn {
		
		position: relative;
		padding: 20px 50px;
		text-decoration: none;
		font-weight: bold;
		color: #000;
		justify-content: space-around;
		border: none;
		overflow: hidden;
		margin: 0 10px;

		& span {
			position: relative;
			z-index: 2;
			transition: 0.6s ease all;
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
			color: var(--color);
			background-color: var(--color);
		}
		
	}
</style>
