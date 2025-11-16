<script>
	/**
	 * @typedef {Object} Props
	 * @property {any} classlist
	 * @property {string} [color]
	 * @property {any} title
	 */

	/** @type {Props} */
	let { classlist, color = 'orange', title } = $props();
</script>

<div class={`flex flex-col bg-${color}-300 rounded-md p-4 ${classlist}`}>
	<div class="flex justify-between items-center">
		<h4 class="text-black">Notification</h4>
		<button class="text-white font-bold">X</button>
	</div>
	<p class="text-white mt-2">{title}</p>
</div>
