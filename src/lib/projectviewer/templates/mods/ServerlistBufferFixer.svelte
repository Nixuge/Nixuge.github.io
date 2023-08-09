<h1 id="serverlist-buffer-fixer">ServerlistBufferFixer (Minecraft Mod)</h1>
<p>A mod that fixes the slow/infinite server data loading in the multiplayer menu. </p>
<p>Also prevents you from spamming &quot;refresh&quot; too much.</p>
<h3 id="note-that-this-behavior-read-bug-is-still-present-as-of-the-latest-versions-1201-currently">Note that this &quot;behavior&quot; <em>(read bug)</em> is still present as of the latest versions (1.20.1 currently).</h3>
<h2 id="alternative-for-newer-inferior-versions-120"><a href="https://modrinth.com/mod/serverpingerfixer">Alternative for newer inferior versions (1.20)</a></h2>
<h1 id="technical-explanation-of-what-this-mod-does">Technical explanation of what this mod does</h1>
<p>This mod does 3 things to fix up that mess of a server pinger, all of which are in the <code>ServerListEntryNormal</code></p>
<h2 id="count-the-number-of-running-ping-tasks">Count the number of running ping tasks</h2>
<p>&amp; prevent you from starting too much. This greatly improves things especially when you spam &quot;refresh&quot;, as you&#39;re now capped to serverCount * 2 tasks, unlike in vanilla where you can basically queue infinitely many tasks.  </p>
<p>When too many tasks are already running and you try to refresh, the server text will be set to &quot;Spamming...&quot;, in which case you&#39;ll have to wait a few sec and hit refresh again</p>
<h2 id="change-the-number-of-the-server-pingers-max-concurrent-task-count">Change the number of the server pinger&#39;s max concurrent task count</h2>
<p>(the pinger is <code>field_148302_b</code> in the used 1.8.9 mappings, which is a <code>ScheduledThreadPoolExecutor</code>)</p>
<p>By default this is set to 5, which is REALLY low, especially if you have a lot of servers.</p>
<p>Even more so if you had some servers that failed to ping, in which case you&#39;d usually get stuck completely after only a few refreshes at most.</p>
<p>This is now changed to <code>serverCount + 5</code>, which is eg if you have 21 servers is 26.
<em>(Note that this gets caped to &quot;Max threadcount (Pinger)&quot;, which is by default 50. So if you have 46 or 80 or 999 servers in your serverlist, you&#39;ll still only have at most 50 concurrent tasks if using the default config)</em></p>
<h2 id="use-a-proper-timeout">Use a proper timeout</h2>
<p>This is made by adding another <code>ScheduledThreadPoolExecutor</code>, and then adding ping tasks to it using <code>final Future&lt;?&gt; future = timeoutExecutor.submit(getPingTask());</code></p>
<p>The <code>field_148302_b.submit(...)</code> (pinger) vanilla calls are then replaced with ones that call <code>future.get(timeout)</code> instead of the ping task directly, causing the pinger to not get overloaded and to properly fail on timeouts after by default 4 seconds (which you can change in the config).</p>
<h1 id="port-to-newer-versions">Port to newer versions</h1>
<p>I currently only have plans to port up to 1.12 (Forge obviously), if possible using ReplayMod&#39;s preprocessor to keep a single codebase. I didn&#39;t look at 1.12&#39;s code yet, but knowing mojang I doubt they changed the class I mixin into to a point it&#39;d need a serious rewrite.</p>
<p>Once that&#39;s done, i&#39;ll (maybe) consider newer versions, and if I do i&#39;ll probably support as much versions as possible</p>
