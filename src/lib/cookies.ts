import { browser } from '$app/environment';

export function stringFromMap(map: Map<any, any>) {
    return JSON.stringify(Array.from(map.entries()));
}

export function setCookie(name: string, value: any , minutes: number) {
    if (!browser)
        return;

    var expires = "";
    if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + (minutes*60*1000));
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + (value || "")  + expires + "; SameSite=Strict; path=/";
}
export function getCookie(name: string) {
    if (!browser)
        return;

    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}