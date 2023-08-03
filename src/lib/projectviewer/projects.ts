export class Project {
    constructor(
        public name: string, 
        public icon_path: string, 
        public icon_alt: string, 
        public title: string,
        public html: string
    ) {}
}

// Honestly not sure if I'd prefeer doing it like that or making components
// for each one :/

export const important_projects: Array<Project> = [
    new Project("hivebackup", "/images/projects/HiveBackup.png", "Hive Backup", "The Hive Backup Project", "A full archive of HiveMC Java, a now closed server.<br><h2>Download @ <a href='https://hivebackup.github.io'>hivebackup.github.io</h2><a href='https://discord.gg/BcEccZr8Db'>Join the discord</a>"),
    new Project("hivebackup", "/images/projects/HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
    new Project("hivebackup", "/images/projects/HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
    new Project("hivebackup", "/images/projects/HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
    new Project("hivebackup", "/images/projects/HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
    new Project("hivebackup", "/images/projects/HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
    new Project("hivebackup", "/images/projects/HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
    new Project("hivebackup", "/images/projects/HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
    new Project("hivebackup", "/images/projects/HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
    new Project("hivebackup", "/images/projects/HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
    new Project("hivebackup", "/images/projects/HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
    new Project("hivebackup", "/images/projects/HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),

]

export const other_projects: Array<Project> = [
    new Project("hivebackup", "/images/projects/HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
]