<div class="flip-box bg-orange-300">
	<div class="flip-box-inner relative h-full w-full">
		<div class="flip-box-front h-full w-full">
			<slot />
		</div>
		<div class="flip-box-back">
			<h2>Back Side</h2>
		</div>
	</div>
</div>

<style>
	.flip-box {
		width: 100%;
		height: 100%;
		perspective: 1000px;
	}

	.flip-box-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.8s;
		transform-style: preserve-3d;
	}

	.flip-box:hover .flip-box-inner {
		transform: rotateY(180deg);
	}

	.flip-box-front,
	.flip-box-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}

	.flip-box-back {
		background-color: dodgerblue;
		color: white;
		transform: rotateY(180deg);
	}
</style>
