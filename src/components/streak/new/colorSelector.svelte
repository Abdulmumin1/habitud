<script>
	const colors = [
		'bg-stone-300',
		'bg-gray-300',
		'bg-zinc-300',
		'bg-neutral-300',
		'bg-stone-300',
		'bg-red-300',
		'bg-stone-300',
		'bg-amber-300',
		'bg-yellow-300',
		'bg-lime-300',
		'bg-green-300',
		'bg-emerald-300',
		'bg-teal-300',
		'bg-cyan-300',
		'bg-sky-300',
		'bg-blue-300',
		'bg-indigo-300',
		'bg-violet-300',
		'bg-purple-300',
		'bg-fuchsia-300',
		'bg-pink-300',
		'bg-rose-300'
	];

	let colorSelected = $state('stone');

	function setColor(col) {
		colorSelected = col.replace(/^bg-|-300$/g, '');
		console.log(col);
	}
	// const shades = ['300'];

	// const colorClasses = colors.flatMap((color) => shades.map((shade) => `bg-${color}-${shade}`));
</script>

<div
	class=" p-2 rounded-xl flex flex-col gap-2 bg-{colorSelected}-100 transition-colors duration-300 first-letter:"
>
	<p
		class="py-3 px-2 rounded-lg text-base md:text-xl bg-{colorSelected}-200 transition-colors duration-300"
	>
		Select Color
	</p>
	<input type="text" name="color" id="" class="hidden" bind:value={colorSelected} />
	<div class="grid grid-cols-7 gap-2 bg-white p-1 rounded-xl">
		{#each colors as color}
			<button
				type="button"
				onclick={() => setColor(color)}
				class={`w-full max-w-2 h-full rounded-lg transition-all active:scale-90 duration-300 ${color}`}
				style="aspect-ratio: 1/1;"><span class="hidden">{color}</span></button
			>
		{/each}
	</div>
</div>

<style>
	.color-box {
		width: 100px;
		height: 100px;
		margin: 10px;
	}
</style>
