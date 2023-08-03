<script>
    import Discord from "$lib/socialpicker/Discord.svelte";
    import Github from "$lib/socialpicker/Github.svelte";
    import Telegram from "$lib/socialpicker/Telegram.svelte";
    import Twitter from "$lib/socialpicker/Twitter.svelte";
    import Youtube from "$lib/socialpicker/Youtube.svelte";
    import "$lib/socialpicker/style.css";
</script>

<div id="socialwrapper">
    <div id="socialpicker">
        <Discord />
        <Twitter />
        <Youtube />
        <Telegram />
        <Github />
    </div>
</div>

<style>
    #socialwrapper {
        display: flex;
        float: left;
        align-items: center;
        /* border: 1px solid red; */
        height: 100%;
        width: min-content;
    }
    #socialpicker {
        background: #222;
        border-radius: 15px; /* Note: gh's icon has a higher border radius, to fix when not lazy */
        width: min-content;
        line-height: 0;
        float: left;
        border: 1px solid #999;
        max-height: 100%;
        overflow: auto;
    }
</style>
