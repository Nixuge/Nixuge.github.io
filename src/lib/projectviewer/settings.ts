import { getCookie, setCookie, stringFromMap } from "$lib/cookies";

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
        setBool(setting, value)
        return value;
    }
    return result;
}

const cookie = getCookie("selected");
if (cookie == undefined) {
    settings = new Map();
    // Due to dirty coding from me, if you want to have values that are "false" by default,
    // You'll have to set them here beforehand.
    settings.set("Minecraft Mod", false);
} else {    
    settings = new Map(JSON.parse(cookie));
}




// TODO: extend cookie support to:
// - search text (maybe?)
// - opened tab