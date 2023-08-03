<script lang="ts">
    import { Project, important_projects } from "$lib/projectviewer/projects";

    let moreShown = false;
    
    let selectedProject = important_projects[0];

    $: console.log(selectedProject)

    function setProject(proj: Project) {
        selectedProject = proj;
    }

    

</script>

<div id="projectviewer">
    <div id="projectscroller">
    {#each important_projects as proj}
        <div class="projectlogo" role="presentation" on:click={() => setProject(proj)} on:keypress={() => setProject(proj)}>
            <img src="{proj.icon_path}" alt={proj.icon_alt}>
        </div>
    {/each}
    </div>
    <div id="projectinfo">
        <!-- Should be safe, but meh -->
        <h1>{selectedProject.title}</h1>
        {@html selectedProject.html}
    </div>
</div>

<style>
    #projectviewer {
        background: #222;
        border-radius: 15px;
        /* width: min-content; */
        margin-left: 150px;
        display: flex;
        align-items: center;
        height: 100%;
        min-width: 50%;
        max-width: 100%;
        overflow: hidden;
    }

    #projectinfo {
        padding-left: 20px;
        align-self: flex-start;
        float: left;
        width: 80%;
        /* height: 50%; not "optimal" but no need to be precise anyways */
    }

    #projectscroller {
        float: left;
        width: min-content;
        border-radius: 15px 0 0 15px;
        border: 1px solid #999;
        border-right: 1px dotted #999;
        overflow: auto;
        max-height: 100%;
    }
    .projectlogo {
        /* border: 1px solid #fff; */
        transition: 50ms;
    }
    .projectlogo:hover {
        cursor: pointer;
        /* border: 1px solid #ff0000; */
    }

</style>