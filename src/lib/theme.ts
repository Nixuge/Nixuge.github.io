import { getBoolSetting } from "./settings";

export function setDarkTheme() {
    document.body.classList.remove("light");
}
export function setWhiteTheme() {
    document.body.classList.add("light");
}
export function toggleTheme() {
    const whiteTheme = getBoolSetting("theme");

    if (whiteTheme)
        setDarkTheme();
    else
        setWhiteTheme();
}

// TODO: accent color?
// there's a vanilla colorpicker in browsers now