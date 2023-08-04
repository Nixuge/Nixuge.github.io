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
    <div id="socialpickerwrap">
        <div id="socialpicker">
            <Discord />
            <Twitter />
            <Youtube />
            <Telegram />
            <Github />
        </div>
    </div>
</div>

<style>
    /* * {
        border: 1px solid red;
    } */
    /* TODO again: */
    /* Have actual items inside of socialpicker move */
    /* instead of having socialpickerwrap moving instead */
    #socialpicker {
        line-height: 0;
        border-radius: 15px;
        background: #222;
        border: 1px solid #999;
    }
    #socialpickerwrap {
        border-radius: 15px;
        overflow: auto;
    }
    #verticaltitle {
        font-size: 2.5em;
        background: #222;        
        border-radius: 10px;
        border: 1px solid #999;
        transition: 100ms;
    }
    #verticaltitle:hover {
        background-color: #fff;
        color: #222;
    }
    
    @media (min-width: 901px) {
        #socialwrapper {
            display: flex;
            float: left;
            align-items: center;
            height: 100%;
            width: min-content;
        }
        #verticaltitle {
            text-align: center;
            text-orientation: upright;
            writing-mode: vertical-rl;
            
            max-height: 80%;
            overflow: auto;
            padding: 10px 0 10px 0;
        }
        #socialpicker {
            width: min-content;
        }
        #socialpickerwrap {
            max-height: 100%;
            margin-left: 10px;
        }
    }
    @media (max-width: 900px) {
        #socialwrapper {
            display: flex;
            flex-direction: column;
            align-items: center; /* Center align horizontally */
            text-align: center; /* Center align text within #verticaltitle */
        }
        #verticaltitle {
            padding: 2px 10px 3px 10px;
            transition: 100ms;
            width: fit-content;
            margin-bottom: 10px;
        }
        #socialpicker {
            display: inline-block;
            width: fit-content;
        }
        #socialpickerwrap {
            width: 100%;
            overflow: auto;
            white-space: nowrap;
        }
    }

</style>


