<h1 id="multithreadedchunkloading">MultithreadedChunkLoading (Minecraft Mod)</h1>
<p>A mod that multithreads Minecraft&#39;s chunk loading</p>
<h1 id="should-i-use-this">Should I use this?</h1>
<h3 id="tldr-no">TLDR; NO</h3>
<h1 id="what-does-this-mod-do-">What does this mod do ?</h1>
<p>Basically grows the vanilla threadcount/list sizes for everything that could make chunk compilation/rendering faster, as well as removing the limitations in those functions that could make the chunk loading stop in favor of other rendering elements</p>
<p>The mod name is technically a bit clickbaity, Minecraft&#39;s chunkloading is already multithreaded, except:</p>
<ul>
<li>In vanilla the threadcount is so low it basically doesn&#39;t do much</li>
<li>When using Optifine (which you most likely should instead of this mod) it adapts the threadcount based on your available ressources, which is good except if you actually want to dedicate all of your ressources strictly to loading chunks</li>
</ul>
<h1 id="why-shouldnt-i-use-it-">Why shouldn&#39;t I use it ?</h1>
<ul>
<li>Possibly HIGH memory usage (main deal breaker)</li>
<li>Reduced FPS while chunks are loading, basically prioritizing their compilation over other stuff (tradeoff that you may or may not want, up to you)</li>
</ul>
<h1 id="what-purpose-is-it-for-then">What purpose is it for then</h1>
<p>Its intended (and from what I can think of only) purpose is to basically let you crank up your render distance to 32+ and load everything in a solo map at once (eg to take a big screenshot), instead of having to wait 25 years for everything to load with the vanilla settings.</p>
<h1 id="why-was-it-made">Why was it made</h1>
<p>Mineplex Backup Project, altho a bit late I need to take screenshots of EVERY map, and not having to wait for the maps to load for too much time is a real time saver</p>
