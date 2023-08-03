<script lang="ts">
    import { Project, important_projects, other_projects } from "$lib/projectviewer/projects";
    
    const showMore = new Project("show_more", "more.png", "", "", "");
    const showLess = new Project("show_less", "less.png", "", "", "");
    
    function getClonedArr() {
        return important_projects.map((x) => x);
    }

    let shownProjects = getClonedArr();
    shownProjects.push(showMore)

    let selectedProject = shownProjects[0];

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
        <h1>{selectedProject.title}</h1>
        <!-- Should be safe, but meh -->
        {@html selectedProject.html}
        <h2 class="bottom">
            {#each selectedProject.links as link}
                <br><a href="{link.link}">{link.name}</a>
            {/each}
        </h2>
    </div>
</div>

<style>
    #projectviewer {
        border-radius: 15px;
        /* width: min-content; */
        margin-left: 175px;
        display: flex;
        align-items: center;
        height: 100%;
        min-width: 50%;
        max-width: 100%;
        overflow: hidden;
    }

    #projectscroller {
        background-color: #222;
        float: left;
        width: min-content;
        border-radius: 15px 0 0 15px;
        border: 1px solid #999;
        border-right: 1px dotted #999;
        overflow: auto;
        max-height: 100%;
    }
    img {
        width: 90px;
        height: 90px;
    }
    .projectlogo {
        /* border: 1px solid #fff; */
        transition: 50ms;
    }
    .projectlogo:hover {
        cursor: pointer;
        /* border: 1px solid #ff0000; */
    }

    #projectinfo {
        background-color: #222;
        padding-left: 20px;
        align-self: flex-start;
        float: left;
        width: 80%;
        height: 100%;
        /* height: 50%; not "optimal" but no need to be precise anyways */
        overflow: auto;
        position: relative;
    }
    .bottom {
        position: absolute;
        bottom: 0;
    }
</style>