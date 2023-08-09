const settings = new Map<String, boolean>;

export function setBool(setting: string, value: boolean) {
    settings.set(setting, value);
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

// Note:
// Due to dirty coding from me, if you want to have values that are "false" by default,
// You'll have to set them here beforehand.
settings.set("Minecraft Mod", false);


// TODO: serialize/deserialize from cookies
// Note: cookies must have a short (eg 2-5min) expiration