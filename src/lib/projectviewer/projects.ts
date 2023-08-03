export class Project {
    constructor(
        public name: string, 
        public icon_path: string, 
        public icon_alt: string, 
        public title: string,
        public html: string
    ) {}
}

export const important_projects: Array<Project> = [
    new Project("hivebackup", "/static/projects/HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
    new Project("hivebackup", "/static/projects/HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
]

export const other_projects: Array<Project> = [
    new Project("hivebackup", "/static/projects/HiveBackup.png", "Hive Backup", "The Hive Backup Project", "hello!!!"),
]