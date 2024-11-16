<script lang="ts">
    import {tasks}from '$lib/stores/tasks';
    import dayjs from 'dayjs';
    let title="";
    let datetime=dayjs().add(1,"hour").format('YYYY-MM-DD HH:mm');
    $:console.log(datetime);
    function addTask(){
        tasks.update((currentTasks)=>{
            currentTasks.push({
                title,
                assignedDate:datetime,
                isDone: false,
            });
            return currentTasks.sort((a :Task,b :Task)=>{
              return dayjs(a.assignedDate).unix()-dayjs(b.assignedDate).unix()
            });
        });
    }
    $: console.log($tasks);
</script>

<form class="input-group input-group-divider flex flex-col sm:flex-row
 justify-between bg-white ">
    <input bind:value={title}
           class="flex-1 py-1 pl-6  sm:w-fit"
           type="The task title "
           placeholder="The task title." />

    <input  bind:value={datetime}
            class="input rounded sm:w-fit" title="Input (datetime-local)" type="datetime-local" />
    <button on:click={addTask} class="variant-filled-secondary bg-yellow-200 p-2  "
          disabled={title.trim().length==0}>
       <span class="mx-auto">Submit</span> </button>
</form>
