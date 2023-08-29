<script lang="ts">
    import { getBoolSetting, setBoolSetting } from "$lib/settings";
    import "./checkbox.css";

    export let key: string
    export let textTrue: string
    export let textFalse: string
    export let functionAfterToggle: Function
    export let subtextTrue: string = ""
    export let subtextFalse: string = ""
    export let value: boolean = true

    // On init, basically if existing reload value from config
    const configVal = getBoolSetting(key, value);
    if (configVal !== undefined) {
        value = configVal;
    }

    function toggleInclusion() {
        value = !value;
        setBoolSetting(key, value);
        functionAfterToggle();
    }
    
</script>

<div id="othersettings">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="tag" on:click={toggleInclusion} on:keypress={toggleInclusion}>
        <input class="checkbox" type="checkbox" bind:checked={value}>
        {value ? textTrue : textFalse}
        {#if subtextTrue != ""}
            <br>
            <span class="optioninfo">{value ? subtextTrue : subtextFalse}</span>
        {/if}
    </div>
</div>

<style>
    .tag {
        padding: 10px;
    }
    .optioninfo {
        padding: 0px;
        font-size: .7em;
        color: var(--text-fade-1)
    }
</style>