<script>
	import notification from '$lib/images/notifications.png';
	import NotificationCard from './notificationCard.svelte';
</script>

<div
	class=" overflow-hidden p-4 md:p-0 bg-orange-50 flex flex-col md:flex-row min-h-screen items-center justify-center gap-2 group"
>
	<div class="h-[400px] w-full max-w-[400px] flex flex-col gap-2 relative">
		<NotificationCard
			classlist={'md:absolute top-0 w-full group-hover:top-[-5] transiton-all duration-300   '}
			color="red"
			title="Run a mile"
		/>
		<NotificationCard
			classlist={'md:absolute top-16 right-20 w-full group-hover:right-32 transiton-all duration-300 '}
			color="emerald"
			title="Take a yoga class"
		/>
		<NotificationCard
			classlist={' md:absolute top-32 w-full right-[-102px] group-hover:right-[110px] transiton-all duration-300'}
			color="blue"
			title="Meditate for 10 minutes"
		/>
		<NotificationCard
			classlist={'hidden md:flex absolute top-48 bg-emerald-400 w-full group-hover:top-52 transiton-all duration-300 '}
			title="Write a Journal"
		/>
	</div>
	<div class="  text-slate-900">
		<h4 class="text-2xl font-semibold">Reminders to help you stay on track.</h4>
		<p>Stay on Course with Helpful Reminders</p>
	</div>
</div>
