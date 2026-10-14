#### Desktopowy klient Reverso Context na Linux

### Content

Tłumaczymy albo słowami-argumentami, albo pipe z zaznaczonym tekstem, na
przykład `wl-paste -p | reverso-linux`. Otwiera się pływające okno GTK z
comboboxami From i To, polem wejścia z przyciskiem Translate i przyciskiem
zamiany. Zamyka się przez Esc i pamięta języki w pliku konfiguracyjnym.

Do krótkich fraz pokazuje opcje tłumaczenia z częstościami jako przyciski. Klik
opcji pokazuje przykłady użycia obok siebie, źródło z tłumaczeniem. Długi tekst
pokazuje top-tłumaczenia od razu.

Podpiąłem go pod Win+R w Hyprland, więc każde zaznaczenie tłumaczy się jednym
skrótem. W releaseach leży tarball z binarką i jest PKGBUILD do AUR.

### History

Reverso jest dla mnie bardzo przydatne do szybkiego tłumaczenia z innymi
przykładami użycia w kontekście. Ale przeniosłem się z Windowsa na Linux, a ono
nie działa tu nawet przez Wine.

Więc napisałem apkę na Linux w C w czerwcu 2026 roku w dwa tygodnie: init,
dociąganie przykładów i opcji, zamiana języków, wejście z przyciskiem
tłumaczenia i CI z formatowaniem. Na końcu zrobiłem requesty asynchroniczne,
żeby okno nigdy nie wisiało.
