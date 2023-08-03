<script>
    import Discord from "$lib/socialpicker/Discord.svelte";
    import Github from "$lib/socialpicker/Github.svelte";
    import Telegram from "$lib/socialpicker/Telegram.svelte";
    import Twitter from "$lib/socialpicker/Twitter.svelte";
    import Youtube from "$lib/socialpicker/Youtube.svelte";
    import '$lib/socialpicker/style.css';
</script>

<div id="socialpicker">
    <Discord />
    <Twitter />
    <Youtube />
    <Telegram />
    <Github />
</div>

<style>
    #socialpicker {
        background: #222;
        border-radius: 15px;
        width: min-content;
        line-height:0;
        float: left;
    }
</style>