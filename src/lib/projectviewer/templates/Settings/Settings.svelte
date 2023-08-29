<script>
    import { Tag } from "$lib/projectviewer/projects";
    import { DISABLED_BY_DEFAULT_TAGS } from "$lib/settings";
    import { updateSearchTags } from "$lib/projectviewer/searcher"
    import { toggleTheme } from "$lib/theme";
    import TagCheckbox from "./TagCheckbox.svelte";
    import SearchBar from "./SearchBar.svelte";
    import SettingCheckbox from "./SettingCheckbox.svelte";
    import "./checkbox.css";
</script>

<h1>Search settings</h1>

<h2>Search query</h2>
<SearchBar />

<h2>Tags</h2>
<div id="tagsettings">
    {#each Object.values(Tag) as tag}
        <TagCheckbox tag={tag} value={DISABLED_BY_DEFAULT_TAGS.includes(tag) ? false : undefined} />
    {/each}
</div>
<h2>Other settings</h2>
<div id="othersettings">
    <SettingCheckbox 
        key="inclusion" 
        textTrue="Tag inclusion mode"
        textFalse = "Tag exclusion mode"
        subtextTrue = "if an element matches at least one tag you selected, it'll be shown."
        subtextFalse = "if an element matches a tag you have unselected it won't be shown, even if it matches another selected one."
        functionAfterToggle = {updateSearchTags}
    />
    <SettingCheckbox 
        key="theme" 
        textTrue="Dark mode"
        textFalse = "White mode"
        functionAfterToggle = {toggleTheme}
    />
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
