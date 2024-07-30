<script lang="ts">
	import dayjs from 'dayjs';
	let period=dayjs().format('A') =='AM'?'morning':'night';

</script>
<div class="p-12">
	<header class="flex justify-between">
		<div>
			<h1 class="text-3xl text-surface-900 mb-2">Good {period}🌻</h1>
			<h2 class="text-surface-900/80">{dayjs().format('Today : dddd , D-M-YYYY ')}</h2>
		<h3 class="text-xl text-surface-900/50">{dayjs().format('h:m A')}</h3>
		</div>
		<div class="bg-yellow-200 w-10 h-40"></div>
	</header >
</div>