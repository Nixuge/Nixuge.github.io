<script lang="ts">
    import { updateSearchTags } from "$lib/projectviewer/searcher";
    import { setBoolTag, getBoolTag } from "$lib/projectviewer/settings";
    import "./checkbox.css";

    export let tag: string;
    export let value: boolean = true;
    
    // On init, basically if existing reload value from config
    const configVal = getBoolTag(tag, value);
    if (configVal !== undefined) {
        value = configVal;
    }

    function toggle() {
        value = !value;
        setBoolTag(tag, value);
        updateSearchTags();
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="tag" on:click={toggle} on:keypress={toggle}>
    <input class="checkbox" type="checkbox" bind:checked={value}>
    {tag}
</div>
