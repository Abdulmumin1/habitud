<script>
	function addTooltip(element) {
		// element.classList.add('relative');
		const container = document.createElement('div');
		container.classList = 'relative';
		const tooltip = document.createElement('div');
		const newElement = element.cloneNode(true);
		tooltip.classList = 'p-2 bg-orange-100 rounded-xl absolute bottom-[100%]  w-[200px] hidden m-2';
		tooltip.innerText = 'this is a tooltip';

		container.appendChild(tooltip);
		container.appendChild(newElement);

		element.parentElement.replaceChild(container, element);

		newElement.addEventListener('mouseover', (event) => {
			tooltip.classList.remove('hidden');
		});
		newElement.addEventListener('mouseout', (event) => {
			tooltip.classList.add('hidden');
		});
	}
</script>

<div class="h-screen flex items-center justify-center">
	<button use:addTooltip class="bg-orange-300 p-2 border-black rounded-md border-2">Hover me</button
	>

	<div class="bordered-div rounded-3xl">Content goes here.</div>
</div>

<style>
	.bordered-div {
		position: relative;
		width: 200px;
		height: 100px;
		background-color: lightgray;
		padding: 10px;
	}

	.bordered-div::before {
		content: '';
		position: absolute;
		border: 10px solid black;
		width: 100%;
		height: 100%;
		border-radius: 200px;
	}

	.bordered-div::before {
		top: 0;
		left: 0;
	}
</style>
