<script lang="ts">
    import { Project, important_projects, other_projects } from "$lib/projectviewer/projects";
    
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

    const map = new Map<String, HTMLElement>();

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
    <div id="projectscrollerwrap">
        <div id="projectscroller">
            {#each shownProjects as proj}
                <div class="projectlogo {selectedProject.name === proj.name ? 'selectedproject' : ''}" role="presentation" on:click={() => setProject(proj)} on:keypress={() => setProject(proj)}>
                    <img src="{proj.icon_path}" alt={proj.icon_alt}>
                </div>
            {/each}
        </div>
    </div>
    <div id="projectinfo">
        <div id="projectinfocontent">
            <svelte:component this={projectComponent} />
        </div>
        {#if selectedProject.links.length > 0}
            <h2 class="bottom">
                {#each selectedProject.links as link}
                    <a href="{link.link}">{link.name}</a><br>
                {/each}
            </h2>
        {/if}

    </div>
</div>

<style>
    /* debugging => borders on every element */
    /* * {
        border: 1px solid #01fe40;
    } */
    #projectviewer {
        margin-left: 175px;
        height: 100%;
        display: block;
    }

    #projectscrollerwrap {
        float: left;

        height: 100%;
        line-height: 0px;

        flex-basis: 100px;
        flex-grow: 0;
        flex-shrink: 0;

        display: flex;
        
        flex-direction: column;
        justify-content: center;
       
        border: 1px solid #999;
        border-right: 1px dotted #999;
        border-radius: 15px 0 0 15px;
        background-color: #222;
    }
    #projectscroller {
        overflow: auto;
        width: max-content;
        padding-left: 5px;
        border-radius: 15px 0 0 15px;
    }

    img {
        width: 90px;
        height: 90px;
        border-radius: 15px;
    }
    .projectlogo {
        position: relative;
        transition: 50ms;
        padding: 5px;
        border-radius: 15px;
    }
    .projectlogo:hover {
        cursor: pointer;
    }

    #projectinfocontent {
        padding: 10px 20px 20px 20px; /* Less padding on top as titles usually already provied part of those */
    }
    #projectinfo {
        background-color: #222;
        overflow: auto;
        height: 100%;
        border-left: none;
        border-radius: 0 15px 15px 0;
        border: 1px solid #999;
    }
    .bottom {
        background-color: #333333cc;
        padding: 7px;
        border-radius: 10px;
        position: fixed;
        bottom: 0;
        right: 20px;
    }

    /* To remove => small dot for selected */
    /* .projectlogo::before {
        transition: 100ms;
        position: absolute;
        content: "";
        height: 7px;
        width: 7px;
        top: 45px;
        left: -15px;
        border-radius: 10px;
        overflow: show;

        background-color: rgba(0, 0, 0, 0);
    }
    .selectedproject:not(:hover):before {
        background-color: #fff;
    } */
    .projectlogo::after {
        transition: 100ms;
        position: absolute;
        content: "";
        height: 90px;
        width: 2px;
        top: 5px;
        left: -2px;
        border-radius: 1px;
        overflow: show;

        background-color: rgba(0, 0, 0, 0);
    }
    .projectlogo:not(.selectedproject):hover::after {
        background-color: #ddd;
    }
    .selectedproject:after {
        background-color: #fff;
    }
</style>