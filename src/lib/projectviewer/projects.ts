class Dl {
    constructor(
        public name: string,
        public link: string
    ) { }
}

export enum Tag {
    MCMOD = "Minecraft Mod",
    MCBACKUP = "Minecraft Backup Projects",
    WEBSITES = "Websites", // util websites?
    MISCELANEOUS = "Miscelaneous",
    IOS = "iOS"
}

export class Project {
    icon_path: string
    name_clear: string
    constructor(
        public name: string,
        icon_filename: string,
        public icon_alt: string,
        public links: Dl[],
        public tags: Tag[],
        public component: Function
    ) {
        this.icon_path = "images/projects/" + icon_filename;
        this.name_clear = name.replaceAll(" ", "").toLowerCase();
    }
}


export const settingsProj = new Project("Settings",
    "settings.png",
    "Settings",
    [],
    [],
    () => import('./templates/Settings/Settings.svelte')
)

export const projects: Array<Project> = [
    new Project(
        "Settings",
        "settings.png",
        "Settings",
        [],
        [],
        () => import('./templates/Settings/Settings.svelte')
    ),
    new Project(
        "Hive Backup",
        "HiveBackup.png",
        "Hive Backup",
        [new Dl("Visit the Website", "https://hivebackup.github.io"), new Dl("Join the Discord", "https://discord.gg/BcEccZr8Db")],
        [Tag.MCBACKUP],
        () => import('./templates/HiveBackup.svelte')
    ),
    new Project(
        "Mineplex Backup",
        "MineplexBackup.png",
        "Mineplex Backup",
        [new Dl("Visit the Website", "https://mineplex.nixuge.me"), new Dl("Join the Discord", "https://discord.gg/rsJYGpPxqY")],
        [Tag.MCBACKUP],
        () => import('./templates/MineplexBackup.svelte')
    ),
    new Project(
        "MediaGrabber",
        "Shortcuts.png",
        "MediaGrabber",
        [new Dl("Website", "https://mediagrabber.nixuge.me")],
        [Tag.WEBSITES, Tag.IOS],
        () => import('./templates/MediaGrabber.svelte')
    ),
    new Project(
        "McProxy",
        "MCProxy.png",
        "MCProxy",
        [new Dl("Website link (download, instructions)", "https://mcdl.nixuge.me")],
        [Tag.WEBSITES, Tag.MISCELANEOUS],
        () => import('./templates/MCProxy.svelte')
    ),
    new Project(
        "CanIJB",
        "Cydia.png",
        "CanIJailbreak",
        [new Dl("Website (!OUTDATED!)", "https://canijb.nixuge.me")],
        [Tag.WEBSITES],
        () => import('./templates/CanIJailbreak.svelte')
    ),
    new Project(
        "LinuxTricks",
        "Tux.svg",
        "LinuxTricks",
        [],
        [Tag.MISCELANEOUS],
        () => import('./templates/LinuxTricks/LinuxTricks.svelte')
    )
]