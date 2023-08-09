<script>
    import Checkbox from "./Checkbox.svelte";
    import SearchBar from "./SearchBar.svelte";

</script>
<h1>Search settings</h1>

<h2>Search query</h2>
<SearchBar />

<h2>Tags</h2>
<div id="tagsettings">
    {#each {length: 12} as _, i}
        <Checkbox setting="tag{i+1}" />
    {/each}

    
</div>

<style>
    #tagsettings {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    h2 {
        margin-bottom: 10px;
    }
</style>