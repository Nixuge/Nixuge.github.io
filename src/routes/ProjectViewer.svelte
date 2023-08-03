<script>
    import { important_projects } from "$lib/projectviewer/projects";


</script>

<div id="projectviewer">
    <ul>
    {#each important_projects as proj}
        <li>{proj.name}</li>
    {/each}
    
    
</ul>

</div>

<style>
    #projectviewer {
        background: #222;
        border-radius: 15px;
        /* width: min-content; */
        float: right;
    }
</style>