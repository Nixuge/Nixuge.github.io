<script lang="ts">
    import { setBool } from "$lib/projectviewer/settings";

    export let setting: string;
    export let value: boolean = true; //for some reason the bind is inverted

    function toggle() {
        value = !value;
        setBool(setting, value);
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
        width: 1.2rem;
        height: 1.2rem;
    }
</style>