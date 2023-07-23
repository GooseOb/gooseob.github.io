#### Wizualizacja systemu paszportowego krajów wirtualnych

### Kontent

Możemy przewracać strony paszportu, obracać go. Wprowadzać id paszportu
do pola id i móc go przeglądać. Kolor tła się zmienia
jeśli kraj do którego należy paszport różni się od poprzedniego.

Przewracanie stron jest dostępne poprzez kliknięcie przycisków ze stzałkami, kliknięcie stron
i naciskanie przycisków strzałek na klawiaturze.

Jest kod qr, który można zeskanować, lub możemy
po prostu kliknąć na niego, aby skopiować url.

### Historia

Ten projekt jest moim pierwszym.

Został zrobiony dla automatyzacji wydania paszpotów w moim wirtualnum kraju Gęślandii.
Zazwyczaj robiłem paszporty w Photoshopie z szablonami paszportu,
ale zajmowało to zbyt wiele czasu dla mnie i odbiorców i zbiegło się
z rozpoczęciem zajęć z obsługi komputera w mojej szkole,
pracowaliśmy w MS Excel, i to zainspirowało mnie do stworzenia
systemu paszportów Gęślandii w arkuszach, wybrałem Google Sheets ze względu na
możliwość dzielenia się nim i możliwość połączenia z Google Forms.

![stare paszporty](@/old.jpg)

Początkowo kopiowałem tylko szablon paszportu, a następnie przenosiłem dane
z arkusza wyników formularza do arkusza paszportu (jeden arkusz na paszport)
podobnie jak robiłem to w Photoshopie, ale szybciej. Potem chciałem jeszcze bardziej skrócić
czas wydawania paszportów, więc zacząłem używać makr i okazało się, że
to tworzy skrypty na podstawie moich działań. To mnie zainteresowało i zacząłem
poznawać skrypty google apps, a potem JavaScript. Stworzyłem skrypt
wykonujący całą moją pracę za mnie, nawet robił zapytania do API portalu społecznościowego VK
aby uzyskać id użytkownika. Później zaczął również wysyłać wiadomości z linkiem
do paszportu w wiadomości prywatne.

Zorientowałem się, że JavaScript służy też do tworzenia stron internetowych i zacząłem się go uczyć.
W ten sposób stworzyłem tę stronę. Wszystkie arkusze z paszportami w Google Sheets stały się
bezużyteczne, usunąłem je i zostawiłem tylko główny arkusz ze wszystkimi danymi,
arkusz ze statystyką i arkusz z przykładami starych paszportów.

![statystyka](@/statistics.jpg)

Obecnie używam Google Sheets tylko do potwierdzania paszportów pieczątką.
Po prostu wypełniam odpowiednią komórkę cyfrą
- 1 - potwierdzony
- 0 lub pusto - niepotwierdzony
- -1 - anulowany

Teraz mamy stronę internetową, która wykonuje zapytanie do Google Sheets
(cache service w rzeczywistości, jest aktualizowana, gdy dodawany jest nowy paszport)
dla danych i wizualizuje je. Wykonanie zapytania do mojego google serwisu dla każdego paszportu
zajęłoby zbyt wiele czasu, więc prosi wszystkich paszportów.
Gdybym miał dużą ilość paszportów, prawdopodobnie przestałbym używać google serwisów.

Frontend został stworzony w vanilla js z GULPem, ale 2 lata później
postanowiłem przepisać projekt w TypeScript, więc zastąpiłem GULP przez Vite.

System paszportowy nie jest używany tylko przez Gęślandie, ale
też przez Nową Gęślandie i Państwo Kaczek.