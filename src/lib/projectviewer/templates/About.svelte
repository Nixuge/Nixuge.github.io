<script>
    import Foldable from "./utils/Foldable.svelte";
    import SkillImage from "./utils/SkillImage.svelte";
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
            <div class="icons">
                <SkillImage clickUrl="openjdk.org/" icon="java" />
                <SkillImage clickUrl="python.org" icon="python" />
                <SkillImage clickUrl="typescriptlang.org" icon="typescript" />
                <SkillImage clickUrl="developer.mozilla.org/en-US/docs/Web/JavaScript" icon="js" />
                <SkillImage clickUrl="vuejs.org" icon="vuejs" />
                <SkillImage clickUrl="svelte.dev" icon="svelte" />
                <SkillImage clickUrl="developer.mozilla.org/en-US/docs/Web/HTML" icon="html" />
                <SkillImage clickUrl="developer.mozilla.org/en-US/docs/Web/CSS" icon="css" />
                <SkillImage clickUrl="learn.microsoft.com/en-us/dotnet/csharp/" icon="cs" />
                <SkillImage clickUrl="gnu.org/software/bash/" icon="bash" />
            </div>
        </Foldable>
        <Foldable title="Main used technologies" open={true} sub={true}>
            <div class="icons">
                <SkillImage clickUrl="kernel.org" icon="linux" />
                <SkillImage clickUrl="code.visualstudio.com" icon="vscode" />
                <SkillImage clickUrl="github.com" icon="github" />
                <SkillImage clickUrl="git-scm.com" icon="git" />
                <SkillImage clickUrl="docker.com" icon="docker" />
                <SkillImage clickUrl="www.vim.org" icon="vim" />
                <SkillImage clickUrl="gradle.org" icon="gradle" />
                <SkillImage clickUrl="nginx.org" icon="nginx" />
                <SkillImage clickUrl="cloudflare.com" icon="cloudflare" />
                <SkillImage clickUrl="vitejs.dev" icon="vite" />
                <SkillImage clickUrl="vercel.com" icon="vercel" />
                <SkillImage clickUrl="selenium.dev" icon="selenium" />
                <SkillImage clickUrl="postgresql.org" icon="postgres" />
                <SkillImage clickUrl="sqlite.org" icon="sqlite" />
                <SkillImage clickUrl="adobe.com/products/photoshop" icon="ps" />
                <SkillImage clickUrl="files.minecraftforge.net" baseIconUrl="images/skills/" icon="forge.png" alt="forge"/>
                <SkillImage clickUrl="fabricmc.net" baseIconUrl="images/skills/" icon="fabric.png" alt="fabric"/>
                <SkillImage clickUrl="bukkit.org" baseIconUrl="images/skills/" icon="bukkit.png" alt="bukkit"/>
                <SkillImage clickUrl="papermc.io/software/paper" baseIconUrl="images/skills/" icon="paper.png" alt="paper"/>
                <SkillImage clickUrl="papermc.io/software/folia" baseIconUrl="images/skills/" icon="folia.png" alt="folia"/>
                <SkillImage clickUrl="papermc.io/software/velocity" baseIconUrl="images/skills/" icon="velocity.png" alt="velocity"/>
            </div>
        </Foldable>
        <Foldable title="Need more training" sub={true}>
            <div class="icons">
                <SkillImage clickUrl="rust-lang.org" icon="rust" />
                <SkillImage clickUrl="unity.com" icon="unity" />
            </div>
        </Foldable>
        <Foldable title="Want to learn" sub={true}>
            <div class="icons">
                <SkillImage clickUrl="tauri.app" icon="tauri" />
                <SkillImage clickUrl="swift.org" icon="swift" />
                <SkillImage clickUrl="ruby-lang.org" icon="ruby" />
                <SkillImage clickUrl="webassembly.org" icon="wasm" />
                <SkillImage clickUrl="wikipedia.org/wiki/C_(programming_language)" icon="c" />
                <SkillImage clickUrl="isocpp.org" icon="cpp" />
                <SkillImage clickUrl="qt.io" icon="qt" />
            </div>
        </Foldable>
        <Foldable title="Other stats" open={true} sub={true}>
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
    .icons {
        text-align: center;
    }
</style>