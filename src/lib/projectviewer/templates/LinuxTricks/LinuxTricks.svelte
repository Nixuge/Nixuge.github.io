<script>
  import Codeblock from "../utils/Codeblock.svelte";
  import Foldable from "../utils/Foldable.svelte";
</script>

<h1>A few tricks for casual Linux usage i've found over the years</h1>
<Foldable title='"Fix" G502 sensitivity/other mouses linux'>
  If not installed: 
  <Codeblock>pacman -S xorg-xinput apt install xinput</Codeblock>

  <br>

  Run: 
  <Codeblock>xinput</Codeblock>
  Find and note the name of your mouse

  <br><br>

  Replace [Accel] by a number between -1 and 1 (-0.5 is pretty good for a g502),
  then run:
  <Codeblock>
    xinput --set-prop '[Mouse name]' 'libinput Accel Profile Enabled' 0, 1<br>
    xinput --set-prop '[Mouse name]' 'libinput Accel Speed' [Accel]
  </Codeblock>
</Foldable>

<Foldable title="G hub Linux/unassign buttons">
  Install piper:
  <Codeblock>pacman -S piper apt install piper</Codeblock>
  <h3>
    To unassign a button, since there's no normal to do that, you can: Assign
    one to Default profile (If you're only using 1 profile)
  </h3>
  <h3>
    or Assign one to Battery Level (not tested on wireless, on wired it shows an
    error after reloading but seems to work)
  </h3>
  <h4>
    Don't try to assign one to an empty keystroke, it'll just throw an error
    when saving
  </h4>
</Foldable>

<Foldable title="Fix caps lock delay">
  <h3>
    Add this to your startup scripts:
    https://raw.githubusercontent.com/hexvalid/Linux-CapsLock-Delay-Fixer/master/bootstrap.sh
  </h3>
  <h4>Full repo: https://github.com/hexvalid/Linux-CapsLock-Delay-Fixer</h4>
</Foldable>

<Foldable title="Fix the MC pre 1.13 hotbar keys for French/other exotic keyboard layouts">
  <Foldable sub={true} title="Forge only, X11/wayland (proper fix)">
    <h2>Download and install the MultiBind mod 
      (<a href="https://modrinth.com/mod/multibind">Modrinth</a>, <a href="https://github.com/Nixuge/multibind">Github</a>)
    </h2>
      Then just bind all of your alternative hotkey binds to the same key.
      <br>
    <h4>
      /!\ eg for é, you it may look like you only have 2 different binds, but in fact you do need to bind all 3 possible interactions: 
      é, shift+é, capslock+é
    </h4>
    <h2>As of now this is 1.8.9 only. Need it for more versions? Dm me somewhere (telegram/discord if possible) and i'll see what I can do.</h2>
    
    
  </Foldable>
  <Foldable sub={true} title="Tested on 1.8-1.12, any launcher, X11 only.">
    <h3>
      If using 1.8 Forge please use the other method, as all this one does is basically replace your 
      &é"'(- etc... keys by numpad keys while you're running mc.
    </h3>
    Install xmodmap if not installed:
    <Codeblock>pacman -S xorg-xmodmap apt install xmodmap</Codeblock>
  
    <br>
  
    Then either run this script normally for a temp fix or add it to your startup
    scripts for a permanent fix:
    <h4>/!\\ Since it'll always run, run it with & at the end (script.sh &)</h4>
    <h4>
      LINE 15/16: here you can change the list of window titles the script is
      going to look for. For my case, the script will only be useful on 1.8 on
      lunar, so I only kept "Lunar Client", but if you want it for more/other
      window titles just add more
    </h4>
    <h5>
      (also change it on the 16th line, the 15th is just an example that's
      commented out)
    </h5>
    <Codeblock>
      #!/bin/bash
      oldtitle=""
      oldrunning=""
      
      while :
      do
      sleep 0.5
      title=$(xtitle)
      
      if [ "$title" == "$oldtitle" ]; then
        continue
      fi
      oldtitle=$title
      
      running="0"
      #for value in "Minecraft" "Java" "Lunar Client"
      for value in "Lunar Client"
      do
        if [[ "$title" == *$value* ]]; then
          if ! [ -z "$(ps -A | grep java)" ]; then
            running="1"
          fi
        fi
      done
      
      if [ "$running" == "$oldrunning" ]; then
        continue
      fi
      oldrunning=$running
      
      if [ "$running" == "1" ]; then
        xmodmap ~/.xmodmap-mc
      else
        setxkbmap
      fi
      done
    </Codeblock>
  
    <br>
    Then, put this in ~/.xmodmap-mc
    <Codeblock>
      keycode 0x0A =    KP_1    KP_1    ampersand    1    onesuperior    exclamdown    onesuperior
      keycode 0x0B =    KP_2    KP_2    eacute    2    asciitilde    oneeighth    asciitilde
      keycode 0x0C =    KP_3    KP_3    quotedbl    3    numbersign    sterling    numbersign
      keycode 0x0D =    KP_4    KP_4    apostrophe    4    braceleft    dollar    braceleft
      keycode 0x0E =    KP_5    KP_5    parenleft    5    bracketleft    threeeighths    bracketleft
      keycode 0x0F =    KP_6    KP_6    minus    6    bar    fiveeighths    bar
      keycode 0x10 =    KP_7    KP_7    egrave    7    grave    seveneighths    grave
      keycode 0x11 =    KP_8    KP_8    underscore    8    backslash    trademark    backslash
      keycode 0x12 =    KP_9    KP_9    ccedilla    9    asciicircum    plusminus    asciicircum
    </Codeblock>
    And you should be done
    <h3>How it works:</h3>
     Just check if the current window title has a specific name and if java is running,
    if that's the case switch to keyboard mappings with the numbers remplaced by keypad
    numbers, else switch to the normal one. I added a few checks to make sure the mappings
    only get changed when you actually switch from mc to a normal windows/opposite,
    so it doesn't make you lag in any way.
  </Foldable>
</Foldable>



<Foldable title="Games lagging/being choppy on Nvidia GPUs with seemingly a lot of fps (X11)">
  Install nvidia-settings if not installed:
  <Codeblock>pacman -S nvidia-settings apt install nvidia-settings</Codeblock>
  Open nvidia settings, go to OpenGL settings and turn off "Allow Flipping"<br>

  <h2>
    That should be it for the temporary fix, if this didn't fix it for you
    reading more is useless.
  </h2>
  <h3>To make it permanent:</h3>
  <h4>By Hand: Open nvidia-settings and just close it every reboot</h4>
  <h4>
    With scripts: I suggest you put this script in /usr/local/bin/ so you can
    just run it directly if you have some issues, but feel free to put it
    anywhere you want
  </h4>
  <b>as long as it runs at startup</b>

  <Codeblock>
    #!/bin/bash
    sleep 5 # wait for the system to start etc 
    nvidia-settings & 
    sleep 0.5 
    killall nvidia-settings
  </Codeblock>
</Foldable>

<Foldable title='"Shadowplay"'>
  <h2><a href="https://github.com/MAPReiff/ShadowRePlay-Linux">github.com/MAPReiff/ShadowRePlay-Linux</a></h2>
</Foldable>

<Foldable title="Avoid rebuilding packages on AUR updates">
  <a href="https://aur.chaotic.cx/">aur.chaotic.cx/</a>
</Foldable>

<Foldable title="Single GPU passthrough">
  <h2><a href="https://github.com/joeknock90/Single-GPU-Passthrough">Joeknock90's guide</a></h2>
  <h2><a href="https://github.com/Nixuge/Single-GPU-Passthrough">My guide (win7 support included)</a></h2>
  <h2><a href="https://gitlab.com/risingprismtv/single-gpu-passthrough">Risingprismtv's guide</a></h2>
</Foldable>

<Foldable title="Games running slow under wine with high cpu">
    Make sure you installed the 32bit nvidia utils<br>
    <b>lib32-nvidia-utils</b> on Arch
</Foldable>

<Foldable title="Apps not using the GTK file picker (Telegram, OBS, ...)">
  <Foldable sub={true} title="Manual method">
    Install <b>xdg-desktop-portal-gtk</b> (on arch)<br>
    Then edit /usr/share/applications/desktopfile.desktop, <br>
    and add 'env XDG_CURRENT_DESKTOP=gnome ' at the start of the Exec line
  </Foldable>
  <Foldable sub={true} title="Automated method">
    <h2>See <a href="https://github.com/Nixuge/GTKPickerAdder">GTKPickerAdder</a></h2>
  </Foldable>
</Foldable>

<Foldable title="Dolphin/Qt apps not being themed by kvantum on anything that's not plasma">
  <h2>The fix here is for hyprland specifically but you can easily adapt it for any other DE</h2>
  <p>Most fixes I could find had the right method except for 1 exception: the qt version.<br>
    As of Plasma 6, Dolphin now uses Qt6. If you need this for Qt5 apps, just replace qt6ct by qt5ct
  </p>
  <h3>The actual steps:</h3>
  <li>
    <ul>- (Only required for Qt5 - skip for modern dolphin) install kvantum-qt5</ul>
    <ul>- Install qt6ct</ul>
    <ul>- Run it & set the "Style" to "kvantum" or "kvantum-dark"</ul>
    <ul>- Set the environment variable QT_QPA_PLATFORMTHEME to qt6ct<br>
    -->If on hyprland, add "env = QT_QPA_PLATFORMTHEME,qt6ct" to the config
    </ul>
    <ul>- Should be done</ul>
  </li>
</Foldable>

<Foldable title="Dolphin not showing file associations">
  <h2>TLDR; symlink plasma-applications.menu to applications.menu in /etc/xdg/menus using the following:</h2>
  <Codeblock>
    sudo ln /etc/xdg/menus/plasma-applications.menu /etc/xdg/menus/applications.menu
  </Codeblock>

  <h2>The following is only the source of that fix</h2>

  <p>See <a href="https://www.reddit.com/r/kde/comments/1bd313p/comment/kyss9hk/">https://www.reddit.com/r/kde/comments/1bd313p/comment/kyss9hk/</a></p>
  <p>Text if this is deleted:</p>
  <p>"Your problem has probably nothing to do with xdg mimeapps.list, but with applications.menu. 
    I assume you use a custom Display Manager or a custom setup that is causing the "startplasma" executable to not be called? 
    There was a recent change on how the xdg applications menu is named for KDE6 https://phabricator.kde.org/T12542. 
    It seems like the KDE6 specific "applications.menu" file was renamed to "plasma-applications.menu" (should be found here /etc/xdg/menus). 
    "startplasma" would set the env variable XDG_MENU_PREFIX to "plasma-" so the file should be found by "kbuildsycoca6" (if startplasma is called). 
    Since you are (probably) not using startplasma you have to set the env yourself in your Display Manager startup script like so:"</p>
    <Codeblock>
      export XDG_MENU_PREFIX=plasma-
      systemctl --user import-environment XDG_MENU_PREFIX
      dbus-update-activation-environment XDG_MENU_PREFIX
    </Codeblock>

    <br>
    <p>Addition from u/codeIMperfect:</p>
    <p>This is exactly the issue, but as u/Red-Eye-Soul suggests above it is much simpler to simply make a symlink applications.menu to plasma-applications.menu    </p>
</Foldable>

<Foldable title="Make the 'compressing package' step on Arch's AUR packages way faster">
  <h2>Simply open '/etc/makepkg.conf' and replace:</h2>
  <Codeblock>
    PKGEXT='.pkg.tar.zst'
  </Codeblock>
  <h2 style="margin: 5px; margin-left: 0px;">with</h2>
  <Codeblock>
    PKGEXT='.pkg.tar'
  </Codeblock>
  <br>
  <p>This basically skips the compression step. It doesn't really matter in that case since we just decompress it instantly after anyways at the install step.</p>
</Foldable>