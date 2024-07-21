<h1>DesktopPatcher</h1>
This is a simple utility script that edits your desktop files to make your experience better
<br><br>
At first, this was just a script to add `env XDG_CURRENT_DESKTOP=gnome` to desktop files so they use the Gnome file picker on i3/bspwm/other wms.
<br>
However, this has now evolved to support multiple patch types, which as of now include:
<ul>
    <li>Gtk File Picker (XDG_CURRENT_DESKTOP=gnome), original purpose described above</li>
    <li>Wayland (--ozone-platform-hint=auto & other), enable wayland support on electron apps & other apps, notabely fixes visual glitches & screensharing (must have on wayland tbh)</li>
    <li>Qt Zoom (QT_SCALE_FACTOR=1.7), more of a personal preference, only patches mc launchers because they look too small on a 1440p screen</li>
    <li>NVIDIA (basically only https://github.com/elFarto/nvidia-vaapi-driver)</li>
</ul>
& can theorically be used to patch any text file
<h2>How to use?</h2>
<h3>Using the Python script</h3>
<ul>
    <li>Grab the python script</li>
    <li>Run it</li>
    <li>Done</li>
</ul>
<h3>Using the pacman hook</h3>
<ul><li>Install the AUR Package <a href="https://aur.archlinux.org/packages/desktop-patcher-hook">desktop-patcher-hook</a></li></ul>

<br>
All done, the hook will run when installing/upgrading an app supported by this script

# Need support another app
Open an issue