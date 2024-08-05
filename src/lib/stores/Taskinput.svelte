<script lang="ts">
    import {tasks}from '$lib/stores/tasks';
    import dayjs from 'dayjs';
    let title="";
    let datetime=dayjs().add(1,"hour").format("YYYY-MM-DDTHH:mm ");
    $:console.log(datetime);
    function addTask(){
        tasks.update((currentTasks)=>{
            currentTasks.push({
                title,
                assignedDate:datetime,
                isDone: false,
            });
            return currentTasks;
        });
    }
    $: console.log($tasks);
</script>

<div class="input-group input-group-divider flex flex-col sm:flex-row
 justify-between ">
    <input bind:value={title}
           class="flex-1 py-1 pl-6 !bg-white sm:w-fit "
           type="The task title "
           placeholder="The task title." />
    <input  bind:value={datetime}
            class="input !bg-yellow-200 rounded md:w-5" title="Input (datetime-local)" type="datetime-local" />
    <button on:click={addTask} class="variant-filled-secondary bg-yellow-200 p-2 ">
       <span class="mx-auto">Submit</span> </button>
</div>
