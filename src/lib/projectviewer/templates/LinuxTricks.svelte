<h1>A few tricks for casual Linux usage i've found over the years</h1>
<details>
  <summary><b>"Fix" G502 sensitivity/other mouses linux</b></summary>
  If not installed:
  <div class="codeblock">
    pacman -S xorg-xinput apt install xinput
  </div>
  Run:
  <div class="codeblock">
    xinput
  </div>

  Find and note the name of your mouse<br><br>

  Replace [Accel] by a number between -1 and 1<br>
  (-0.5 is pretty good for a g502)<br>
  and then run:
  <div class="codeblock">
    xinput --set-prop '[Mouse name]' 'libinput Accel Profile Enabled' 0, 1<br
    />xinput --set-prop '[Mouse name]' 'libinput Accel Speed' [Accel]
  </div>
</details>

<details>
  <summary><b>G hub Linux/unassign buttons</b></summary>
  <!-- <p> -->
  Install piper:
  <div class="codeblock">pacman -S piper apt install piper</div>
  <h3> To unassign a button, since there's no normal to do that, you can: Assign
  one to Default profile (If you're only using 1 profile)</h3> <h3> or Assign one to
  Battery Level (not tested on wireless, on wired it shows an error after
  reloading but seems to work)</h3> <h4> Don't try to assign one to an empty
  keystroke, it'll just throw an error when saving</h4>
  <!-- </p> -->
</details>

<details>
  <summary><b>Fix caps lock delay</b></summary>
  <!-- <p> -->
    <h3> Add this to your startup scripts:
    https://raw.githubusercontent.com/hexvalid/Linux-CapsLock-Delay-Fixer/master/bootstrap.sh</h3>
    <h4> Full repo: https://github.com/hexvalid/Linux-CapsLock-Delay-Fixer</h4>
  <!-- </p> -->
</details>

<details>
  <summary
    ><b
      >Fix the MC pre 1.13 hotbar keys for French/other exotic keyboard layouts</b
    ></summary
  >
  <!-- <p> -->
  Pretty specific ngl <h4> The fixes here aren't perfect (far from that), but i couldn't
  think of anything else that'd be universal and still work</h4> 
  Install xmodmap if not
  installed:
  <div class="codeblock">pacman -S xorg-xmodmap apt install xmodmap</div>

  <br>

  Then either run this script normally for a temp fix or add it to your startup
  scripts for a permanent fix: <h4> /!\\ Since it'll always run, run it with &
  at the end (script.sh &)</h4> <h4> LINE 15/16: here you can change the list of
  window titles the script is going to look for. For my case, the script will
  only be useful on 1.8 on lunar, so I only kept "Lunar Client", but if you want
  it for more/other window titles just add more</h4><br>
  <h5> (also change it on the 16th line, the 15th is just an example that's commented
  out)</h5>
  <div class="codeblock">
    bash #!/bin/bash oldtitle="" oldrunning="" while : do sleep 0.5
    title=$(xtitle) if [ "$title" == "$oldtitle" ]; then continue fi
    oldtitle=$title running="0" #for value in "Minecraft" "Java" "Lunar Client"
    for value in "Lunar Client" do if [[ "$title" == *$value* ]]; then if ! [ -z
    "$(ps -A | grep java)" ]; then running="1" fi fi done if [ "$running" ==
    "$oldrunning" ]; then continue fi oldrunning=$running if [ "$running" == "1"
    ]; then xmodmap ~/.xmodmap-mc else setxkbmap fi done
  </div>

  <br>
  Then, put this in ~/.xmodmap-mc
  <div class="codeblock">
    keycode 0x0A = KP_1 KP_1 ampersand 1 onesuperior exclamdown onesuperior
    keycode 0x0B = KP_2 KP_2 eacute 2 asciitilde oneeighth asciitilde keycode
    0x0C = KP_3 KP_3 quotedbl 3 numbersign sterling numbersign keycode 0x0D =
    KP_4 KP_4 apostrophe 4 braceleft dollar braceleft keycode 0x0E = KP_5 KP_5
    parenleft 5 bracketleft threeeighths bracketleft keycode 0x0F = KP_6 KP_6
    minus 6 bar fiveeighths bar keycode 0x10 = KP_7 KP_7 egrave 7 grave
    seveneighths grave keycode 0x11 = KP_8 KP_8 underscore 8 backslash trademark
    backslash keycode 0x12 = KP_9 KP_9 ccedilla 9 asciicircum plusminus
    asciicircum
  </div>
  And you should be done <h3> How it works:</h3> Just check if the current window
  title has a specific name and if java is running, if that's the case switch to
  keyboard mappings with the numbers remplaced by keypad numbers, else switch to
  the normal one. I added a few checks to make sure the mappings only get
  changed when you actually switch from mc to a normal windows/opposite, so it
  doesn't make you lag in any way.
  <!-- </p> -->
</details>

<details>
  <summary
    ><b>Games lagging/being choppy on Nvidia GPUs with seemingly a lot of fps</b
    ></summary
  >
  <!-- <p> -->
  Install nvidia-settings if not installed:
  <div class="codeblock">
    pacman -S nvidia-settings apt install nvidia-settings
  </div>
  Open nvidia settings, go to OpenGL settings and turn off "Allow Flipping"<br
  />

  <h2>That should be it for the temporary fix, if this didn't fix it for you
  reading more is useless.</h2> <h3> To make it permanent:</h3> <h4> By Hand: Open
  nvidia-settings and just close it every reboot</h4> <h4> With scripts: I suggest
  you put this script in /usr/local/bin/ so you can just run it directly if you
  have some issues, but feel free to put it anywhere you want</h4>
  <b>as long as it runs at startup</b>

  <div class="codeblock">
    bash #!/bin/bash sleep 5 # wait for the system to start etc nvidia-settings
    & sleep 0.5 killall nvidia-settings
  </div>
  <!-- </p> -->
</details>

<details>
  <summary><b>"Shadowplay"</b></summary>
    https://github.com/MAPReiff/ShadowRePlay-Linux<br>/!\\ The AUR package sucks,
    if possible install manually
</details>

<details>
  <summary><b>Avoid rebuilding packages on AUR updates</b></summary>
  <p>https://aur.chaotic.cx/</p>
</details>

<details>
  <summary><b>Single GPU passthrough</b></summary>
  <p>
    For now, follow this: https://github.com/joeknock90/Single-GPU-Passthrough<br>
    OR https://gitlab.com/risingprismtv/single-gpu-passthrough<br>
    Will see if I can make a guide myself after.
  </p>
</details>

<details>
  <summary><b>Games running slow under wine with high cpu</b></summary>
  <p>
    Make sure you installed the 32bit nvidia utils<br>
    <b>lib32-nvidia-utils</b> on Arch
  </p>
</details>

<details>
  <summary><b>Telegram not using the GTK file picker</b></summary>
  <p>
    Install <b>xdg-desktop-portal-gtk</b> (on arch)<br>
    Then edit /usr/share/applications/telegramdesktop.desktop :<br>
    Add 'env XDG_CURRENT_DESKTOP=gnome ' at the start of the Exec line
  </p>
</details>

<style>
  details {
    background-color: #333;
    border-radius: 5px;
    margin: 15px;
    padding: 5px;
  }
  details > summary {
    cursor: pointer;
    text-align: center;
    list-style-type: "";
    font-size: 1.5em;
  }

  details[open] > summary {
    list-style-type: "";
  }
  .codeblock {
    padding: 7px;
    background-color: #111;
    border: 1px solid #999;
    border-radius: 5px;
    width: fit-content;
  }
</style>
