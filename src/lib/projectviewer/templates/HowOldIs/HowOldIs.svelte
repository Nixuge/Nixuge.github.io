<script lang="ts">
    import Foldable from "../utils/Foldable.svelte";

    // Wanted to make a "HowOldElement" component, but ended up not.
    // Might in the future if this becomes too big/if i do more categories

    class OldElement {
        constructor(public name: string,
                    public date: Date,
                    public subtitle: string | undefined= undefined) {}
    }
    
    let oldMinecraftElements: Array<OldElement> = [
        new OldElement("Minecraft 1.0.0", new Date("2011-11-19")),
        new OldElement("Minecraft 1.5.2", new Date("2013-05-02"), "(the redstone is amazing version)"),
        new OldElement("Minecraft 1.6.4", new Date("2013-09-19")),
        new OldElement("Minecraft 1.7.10", new Date("2014-06-26"), "(the best modded version)"),
        new OldElement("Minecraft 1.8", new Date("2014-09-02")),
        new OldElement("Minecraft 1.8.8", new Date("2015-07-28"), "(the ever lasting server version)"),
        new OldElement("Minecraft 1.8.9", new Date("2015-12-09"), "(the best version)"),
        new OldElement("Minecraft 1.9", new Date("2015-12-09"), "(the version no server dares to updates to)"),
        new OldElement("Minecraft 1.9.4", new Date("2016-05-10"), "(the ex funcraft version)"),
        new OldElement("Minecraft 1.12.2", new Date("2017-09-18"), "(the forever-last-well-optimized-but-spaghetti-code-2nd-best-modded-version)"),
        new OldElement("Minecraft 1.13", new Date("2018-07-18"), "(the rewrite)"),
        new OldElement("Minecraft 1.16.5", new Date("2021-01-15"), "(the 3rd best modded version)"),
        new OldElement("Minecraft 1.20", new Date("2023-06-07"), "(latest)"),
    ]
    
    const current_date = new Date();
    
    function GetTimeSinceString(date: Date) {
        const difference_ms = current_date.getTime() - date.getTime();
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

    function getDateProperFormat(date: Date) {
        const day = ("0" + date.getUTCDate()).slice(-2); // slice to have 2 characters
        const month = ("0" + (date.getUTCMonth()+1)).slice(-2) // +1 because getUTCMonth start at 0
        return `${day}/${month}/${date.getUTCFullYear()}`
    }
</script>

<div>
    <Foldable title="Minecraft" open={true}>
        <hr>
            {#each oldMinecraftElements as oldElement}
                <div class="element">
                    <b>{oldElement.name}</b>
                    {#if oldElement.subtitle}
                        <i>{oldElement.subtitle}</i>
                    {/if}
                    was released <b>{GetTimeSinceString(oldElement.date)} ago</b>, 
                    on {getDateProperFormat(oldElement.date)}
                </div>
                <hr>
            {/each}
        
    </Foldable>
</div>
<style>
    * {
        font-size: 1.5rem;
    }
    .element {
        overflow: auto;
        white-space: nowrap;
    }
    i {
        font-size: 1rem;
    }

</style>