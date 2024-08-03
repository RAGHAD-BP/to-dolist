<script lang="ts">
	import Header from "$lib/header.svelte";
	import {tasks}from '$lib/stores/tasks';
	import dayjs from 'dayjs';
	// const updateNAME = (tasks:string): string => tasks + '1';
	let title="";
	 //$:console.log(title);
	function addTask(){
		tasks.update((currentTasks)=>{
			currentTasks.push({
						title,
						assignedDate: dayjs(),
						isDone: false,
					});
		return currentTasks;
		});
	}
	$: console.log($tasks);
</script>
<div class="p-12 flec-col gap-8">
	<Header />

	<div class="input-group input-group-divider flex justify-between">
		<input bind:value={title} class="flex-1 py-1 px-2.5
		!bg-white" type="The task title " placeholder="The task title." />
		<button on:click={addTask} class="variant-filled-secondary bg-yellow-200">Submit</button>
	</div>

</div>