<script lang="ts">
    import { getSearchText, setSearchText } from "$lib/projectviewer/searcher";

    let search: string | undefined = undefined;
    if (search === undefined)
        search = getSearchText();
    
    $: setSearchText(search);
</script>

<div id="searchbarwrapper">
    <input id="searchbar" type="text" placeholder="Search for a project" bind:value={search}>
</div>

<style>
    #searchbarwrapper {
        margin: 3px;
        margin-right: 10px;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, .2);
    }
    #searchbar {
        color: var(--text-main);
        border: none;
        width: 100%;
        font-size: 1.5rem;
        border-radius: 5px;
        padding: 3px;
        padding-left: 10px;
        background-color: transparent;
    }
</style>