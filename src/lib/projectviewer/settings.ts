import { getCookie, setCookie, stringFromMap } from "$lib/cookies";

export const DISABLED_BY_DEFAULT_TAGS = ["Minecraft Mod"]

// Initialized @ bottom
let settings: Map<String, boolean>;

export function setBool(setting: string, value: boolean) {
    settings.set(setting, value);
    // Update the cookie w the config in it
    setCookie("selected", stringFromMap(settings), 2);
}
export function getBool(setting: string) {
    const result = settings.get(setting);
    return (result === undefined) ? true : result;
}
export function getBoolAndSetIfUndefined(setting: string, value: boolean) {
    const result = settings.get(setting);
    if (result === undefined) {
        setBool(setting, value);
        return value;
    }
    return result;
}

const cookie = getCookie("selected");
if (cookie == undefined) {
    settings = new Map();
    DISABLED_BY_DEFAULT_TAGS.forEach(tag => {
        settings.set(tag, false);
    });
} else {    
    settings = new Map(JSON.parse(cookie));
}




// TODO: extend cookie support to:
// - search text (maybe?)
// - opened tab