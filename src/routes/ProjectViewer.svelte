<script lang="ts">
    import type { ComponentType } from "svelte";
    import { resultsReac, updateSearchTags } from "$lib/projectviewer/searcher";
    import { getCookie, setCookie } from "$lib/cookies";
    import type { Project } from "$lib/projectviewer/projects";

    // Important before trying to load the selectedProject etc
    updateSearchTags();
    
    // Initial selectedProject setup
    const cookie = getCookie("index");
    const index = (cookie != undefined && $resultsReac.length > Number(cookie)) ? Number(cookie) : 1;
    let selectedProject = $resultsReac[index];

    // selectedProject on change
    function setProject(newProject: Project, index: number) {
        selectedProject = newProject;
        setCookie("index", index, 2);
    }

    // Dynamically update shown component
    let projectComponent: ComponentType;
    $: selectedProject.component().then((res: any) => projectComponent = res.default);
</script>

<div id="projectviewer">
    <div id="projectscrollerwrap">
        <div id="projectscroller">
            {#each $resultsReac as proj, i}
                <div class="projectlogo {selectedProject.name === proj.name ? 'selectedproject' : ''}" role="presentation" on:click={() => {setProject(proj, i)}} on:keypress={() => {setProject(proj, i)}}>
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

    #projectscrollerwrap {
        display: flex;
        border: 1px solid #999;
        background-color: #222;
    }
    #projectscroller {
        overflow: auto;
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
        border: 1px solid #999;
    }
    .bottom {
        background-color: #333333cc;
        padding: 7px;
        right: 20px;
    }

    .projectlogo::after {
        transition: 100ms;
        position: absolute;
        content: "";
        border-radius: 1px;
        background-color: rgba(0, 0, 0, 0);
    }
    .projectlogo:not(.selectedproject):hover::after {
        background-color: #ddd;
    }
    .selectedproject:after {
        background-color: #fff;
    }
    @media (min-width: 901px) {
        #projectviewer {
            margin-left: 175px;
            height: 100%;
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
        
            border-right: 1px dotted #999;
            border-radius: 15px 0 0 15px;
        }
        #projectscroller {
            width: max-content;
            padding-left: 5px;
        }
        #projectinfo {
            height: 100%;
            border-left: none;
            border-radius: 0 15px 15px 0;
            position: relative;
        }
        .bottom {
            position: fixed;
            border-radius: 10px;
            bottom: 0;
        }

        .projectlogo::after {
            height: 90px;
            width: 2px;
            top: 5px;
            left: -2px;
        }
    }
    @media (max-width: 900px) {
        #projectviewer {
            margin-top: 25px;
            height: 90%;
        }
        #projectscrollerwrap {
            border-radius: 10px 10px 0 0;
        }
        #projectscroller {
            display: flex;
            padding-top: 5px;
        }
        #projectinfo {
            border-top: none;
            border-radius: 0 0 10px 10px;
            margin-bottom: 20px;
        }
        .bottom {
            text-align: center;
            position: sticky;
            margin: 0;
        }

        .projectlogo::after {
            height: 2px;
            width: 90px;
            top: 0px;
            left: 5px;
        }
    }
</style>