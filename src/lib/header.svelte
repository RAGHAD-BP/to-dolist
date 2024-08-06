<script lang="ts">
    import dayjs from 'dayjs';
    let period= dayjs().format('A') != 'AM' ? 'night⭐' : 'morning☀️';
    import {filter} from "$lib/stores/filter";
    import {ListBox, ListBoxItem, type PopupSettings} from "@skeletonlabs/skeleton";
    import {popup} from "@skeletonlabs/skeleton";
    let comboboxValue: string="All";
$: console.log(comboboxValue);
    const popupCombobox: PopupSettings = {
        event: 'click',
        target: 'popupCombobox',
        placement: 'bottom',
        closeQuery: '.listbox-item'
    };

</script>
<header class="flex justify-between">
    <div>
        <h1 class="text-2xl lg-text-4xl text-surface-900 ">Good {period}</h1>
        <h2 class="text-surface-900/80">{dayjs().format('dddd , D-M-YYYY ')}</h2>
        <h3 class="text-xl text-surface-900/50">{dayjs().format('h:mm A')}</h3>
    </div>
    <button
            class="btn variant-filled w-36 px-3z h-fit py-4 justify-between bg-yellow-400"
            use:popup={popupCombobox}>
        <span>{$filter}</span>
        <span > <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m7 10l5 5m0 0l5-5"/></svg>
        </span>
    </button>

    <div class="card w-48 shadow-xl py-2 bg-white-200 " data-popup="popupCombobox">
        <ListBox rounded="rounded-none"active="bg-yellow-200">
            <ListBoxItem bind:group={$filter} name="medium" value="All">All</ListBoxItem>
            <ListBoxItem bind:group={$filter} name="medium" value="Today">Today</ListBoxItem>
        </ListBox>
        <div class="arrow bg-surface-100-800-token" />
    </div>

</header >