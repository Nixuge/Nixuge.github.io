<script>
    import Foldable from "./utils/Foldable.svelte";
</script>

<div id="about">
    <h1 id="hello">Welcome to Nixuge.me </h1>
    <h2>Hello 👋</h2>
    <p>I'm mainly a legacy (&amp; sometimes newer) Minecraft modder.</p>
    <p>Wrote a bunch of stuff, which you can see either in the sidebar to your left or <a href="https://github.com/Nixuge?tab=repositories">in the repositories tab on my github</a></p>
    <!-- eternal todo: make a list of the best stuff i've done here -->

    <p>If you ever need support feel free to contact using: </p>
    <ul>
    <li>Telegram: @Nixuge</li>
    <li>Discord: @Nixuge</li>
    <li>email: <a href="mailto:&#115;&#x75;&#x70;&#x70;&#111;&#114;&#x74;&#64;&#110;&#105;&#x78;&#117;&#103;&#x65;&#x2e;&#109;&#101;">&#115;&#x75;&#x70;&#x70;&#111;&#114;&#x74;&#64;&#110;&#105;&#x78;&#117;&#103;&#x65;&#x2e;&#109;&#101;</a></li>
    </ul>
    <!-- thanks to skillicons.dev for the icons -->
    <Foldable title="Current knowledge" open={true}>
        <Foldable title="Known languages" open={true} sub={true}>
            <img class="singleline" src="https://skillicons.dev/icons?i=java,python,typescript,js,vuejs,svelte,html,css,cs,bash&perline=10" alt="Known languages">
        </Foldable>
        <Foldable title="Used technologies" open={true} sub={true}>
            <img class="multiline" src="https://skillicons.dev/icons?i=linux,vscode,idea,github,git,docker,vim,gradle,nginx,cloudflare,vite,vercel,selenium,postgres,sqlite,ps&perline=10" alt="Using">
            <br>
            + Forge, Fabric, Bukkit (Spigot, Paper), Folia, &amp; some more...
        </Foldable>
        <Foldable title="Need more training" sub={true}>
            <img class="singleline" src="https://skillicons.dev/icons?i=rust,unity&perline=10" alt="Need more training">
        </Foldable>
        <Foldable title="Want to learn" sub={true}>
            <img class="singleline" src="https://skillicons.dev/icons?i=tauri,swift,ruby,wasm,c,cpp,qt&perline=10" alt="Want to learn">
        </Foldable>
        <Foldable title="Other stats" sub={true}>
            <h3 class="nomargin">Github commits chart</h3>
            <img src="https://ghchart.rshah.org/ff8c8c/Nixuge" alt="Github Chart" width="95%" />
            <br><br>
            <img src="https://github-readme-stats-rust-kappa.vercel.app/api?username=Nixuge&theme=tokyonight&show_icons=true&count_private=true&custom_title=Nixuge's%20Stats%20-%20Last%201%20Year" width="60%" alt="Github Stats">
            <img src="https://github-readme-stats-rust-kappa.vercel.app/api/top-langs/?username=Nixuge&theme=tokyonight&langs_count=10&layout=compact" width="35%"  alt="Most used languages">

            <img src="https://github-readme-stats-rust-kappa.vercel.app/api/wakatime?username=Nixuge&theme=tokyonight&langs_count=20&layout=compact" width="60%" alt="Wakatime stats">
        </Foldable>
    </Foldable>

</div>

<style>
    /* Minimize margin for first title */
    #hello {
        margin-top: 20px; 
    }
    /* Bigger font */
    #about {
        font-size: 1.5em; 
    }
    /* Heights for images */
    /* Multiline = 2xsingline + gap (here 2x85px + 15px) */
    .multiline {
        height: 185px;
    }
    .singleline {
        height: 85px;
    }
    .nomargin {
        margin: 0;
    }
</style>