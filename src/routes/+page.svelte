<script lang="ts">
	import Header from "$lib/header.svelte";
	import Taskinput from "$lib/stores/Taskinput.svelte";
	import TasksList from "$lib/stores/TasksList.svelte"
</script>
<div class="p-2 sm:p-4 pt-8 md:p-8 xl:p-12 flex flex-col gap-4 max-w-screen-lg mx-auto ">
	<Header />
	<Taskinput/>
	<TasksList/>
</div>