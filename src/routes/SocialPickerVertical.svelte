<script>
    import Discord from "$lib/socialpicker/Discord.svelte";
    import Github from "$lib/socialpicker/Github.svelte";
    import Telegram from "$lib/socialpicker/Telegram.svelte";
    import Twitter from "$lib/socialpicker/Twitter.svelte";
    import Youtube from "$lib/socialpicker/Youtube.svelte";
    import "$lib/socialpicker/style.css";
</script>

<div id="socialwrapper">
    <div id="verticaltitle">
        Nixuge.me
    </div>
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
        margin-left: 10px;
    }
    #verticaltitle {
        font-size: 2.5em;
        text-align: center;
        text-orientation: upright;
        writing-mode: vertical-rl;
        background: #222;
        /* border-radius: 10px 0 0 10px; */
        
        border-radius: 10px;
        border: 1px solid #999;
        /* border-right: none; */
        max-height: 80%;
        overflow: auto;
        padding: 10px 0 10px 0;
        transition: 100ms;
    }
    #verticaltitle:hover {
        background-color: #fff;
        color: #222;
    }

</style>
