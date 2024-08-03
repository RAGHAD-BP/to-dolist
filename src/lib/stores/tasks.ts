import { persisted } from 'svelte-persisted-store'
// @ts-ignore
import type {Task} from 'svelte/src/runtime/internal/public';
 export const tasks=persisted<Task[]>('task',[]);