<script lang="ts">
    import {tasks}from '$lib/stores/tasks';
    import dayjs from 'dayjs';
    let title="";
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

<div class="input-group input-group-divider flex justify-between ">
    <input bind:value={title}
           class="flex-1 py-1 px-2.5 !bg-white"
           type="The task title " placeholder="The task title." />
    <button on:click={addTask} class="variant-filled-secondary bg-yellow-200">Submit</button>
</div>
