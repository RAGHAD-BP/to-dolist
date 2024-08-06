import { persisted } from 'svelte-persisted-store'
// @ts-ignore
import type {Task} from 'svelte/src/runtime/internal/public';
export const filter=persisted<"All"|
    "Today">('fliter',"All");