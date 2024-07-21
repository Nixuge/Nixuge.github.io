<script>
    import Codeblock from "../utils/Codeblock.svelte";

</script>
<h1>Forge 1.8.9 mod template</h1>
A good template to make a 1.8.9 Forge mod with Mixins.
<br>
Includes most things for a painless modding experience.

<h2>Usage</h2>
<h3>Linux</h3>
<Codeblock>
    git clone https://github.com/Nixuge/ForgeTemplate_1.8.9

    ./setup.py

    ./gradlew setupDecompWorkspace

    # then to run a debug client
    ./gradlew runClient

    # or to build a mod jar
    ./gradlew build
</Codeblock>
<h3>Windows</h3>
<Codeblock>
    git clone https://github.com/Nixuge/ForgeTemplate_1.8.9

    python setup.py

    gradlew.bat setupDecompWorkspace

    # then to run a debug client
    gradlew.bat runClient

    # or to build a mod jar
    gradlew.bat build
</Codeblock>