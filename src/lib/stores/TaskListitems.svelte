<script lang="ts">
import {tasks} from "$lib/stores/tasks.js";
import dayjs from "dayjs";
import { slide } from 'svelte/transition';
import {filter} from "$lib/stores/filter";
export let doneTasks:boolean;
import {getModalStore, type ModalSettings} from '@skeletonlabs/skeleton';
 const modalStore = getModalStore();
function confirmDelet(task:Task){

    const modal: ModalSettings = {
        type: 'confirm',
        // Data
        title: 'Delete',
        body: `Are you sure you want to delete the task:"${task.title}"?`,
        buttonTextConfirm:"YES",
        buttonTextCancel:"NO",

        // TRUE if confirm pressed, FALSE if cancel pressed
        response: (r: boolean) => {
            if(r){
                tasks.update((currentTasks)=> {
                    let index = currentTasks.indexOf(task);
                    currentTasks.splice(index,1);
                    return currentTasks;
                });
            }
        },
    };
    modalStore.trigger(modal);
}
function applyfilter(filter:typeof $filter,task:Task):boolean {
    switch (filter) {
        case "Today":
            return dayjs(task.assignedDate).unix() - dayjs().unix() <= 24 * 60 * 60;
        case "All":
        default:
            return true;
    }
}
</script>
{#each $tasks as task}
    {#if task.isDone==doneTasks && applyfilter($filter,task)  }
        <div transition:slide></div>
        <li class="bg-white p-2 xl:p-4 rounded-lg flex justify-between items-center h-fit">
            <div>
                <input bind:checked={task.isDone} class="checkbox border-2x w-6 h-6 border-yellow-500 rounded-lg mx-1" type="checkbox"/>
                <span> {task.title}</span>
            </div>
            <div class="gap-1 flex">
                <button class="btn variant-filled-surface
hover:bg-yellow-400 rounded-xl bg-yellow-400">
                    {dayjs().to(dayjs(task.assignedDate))}
                </button>

                <div class="flex gap-1 ">
                    <button on:click={()=>confirmDelet(task)} class="btn variant-filled-surface
hover:bg-yellow-400 rounded-xl bg-yellow-500 ">
                        <svg    class="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2h-1v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2zM17 7H7v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1zm-2.72-3H9.72l-.333 1h5.226z"/></g></svg>
                    </button>
                </div>
            </div>
        </li>
    {/if}
{/each}
