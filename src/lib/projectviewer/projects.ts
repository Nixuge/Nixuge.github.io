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
    ),
    new Project(
        "MultiBind",
        "mods/MultiBind.png",
        "MultiBind",
        [new Dl("Github Page", "https://github.com/Nixuge/MultiBind"), new Dl("Modrinth page", "https://modrinth.com/mod/multibind")],
        [Tag.MCMOD],
        () => import('./templates/mods/MultiBind.svelte')
    ),
    new Project(
        "EpicZoomer",
        "mods/EpicZoomer.webp",
        "EpicZoomer",
        [new Dl("Github Page", "https://github.com/Nixuge/EpicZoomer"), new Dl("Modrinth page", "https://modrinth.com/mod/epiczoomer")],
        [Tag.MCMOD],
        () => import('./templates/mods/EpicZoomer.svelte')
    ),
    new Project(
        "WorldDownloaderLegacy",
        "mods/WorldDownloaderLegacy.png",
        "WorldDownloaderLegacy",
        [new Dl("Github Page", "https://github.com/Nixuge/WorldDownloaderForge"), new Dl("Modrinth page", "https://modrinth.com/mod/worlddownloaderlegacy")],
        [Tag.MCMOD],
        () => import('./templates/mods/WorldDownloaderLegacy.svelte')
    ),
    new Project(
        "ServerlistBufferFixer",
        "mods/ServerlistBufferFixer.webp",
        "ServerlistBufferFixer",
        [new Dl("Github Page", "https://github.com/Nixuge/ServerlistBufferFixer"), new Dl("Modrinth page", "https://modrinth.com/mod/serverlistbufferfixer")],
        [Tag.MCMOD],
        () => import('./templates/mods/ServerlistBufferFixer.svelte')
    ),
    new Project(
        "RessourcePackCommand",
        "mods/RessourcePackCommand.webp",
        "RessourcePackCommand",
        [new Dl("Github Page", "https://github.com/Nixuge/RessourcePackCommand"), new Dl("Modrinth page", "https://modrinth.com/mod/ressourcepackcommand")],
        [Tag.MCMOD],
        () => import('./templates/mods/RessourcePackCommand.svelte')
    ),
    new Project(
        "NumericalTabPing",
        "mods/NumericalTabPing.png",
        "NumericalTabPing",
        [new Dl("Github Page", "https://github.com/Nixuge/NumericalTabPing"), new Dl("Modrinth page", "https://modrinth.com/mod/numericaltabping")],
        [Tag.MCMOD],
        () => import('./templates/mods/NumericalTabPing.svelte')
    ),
    new Project(
        "NoChatHide",
        "mods/NoChatHide.png",
        "NoChatHide",
        [new Dl("Github Page", "https://github.com/Nixuge/NoChatHide"), new Dl("Modrinth page", "https://modrinth.com/mod/nochathide")],
        [Tag.MCMOD],
        () => import('./templates/mods/NoChatHide.svelte')
    ),
    new Project(
        "SuperchargedChunkLoading",
        "mods/SuperchargedChunkLoading.webp",
        "SuperchargedChunkLoading",
        [new Dl("Github Page", "https://github.com/Nixuge/SuperchargedChunkLoading"), new Dl("Modrinth page", "https://modrinth.com/mod/superchargedchunkloading")],
        [Tag.MCMOD],
        () => import('./templates/mods/SuperchargedChunkLoading.svelte')
    ),
]

// new Project(
//     "ServerlistBufferFixer",
//     "mods/ServerlistBufferFixer.webp",
//     "ServerlistBufferFixer",
//     [new Dl("Github Page", "https://github.com/Nixuge/ServerlistBufferFixer"), new Dl("Modrinth page", "https://modrinth.com/mod/serverlistbufferfixer")],
//     [Tag.MCMOD],
//     () => import('./templates/mods/ServerlistBufferFixer.svelte')
// ),