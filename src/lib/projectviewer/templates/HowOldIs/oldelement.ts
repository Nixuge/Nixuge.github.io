const dateNow = new Date();

export class OldElement {
    constructor(public name: string,
                public date: Date,
                public subtitle: string | undefined= undefined) {}
    
    public getTimeSinceString() {
        const difference_ms = dateNow.getTime() - this.date.getTime();
        const difference_day = Math.floor(difference_ms / (1000 * 60 * 60 * 24));

        // Couldn't be bothered, 1am: https://stackoverflow.com/a/44503037
        const years = Math.floor(difference_day / 365);
        const months = Math.floor(difference_day % 365 / 30);
        const days = Math.floor(difference_day % 365 % 30);

        const yearStr = years > 0 ? years + (years == 1 ? " year, " : " years, ") : "";
        let monthStr = months > 0 ? months + (months == 1 ? " month" : " months") : "";
        const dayStr = days > 0 ? days + (days == 1 ? " day" : " days") : "";
        if (monthStr != "" || yearStr != "") {
            monthStr += " and "
        }
        return yearStr + monthStr + dayStr; 
    }

    public getDateProperFormat() {
        const day = ("0" + this.date.getUTCDate()).slice(-2); // slice to have 2 characters
        const month = ("0" + (this.date.getUTCMonth()+1)).slice(-2) // +1 because getUTCMonth start at 0
        return `${day}/${month}/${this.date.getUTCFullYear()}`
    }
}