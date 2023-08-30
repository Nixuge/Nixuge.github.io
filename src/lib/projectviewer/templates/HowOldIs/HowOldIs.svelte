<script lang="ts">
    import Foldable from "../utils/Foldable.svelte";
    import HowOldIsComponent from "./HowOldIsComponent.svelte";
    import { OldElement } from "./oldelement";
    
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
</script>

<div>
    <h1>How old are some old things?</h1>
    <Foldable title="Minecraft" open={true}>
        <hr>
            {#each oldMinecraftElements as oldElement}
                <HowOldIsComponent element={oldElement} />
            {/each}
    </Foldable>
</div>
