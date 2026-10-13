#### Pakiet NPM do konwersji ortografii białoruskiej. Silnik webowej aplikacji taraskevizatar

### Content

Pakiet konwertuje pisownię akademicką na klasyczną. Główną funkcją jest
`tarask`, są też pipeliny `alphabetic` i eksperymentalny `phonetic`,
`splitIntoChunks` do chunków gotowych do workerów i klasa `TaraskConfig` z
opcjami alfabetu (cyrylica, łacinka, arabski), zamiany i na j, wariacji,
wrapperów i litery г.

Wydawany jest w 5 formach: biblioteka npm z typami, bundle CDN ze zmienną
globalną, działający synchronicznie bez inicjalizacji, CLI `tarask` z gotowymi
binarkami, ciągnące wielogigabajtowe wejścia równolegle, biblioteka Rust, i
słowniki JSON w releaseach na GitHub.

```sh
npm install taraskevizer
tarask --latin 'планета'
tarask < ./cyr-text.txt > ./lat-text.txt
```

![strona npm](@/npm.jpg)

### History

Po jakimś czasie jeden człowiek poprosił mnie w issue na GitHubie o
przeniesienie logiki konwersji do pakietu npm. I przeniosłem to, wraz z
generowaniem jsonów, do innego repozytorium. Do buildingu wybrałem tsup, to
prosty builder, który pozwala na użycie pluginów esbuild. Prościej było stworzyć
plugin do generowania jsonów z esbuildem niż z Webpack.

Następnie skonfigurowałem CI/CD za pomocą GitHub Actions. Workflow buduje
projekt i publikuje go jako pakiet npm, po udanej publikacji uruchamia workflow
w repozytorium aplikacji, który kompiluje i publikuje aplikację na GitHub Pages.

Później zamieniłem bundling na transpilację i usunąłem tsup z zależności.
Jesienią 2026 roku przeniosłem jądro konwersji do Rusta kompilowanego do WASM,
konwersja w przeglądarce stała się 3-4 razy szybsza, i dodałem gotowe binarki
`tarask` do każdego release.
