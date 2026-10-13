#### Arkanoid w 3D. Mój uniwersytecki projekt z grafiki komputerowej

### Content

Jest plansza z tęczowymi rzędami bloków, paletka i świecąca kulka. Kamera podąża
za kulką. Kulka odbija się od paletki w zależności od tego, o którą jej część
uderzy, a każdy zniszczony blok robi ją trochę szybszą.

Asteroidy wlatują spoza ścian i niszczą bloki przy kontakcie. Zbite bloki
wybuchają świecącymi cząsteczkami z dźwiękiem pozycyjnym: odbicie, tłuczenie
szkła i wybuch.

Paletką ruszamy myszką. Przyciski i klawisze robią resztę: pauza [p]/[SPC],
reset [r] i liczba rzędów od 1 do 18 przez `-`/`+`. HUD pokazuje punkty i
prędkość kulki. Wyczyszczenie wszystkich bloków wygrywa poziom z większą liczbą
rzędów, zgubienie kulki kończy grę.

### History

Zrobiłem go w styczniu 2025 roku w jakieś 10 dni. Zacząłem od planszy, odbicia
od paletki i konfiguracji Vite, potem podzieliłem kod na pliki. Dalej dodałem
efekt wybuchu z kolorem bloku, skybox, asteroidy z ich kolizjami i dźwięki z
asynchronicznym ładowaniem. Skończyłem na teksturze ścian, kamerze za kulką i
fixie kolizji.
