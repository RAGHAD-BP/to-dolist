<script lang="ts">
	import Header from "$lib/header.svelte";
	import Taskinput from "$lib/stores/Taskinput.svelte";
	import dayjs from 'dayjs';
</script>
<div class="p-2 sm:p-4 pt-4 md:p-8 xl:p-12 flex-col gap-8 max-w-screen-lg  mx-auto grid">
	<Header />
	<Taskinput/>

	<ol class="gap-2 flex flex-col">
		<li class="bg-white p-2 xl:p-4 rounded-lg  justify-between items-center p-4">
<!--			<button class="btn" >-->
<div><input class="chekbox border-2x h-6 w-6 border-yellow-400 rounded-lg" type="checkbox"/>
	<span class="mx-1">
				raghad
			</span></div>
			<div class="flex">

				<button class="btn variant-filled-surface
hover:bg-surface-500">
					{dayjs().format("h:mm A D/M/YYYY")}
				</button>

				<button class="btn variant-filled-surface
hover:bg-surface-500">
						<svg class="h-5 w-5 "
								xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="6" cy="12" r="1"/><circle cx="18" cy="12" r="1"/></g></svg>
				</button>
			</div>
		</li>
	</ol>
</div>