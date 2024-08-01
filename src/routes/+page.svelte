<script lang="ts">
	import Header from "$lib/header.svelte";

</script>
<div class="p-12 flec-col gap-8">
	<Header />

	<div class="input-group input-group-divider flex justify-between">
		<input class="flex-1 py-1 px-2.5
		!bg-white" type="The task title " placeholder="The task title." />
		<button class="variant-filled-secondary bg-yellow-200">Submit</button>
	</div>

</div>