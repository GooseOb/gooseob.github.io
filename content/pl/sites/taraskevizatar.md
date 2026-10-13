#### Konwerter ortografii białoruskiej. Ze współczesnej akademickiej do klasycznej

### Content

Mamy pole tekstowe na tekst do konwersji i początkową treść w nim. Możemy użyć
specjalnych konstrukcji aby uniknąć przetwarzania tekstu, który chcemy zachować
w takiej postaci, w jakiej był. Może to być przydatne, jeśli chcesz
przekonwertować xml, tagi nie zostaną przekonwertowane, chyba że je zmienisz.

Na dole kartki z tesktem wejściowym znajdują się następujące przyciski:

- kopiuj
- wyczyśc
- podpowiedź - wyświetla podpowiedzi dotyczące użytkowania aplikacji oraz datę
  ostatniej aktualizacji

Kartka z tekstem wyjściowym:

- kopiuj
- pokaż/ukryj ustawienia
- edytuj wynik

W ustawieniach możemy:

- wybrać alfabet: cyrylica / łacina / arabski
- wybrać zastępowanie i przez j: nigdy / losowo / zawsze
- przesłać tekst, a następnie pobrać przekonwertowany
- przejść do mojego profilu w telegramie

W nagłówku mamy dwa przyciski do przełączania motywu.

### Historia

Natrafiłem na [baltoslav taraszkiewizator](https://baltoslav.eu/tar/index.php)
ale zdałem sobie sprawę, że nie działa on dobrze z wieloma słowami. Postanowiłem
zrobić własny taraszkiewizator, zacząłem szukać źródeł słów na początek i
znalazłem
[ten skrypt na wikipedii](https://be-tarask.wikipedia.org/wiki/MediaWiki:Gadget-nt.js),
stał się on podstawą słownika mojego projektu.

Były tam 3 pliki JavaScript: słownik, logika konwersji i logika UI. Później
dodałem też service worker do zachowania plików w cache.

Projekt został stworzony w vanilla js z GULP, ponieważ nie mogłem sobie poradzić
z Webpackiem.

![stary UI - komputer](@/old-desktop.jpg)
![stary UI - telefon](@/old-mobile.jpg)

[Mój kolega](https://github.com/nopears) zasugerował mi zmianę UI projektu i
zrobiłem to, stary UI jest powyżej.

Stworzył również nest.js API dla taraszkievizataru później. I ja chciałem
uniknąć duplikacji pliku słownika w API i folderach frontendowych. Wymagało to
użycia TypeScript i es modułów, więc postanowiłem przepisać frontend w
TypeScript i rozgryzłem konfigurację Webpacka. Przeniosłem pliki słownika i
logiki konwersji do innego folderu i mogliśmy używać plików stamtąd w obu
naszych projektach.

Wtedy pomyślałem, że zrobię możliwość budowania frontendu taraszkievizatoru,
który współdziała z tym API. Dodałem alias `@api` dla importu i jeśli build jest
w trybie api, `@api` importuje funkcję fetch zamiast funkcji z logiką
taraszkievizacji na frontend.

Logika konwersji mieszka w [pakiecie taraskevizer](/pl/packages/taraskevizer),
aplikacja tylko rysuje UI wokół niej.

Przeprowadziłem również migrację aplikacji z Webpack do Vite, więc budowanie
stało się o 3 razy szybsze, a hot-reloads nie są już zepsute. Vite pozwala na
używanie pluginów rollup, a ich pisanie jest nawet prostsze niż w przypadku
esbuilda.

Potem, żeby łatwiej dodawać nowe funkcje, przerobiłem aplikację jeszcze raz, tym
razem przepisując ją na Svelte (SvelteKit) z Server-Side Generation. Stary UI
został dostępny i można do niego przejść, klikając link "Перайсьці да старой
вэрсіі".

Nowa wersja dała lepsze doświadczenie konwersji plików, umożliwiając wgrywanie
kilku plików, podgląd wyniku, pobieranie wszystkiego w zipie albo jako osobne
pliki.
