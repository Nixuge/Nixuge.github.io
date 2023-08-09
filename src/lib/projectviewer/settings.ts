const settings = new Map<String, boolean>;

export function setBool(setting: string, value: boolean) {
    settings.set(setting, value);
}

export function getBool(setting: string) {
    return settings.get(setting);
}

// TODO: serialize/deserialize from cookies