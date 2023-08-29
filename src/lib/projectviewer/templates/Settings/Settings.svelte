<script>
    import { Tag } from "$lib/projectviewer/projects";
    import { DISABLED_BY_DEFAULT_TAGS, setBoolSetting, getBoolSetting } from "$lib/projectviewer/settings";
    import { updateSearchTags } from "$lib/projectviewer/searcher"
    import TagCheckbox from "./TagCheckbox.svelte";
    import SearchBar from "./SearchBar.svelte";
    import "./checkbox.css";
    import SettingCheckbox from "./SettingCheckbox.svelte";

    // Will do a component if I add too many options
    let inclusion = true;

    // On init, basically if existing reload value from config
    const configVal = getBoolSetting("inclusion", true);
    if (configVal !== undefined) {
        inclusion = configVal;
    }
    
    function toggleInclusion() {
        inclusion = !inclusion;
        setBoolSetting("inclusion", inclusion);
        updateSearchTags();
    }
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
