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
        public title: string,
        links: Dl | Dl[],
        public html: string
    ) {
        this.icon_path = "/images/projects/" + icon_filename;
        this.links = (typeof links == "string") ? [links] : links as Dl[];
    }
}

// Honestly not sure if I'd prefeer doing it like that or making components
// for each one :/

export const important_projects: Array<Project> = [
    new Project("hivebackup", "HiveBackup.png", "Hive Backup", "The Hive Backup Project", [new Dl("Visit the Website", "https://hivebackup.github.io"), new Dl("Join the Discord", "https://discord.gg/BcEccZr8Db")],"A full archive of HiveMC Java, a now closed server."),
    // new Project("hivebackup", "HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
    // new Project("hivebackup", "HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
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