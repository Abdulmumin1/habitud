<script>
	import share_image from '$lib/images/share.gif';
</script>

<div
	class="p-4 md:p-0 overflow-hidden flex flex-col md:flex-row min-h-screen items-center justify-center gap-2"
>
	<div class="h-[400px] w-[400px]">
		<img src={share_image} alt="" />
	</div>
	<div class="text-2xl font-semibold italic text-center text-stone-900">
		Beautifully
		<span
			class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:rounded-md before:bg-stone-300 relative inline-block"
		>
			<span class="relative text-white">share</span>
		</span>
		your achievements
	</div>
</div>
