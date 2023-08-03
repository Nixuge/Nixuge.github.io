class Dl {
    constructor(
        public name: string,
        public link: string
    ) {}
}

export class Project {
    icon_path: string
    links: Dl[]
    constructor(
        public name: string, 
        icon_filename: string, 
        public icon_alt: string, 
        links: Dl | Dl[],
        public component: string
    ) {
        this.icon_path = "/images/projects/" + icon_filename;
        this.links = (links.constructor.name == "Dl") ? [links] as Dl[] : links as Dl[];
    }
    public getComponentPath() {
        return "../lib/projectviewer/templates/" + this.component;
        // return "./SocialPickerVertical.svelte";
    }
}

// Honestly not sure if I'd prefeer doing it like that or making components
// for each one :/

export const important_projects: Array<Project> = [
    new Project("hivebackup", "HiveBackup.png", "Hive Backup", [new Dl("Visit the Website", "https://hivebackup.github.io"), new Dl("Join the Discord", "https://discord.gg/BcEccZr8Db")], "HiveBackup.svelte"),
    new Project("mediagrabber", "Shortcuts.png", "MediaGrabber", new Dl("Website", "https://mediagrabber.nixuge.me"), "MediaGrabber.svelte"),
    new Project("mcproxy", "MCProxy.png", "MCProxy", new Dl("Website link (download, instructions)", "https://mcdl.nixuge.me"), "MCProxy.svelte"),
    new Project("canijb", "Cydia.png", "CanIJailbreak", new Dl("Website (!OUTDATED!)", "https://canijb.nixuge.me"), "CanIJailbreak.svelte"),
    new Project("linuxtricks", "Tux.svg", "LinuxTricks", [], "LinuxTricks.svelte"), // Todo: fix out syntax
    // new Project("hivebackup", "HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
    // new Project("hivebackup", "HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
    // new Project("hivebackup", "HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
    // new Project("hivebackup", "HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
    // new Project("hivebackup", "HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
    // new Project("hivebackup", "HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
    // new Project("hivebackup", "HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
    // new Project("hivebackup", "HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
    // new Project("hivebackup", "HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),

]

export const other_projects: Array<Project> = [
    // new Project("hivebackup", "HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
]