<script>
    import { Tag } from "$lib/projectviewer/projects";
    import Checkbox from "./Checkbox.svelte";
    import SearchBar from "./SearchBar.svelte";
</script>

<h1>Search settings</h1>

<h2>Search query</h2>
<SearchBar />

<h2>Tags</h2>
<div id="tagsettings">
    {#each Object.values(Tag) as tag}
        <Checkbox setting={tag} />
    {/each}
</div>

<style>
    #tagsettings {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    h2 {
        margin-bottom: 10px;
    }
</style>
