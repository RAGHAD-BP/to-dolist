<script lang="ts">
import dayjs from "dayjs";
import {tasks}from '$lib/stores/tasks';
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime);
import TaskListitems from "$lib/stores/TaskListitems.svelte";
</script>

<ol class="gap-2 flex flex-col">
    <h1>the not comblemet task:</h1>
    <TaskListitems doneTasks={false} />
            </ol>
<ol class="gap-2 flex flex-col">
    <h1>the comblemet task:</h1>
    <TaskListitems doneTasks={true}/>
</ol>
