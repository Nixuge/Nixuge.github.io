const settings = new Map<String, boolean>;

export function setBool(setting: string, value: boolean) {
    settings.set(setting, value);
}

export function getBool(setting: string) {
    const result = settings.get(setting);
    if (result === undefined) {
        setBool(setting, true);
        return true;
    }
    return result;
}
export function getBoolOrUndefined(setting: string) {
    const result = settings.get(setting);
    if (result === undefined) {
        setBool(setting, true);
        return undefined;
    }
    return result;
}

// TODO: serialize/deserialize from cookies
// Note: cookies must have a short (eg 2-5min) expiration