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

// TODO: serialize/deserialize from cookies