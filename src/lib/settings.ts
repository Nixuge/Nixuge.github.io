import { getCookie, setCookie, stringFromMap } from "$lib/cookies";
import { Tag } from "./projectviewer/projects";

export const DISABLED_BY_DEFAULT_TAGS = [Tag.INSIGNIFICANT];
// export const DISABLED_BY_DEFAULT_SETTINGS = []; unused for now as unneeded.

// Initialized @ bottom
let selected_settings: Map<String, boolean>;
let selected_tags: Map<String, boolean>;


function setBool(usedMap: Map<String, boolean>, map_key: string, value: boolean, cookie_key: string, expire_after: number = 10) {
    usedMap.set(map_key, value);
    // Update the cookie w the config in it
    setCookie(cookie_key, stringFromMap(usedMap), expire_after);
}
export function setBoolTag(tag: string, value: boolean) {
    setBool(selected_tags, tag, value, "selected_tags")
}
export function setBoolSetting(setting: string, value: boolean) {
    setBool(selected_settings, setting, value, "selected_settings", 60*24*7)
}

function getBool(usedMap: Map<String, boolean>, setting: string, default_value: boolean, cookie_key: string) {
    const result = usedMap.get(setting);
    if (result === undefined) {
        setBool(usedMap, setting, default_value, cookie_key);
        return default_value;
    }
    return result;
}
export function getBoolSetting(setting: string, default_value: boolean = true) {
    return getBool(selected_settings, setting, default_value, "selected_settings")
}
export function getBoolTag(setting: string, default_value: boolean = true) {
    return getBool(selected_tags, setting, default_value, "selected_tags")
}


// If I add disabled settings by default, would need to do that for both
const tag_cookie = getCookie("selected_tags");
if (tag_cookie == undefined) {
    selected_tags = new Map();
    DISABLED_BY_DEFAULT_TAGS.forEach(tag => {        
        selected_tags.set(tag, false);
    });
} else {    
    selected_tags = new Map(JSON.parse(tag_cookie));
}

const setting_cookie = getCookie("selected_settings");
selected_settings = (setting_cookie === undefined) ? new Map() : new Map(JSON.parse(setting_cookie));



// TODO: extend cookie support to:
// - search text (maybe?)