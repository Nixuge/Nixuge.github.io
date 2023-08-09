<h1 id="worlddownloaderforge">WorldDownloaderForge (Minecraft Mod)</h1>
<p>This is a port of a project made by Pokechu22 (mainainer) &amp; other contributors, mainly uyjulian (litemod), dslake (old maintainer), nairol (old old maintainer) and countless others</p>
<p>This port was intended to run on Forge 1.8.9, but I ended up doing:  <code>1.9.4-liteloader</code> -&gt; <code>1.9.4-forge</code> -&gt; <code>1.8.9 forge</code>, so there&#39;s also a 1.9.4 branch available.
I&#39;ll maybe eventually port 1.12.2.  </p>
<h1 id="creditslicense">Credits/License</h1>
<p>Since this mod is a fork, there are 2 licenses in this repo:</p>
<ul>
<li>LICENSE is the original license and the one that&#39;s present in most files. <strong>As the less permissive license, it&#39;s the one you have to respect if you want to redistribute this mod in its entirity</strong></li>
<li>LICENSE (Nixuge) is the license used for the files I added.</li>
</ul>
<p>You can find which license a file is under by looking at its header. If nothing specified, it&#39;s under LICENSE (Nixuge). Otherwise, it&#39;s under LICENSE.</p>
<p>I&#39;ve got permission from Pokechu to make this fork
<br>
<img src="https://user-images.githubusercontent.com/33488576/227806844-d7843197-e7bc-4699-aba1-8bc62803da31.png" alt="Permission-fork"></p>
<p>And for the modrinth upload
<br>
<img src="https://github.com/Nixuge/WorldDownloaderForge/assets/33488576/22911b83-63f1-4655-9711-5623d15f42e1" alt="Permission-modrinth"></p>
<h1 id="compiling">Compiling</h1>
<p>(<code>./gradlew</code> -&gt; <code>./gradlew.bat</code> on windows)</p>
<ul>
<li><code>git clone https://github.com/Nixuge/WorldDownloaderForge</code></li>
<li>(optional) switch to the branch you need (1.8.9 by default)</li>
<li><code>./gradlew check</code></li>
<li><code>./gradlew build</code></li>
</ul>
<p>Done, your mod should
 be in the <code>builds/libs/</code> folder</p>
<h1 id="editing-tested-on-intellij--vscode">Editing (tested on intellij &amp; vscode)</h1>
<p>(<code>./gradlew</code> -&gt; <code>./gradlew.bat</code> on windows)</p>
<ul>
<li><code>git clone https://github.com/Nixuge/WorldDownloaderForge</code></li>
<li>(optional) switch to the branch you need (1.8.9 by default)</li>
<li><code>./gradlew check</code></li>
<li><code>./gradlew setupDecompWorkspace</code></li>
<li><code>./gradlew genIntellijRuns</code></li>
</ul>
<p>Done, now you can edit the mod however you like and run <code>./gradlew runClient</code> to view your changes</p>
<h1 id="important-note-code-quality">Important note: code quality</h1>
<p>The code quality on this mod (at least at this point) isn&#39;t the best, as there&#39;s a bunch of version specific artifacts randomly left around.<br>I had to manually (w ctrl+f) replace ~600 lines with errors to go from liteloader to forge, and another ~600 from 1.9.4 to 1.8.9 (+ manually editing features that weren&#39;t present in 1.8.9).  </p>
<h3 id="dont-except-this-to-be-bug-free-for-now-its-definitively-usable-more-than-the-liteloader-version-if-you-have-the-same-usage-as-me-but-not-perfect-yet">Don&#39;t except this to be bug free for now. It&#39;s definitively usable (more than the liteloader version if you have the same usage as me), but not perfect yet.</h3>
<h1 id="known-issues">Known issues</h1>
<ul>
<li>Villagers&#39; data isn&#39;t saved at all</li>
<li>NPCs aren&#39;t saved, don&#39;t know yet if it&#39;s possible to fix but will see later</li>
<li>Some crashes when clicking on some buttons (about-&gt;copy info button)</li>
<li>Outer chunks from previous maps are still present when saving over a folder,</li>
<li><ul>
<li>TODO: remove the folder&#39;s chunks (&amp; eventually other data) to fix that</li>
</ul>
</li>
<li>Localization isn&#39;t working properly</li>
<li>&quot;Crashlog&quot; on launch, see next known issue</li>
<li>Crashlog maker crashes (lol)</li>
<li>Updater broken, need to make it use Nixuge/WorldDownloaderForge properly</li>
</ul>
<h1 id="todo">Todo</h1>
<ul>
<li>Better UI (If possible notifications-based like some clients)</li>
<li>More settings (eg. freeze entities)</li>
<li>Better name parsing (to implement)</li>
<li>Some kind of way to script the name of the map to save</li>
<li>Some kind of script on map save</li>
<li>Command Support (would be nice w Notifications)</li>
<li>As this version of the mod will mostly be used for server archive, make the Saved Chunks map display chunks currently being saved instead of already saved ones instead of having it display already saved chunks from Singleplayer</li>
<li>IF I keep the old UI system, have a &quot;dropdown list&quot; for choice buttons instead of it just rolling choices one by one when you click on the button</li>
<li>Add back tests</li>
<li>See src/main/java/wdl/functions/README.md</li>
<li>Fix issues with liquidbounce&#39;s buttons</li>
<li>Def redo the menu system</li>
</ul>
