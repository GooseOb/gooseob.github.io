#### System zarządzania grupami seminaryjnymi i pracami dyplomowymi. Mój projekt dyplomowy

### Content

Są dwie role: wykładowca i student. Każda grupa i projekt ma swój pokój z listą
członków, czatem na żywo i wymianą plików z dropzoną.

Jądrem aplikacji jest obieg pracy dyplomowej. Student wgrywa PDF z pracą,
wykładowca otwiera go w przeglądarce z zoomem, zaznacza tekst na wielu stronach
i podpina komentarze do zaznaczenia. Widok diffa pokazuje zmiany między
wersjami, a przycisk wysyłki do recenzji blokuje usuwanie pracy po starcie
recenzji.

W ustawieniach przełączamy motyw (jasny, ciemny, auto), język (angielski i
polski) i wgrywamy zdjęcie profilowe. Układ jest responsywny, sidebar zwija się
na telefonie.

### History

Zacząłem projekt w lutym 2025 roku od bazowego layoutu i nawigacji. W marcu
dodałem czat, listę członków i motywy. W kwietniu podpiąłem bazę danych,
zrobiłem rejestrację i logowanie i przeszedłem z Biome na ESLint z Prettier.

W maju zintegrowałem aplikację z Cloudflare, zrobiłem wgrywanie i pobieranie
plików i zamieniłem API-routy na tRPC. Potem zrobiłem widok PDF z zaznaczaniem
tekstu i zoomem.

W czerwcu zrobiłem diffa wersji pracy, najpierw własnym algorytmem, i dodałem
komentarze PDF z wielostronicowym zaznaczaniem i przyciskiem wysyłki do
recenzji. W sierpniu zamieniłem własnego diffa na paczkę diff, kod stał się
prostszy. Potem już tylko poprawiałem typy, polerowałem tłumaczenia i usuwałem
nieużywany kod.
