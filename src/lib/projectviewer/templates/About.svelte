<script>
    import Foldable from "./utils/Foldable.svelte";
    import SkillImage from "./utils/SkillImage.svelte";
</script>

<div id="about">
    <h2 style="text-align: center; color: lime; margin-top: 0px; margin-bottom: -10px;">Subdomains are back up. Thank you for your patience.
    </h2>
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
            <SkillImage icon="java" />
            <SkillImage icon="python" />
            <SkillImage icon="typescript" />
            <SkillImage icon="js" />
            <SkillImage icon="vuejs" />
            <SkillImage icon="svelte" />
            <SkillImage icon="html" />
            <SkillImage icon="css" />
            <SkillImage icon="cs" />
            <SkillImage icon="bash" />
        </Foldable>
        <Foldable title="Used technologies" open={true} sub={true}>
            <SkillImage icon="linux" />
            <SkillImage icon="vscode" />
            <SkillImage icon="github" />
            <SkillImage icon="git" />
            <SkillImage icon="docker" />
            <SkillImage icon="vim" />
            <SkillImage icon="gradle" />
            <SkillImage icon="nginx" />
            <SkillImage icon="cloudflare" />
            <SkillImage icon="vite" />
            <SkillImage icon="vercel" />
            <SkillImage icon="selenium" />
            <SkillImage icon="postgres" />
            <SkillImage icon="sqlite" />
            <SkillImage icon="ps" />
            <br>
            + Forge, Fabric, Bukkit (Spigot, Paper), Folia, &amp; some more...
        </Foldable>
        <Foldable title="Need more training" sub={true}>
            <SkillImage icon="rust" />
            <SkillImage icon="unity" />
        </Foldable>
        <Foldable title="Want to learn" sub={true}>
            <SkillImage icon="tauri" />
            <SkillImage icon="swift" />
            <SkillImage icon="ruby" />
            <SkillImage icon="wasm" />
            <SkillImage icon="c" />
            <SkillImage icon="cpp" />
            <SkillImage icon="qt" />
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
    /* todo(?): maybe have the icons centered? Not sure if i should or not. */
    /* Minimize margin for first title */
    #hello {
        margin-top: 20px; 
    }
    /* Bigger font */
    #about {
        font-size: 1.5em; 
    }
    .nomargin {
        margin: 0;
    }
</style>