<h1 id="nochathide">NoChatHide (Minecraft Mod)</h1>
<p>A legacy Forge mod that prevents the chat from getting cleared when you reload the world/change dimension/etc.</p>
<h3 id="also-works-when-a-new-gui-opens-while-youre-typing-in-chat-your-message-will-appear-right-back-after-you-close-the-gui">Also works when a new GUI opens while you&#39;re typing in chat, your message will appear right back after you close the GUI</h3>
<p>I&#39;ve been told the feature is on the Lunar Client too.</p>
<h1 id="dev-question-why-is-the-mixin-to-show-the-chat-inside-networkmanager">(dev question) Why is the mixin to show the chat inside NetworkManager?</h1>
<p>TLDR; I couldn&#39;t find ANY other consistent way to show a chat in game except this one.</p>
<p>I tried probably a dozen different mixins and NOTHING else worked.</p>
<p>If you wanna see which ones I tried, look at the first commit on github and go to the mixins/ folder.</p>
<p>Now yes, this isn&#39;t the best as it gets called quite a lot which is something i&#39;d like to avoid, but until I/someone else find some way to avoid that, it&#39;ll remain like that.</p>
<p>Nota that while (a bit) unoptimized, this however has the side effect to make this mod active at ALL times, eg when a GUI opens while you&#39;re typing in chat.</p>
