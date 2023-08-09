import { writable, type Writable } from "svelte/store";
import { projects, Project, settingsProj } from "./projects";
import { getBool } from "./settings";

// Note:
// This isn't really optimized as it recalculates everything every character change
// But over optimizing doesn't really matter here, it'd just make the code more verbose
// for something that doesn't even use much cpu 
//
// Still, it caches the tag search, and uses that one when searching for text
// instead of re-finding everything every time

let searchText = "";
export function setSearchText(search: string) {
    searchText = search.replaceAll(" ", "");
    updateSearchText();
}

let searchResultTags: Array<Project> = [];
export function updateSearchTags() {
    searchResultTags.length = 0    
    projects.forEach(proj => {
        for (const tag of proj.tags) {
            if (getBool(tag) && !searchResultTags.includes(proj)) {
                searchResultTags.push(proj);
                break;
            }
        }
    });
    updateSearchText();
}




export function updateSearchText() {
    searchResultsFinal.length = 0;
    searchResultsFinal.push(settingsProj);

    searchResultTags.forEach(proj => {
        if (proj.name_clear.includes(searchText))
            searchResultsFinal.push(proj)
            searchResultsFinal = searchResultsFinal;
    });

    // Only set to reactive at the end to avoid useless updates
    searchResultFinalReac.set(searchResultsFinal); 
}


let searchResultsFinal: Project[] = [];
// writables works like a "let" in svelte files (same reactivity)
export const searchResultFinalReac: Writable<Project[]> = writable([]);