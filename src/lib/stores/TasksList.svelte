<script lang="ts">
import dayjs from "dayjs";
import {tasks}from '$lib/stores/tasks';
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime);
</script>

<ol class="gap-2 flex flex-col">
    {#each $tasks as task}
        <li class="bg-white p-2 xl:p-4 rounded-lg flex justify-between items-center">
            <div>
                <input class="checkbox border-2x h-6 w-6 border-yellow-500 rounded-lg mx-1" type="checkbox"/>
                <span> {task.title}</span>
            </div>
            <div class="gap-1 flex">
            <button class="btn variant-filled-surface
hover:bg-surface-400 rounded-xl ">
                {dayjs().to(dayjs(task.assignedDate))}
            </button>

            <div class="flex gap-1 ">
                <button class="btn variant-filled-surface
hover:bg-surface-400 rounded-xl ">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                           stroke-width="1.5">
                            <circle cx="8" cy="2.5" r=".75"/>
                            <circle cx="8" cy="8" r=".75"/>
                            <circle cx="8" cy="13.5" r=".75"/>
                        </g>
                    </svg>
                </button>
                </div>
            </div>
        </li>
        {/each}
            </ol>