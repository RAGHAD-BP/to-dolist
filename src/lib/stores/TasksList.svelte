<script lang="ts">
import dayjs from "dayjs";
import {tasks}from '$lib/stores/tasks';
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime);
import TaskListitems from "$lib/stores/TaskListitems.svelte";
import {fade} from "svelte/transition";
</script>
{#if $tasks.length==0}
    <div class="flex flex-col items-center justify-center h-[50dvh] text-2xl">
There no tasks
        <img src="/noTask.svg" class="grayscale h-40 w-40" >
    </div>
{:else}
{#if $tasks.filter((task)=>!task.isDone).length>0}
    <ol transition:fade class="gap-2 flex flex-col">
        <h1>the not complemed tasks🫵👇:</h1>
        <TaskListitems doneTasks={false} />
    </ol>
{/if}
{#if $tasks.filter((task)=>task.isDone).length>0}
    <ol transition:fade class="gap-2 flex flex-col">
        <h1>the complemed tasks👏✨:</h1>
        <TaskListitems doneTasks={true}/>
    </ol>
{/if}
    {/if}