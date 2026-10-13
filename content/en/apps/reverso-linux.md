#### Reverso Context desktop client for Linux

### Content

We translate either by passing words as arguments or by piping selected text,
for example `wl-paste -p | reverso-linux`. A floating GTK window opens with From
and To combos, a text entry with a Translate button, and a swap button. It
closes with Esc and remembers the languages in the config file.

For short phrases it shows translation options with frequency counts as toggle
buttons. Clicking an option shows usage examples side by side, source with
translation. Long text shows the top translations directly.

![main window](@/index.jpg)

I bind it to Win+R in Hyprland so any selection translates with one shortcut.
Releases ship a tarball with the binary, and there is a PKGBUILD for the AUR.

### History

I wrote it in C in June 2026 in about two weeks: init, examples and options
fetching, language swap, input with the translate button, and CI with
formatting. In the end I made the requests async so the window never freezes.
