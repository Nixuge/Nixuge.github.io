<script lang="ts">
    import { Project, important_projects, other_projects } from "$lib/projectviewer/projects";
    import { onMount } from "svelte";
    
    const showMore = new Project("show_more", "more.png", "", [], "");
    const showLess = new Project("show_less", "less.png", "", [], "");
    
    function getClonedArr() {
        return important_projects.map((x) => x);
    }

    let shownProjects = getClonedArr();
    shownProjects.push(showMore)

    let selectedProject = shownProjects[0];

    let projectComponent: any;

    async function updateComponent() {
        projectComponent = (await import(/* @vite-ignore */selectedProject.getComponentPath())).default;
    }

    $: selectedProject, updateComponent();
    

    function setProject(proj: Project) {
        if (proj.name === "show_more") {
            const newShownProjects = getClonedArr();
            newShownProjects.concat(other_projects)
            newShownProjects.push(showLess)
            shownProjects = newShownProjects;
        } else if (proj.name === "show_less") {
            const newShownProjects = getClonedArr();
            newShownProjects.push(showMore)
            shownProjects = newShownProjects;
        } else {
            selectedProject = proj;
        }
    }
</script>

<div id="projectviewer">
    <div id="projectscroller">
    {#each shownProjects as proj}
        <div class="projectlogo" role="presentation" on:click={() => setProject(proj)} on:keypress={() => setProject(proj)}>
            <img src="{proj.icon_path}" alt={proj.icon_alt}>
        </div>
    {/each}
    </div>
    <div id="projectinfo">
        <svelte:component this={projectComponent} />
        <h2 class="bottom">
            {#each selectedProject.links as link}
                <a href="{link.link}">{link.name}</a><br>
            {/each}
        </h2>
    </div>
</div>

<style>
    #projectviewer {
        /* width: min-content; */
        margin-left: 200px;
        display: flex;
        align-items: center;
        height: 100%;
        /* max-width: 100%; */
        overflow: hidden;
        /* padding: 1px; */
    }

    #projectscroller {
        background-color: #222;
        float: left;
        width: min-content;
        border-radius: 15px 0 0 15px;
        /* border: 1px solid #999; */
        border-right: 1px dotted #999;
        overflow: auto;

        max-height: 100%;
        line-height: 0px;

        flex-basis: 100px;
        flex-grow: 0;
        flex-shrink: 0;
    }
    img {
        width: 90px;
        height: 90px;
        border-radius: 15px;
    }
    .projectlogo {
        transition: 50ms;
        padding: 5px;
    }
    .projectlogo:hover {
        cursor: pointer;
    }

    #projectinfo {
        background-color: #222;
        padding: 10px 20px 20px 20px; /* Less padding on top as titles usually already provied part of those */
        align-self: flex-start;
        float: left;
        width: 100%;
        height: 100%;
        overflow: auto;
        position: relative;
        /* border: 1px solid #999; */
        border-left: none;
        border-radius: 0 15px 15px 0;
    }
    .bottom {
        background-color: #333333cc;
        padding: 7px;
        border-radius: 10px;
        position: fixed;
        bottom: 0;
        right: 20px;
    }
</style>