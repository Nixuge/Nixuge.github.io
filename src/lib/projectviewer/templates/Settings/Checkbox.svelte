<script lang="ts">
    import { updateSearchTags } from "$lib/projectviewer/searcher";
    import { setBool, getBoolAndSetIfUndefined } from "$lib/projectviewer/settings";

    export let setting: string;
    export let value: boolean = true;
    
    // On init, basically if existing reload value from config
    const configVal = getBoolAndSetIfUndefined(setting, value);
    if (configVal !== undefined) {
        value = configVal;
    }

    function toggle() {
        value = !value;
        setBool(setting, value);
        updateSearchTags();
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="tag" on:click={toggle} on:keypress={toggle}>
    <input class="checkbox" type="checkbox" bind:checked={value}>
    {setting}
</div>

<style>
    .tag {
        white-space: nowrap;
        overflow: auto;
        transition: 100ms;
        cursor: pointer;
        font-size: 1.5rem;
        padding: 3px;
        margin: 3px;
        margin-right: 10px;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, .2);
    }
    .checkbox {
        cursor: pointer;
        width: 1.2rem;
        height: 1.2rem;
    }
</style>