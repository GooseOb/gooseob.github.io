#### Desktopowy odtwarzacz muzyki ze streamingiem z YouTube, SoundCloud i Bandcamp

### Content

\Jest wyszukiwarka z dostawcami: YouTube, SoundCloud, Bandcamp, Last.fm i
MusicBrainz. Możemy wchodzić w artystów, albumy i playlisty, startować radio
piosenki i artysty i zapisywać wszystko do biblioteki.

Utwory streamują się z cacheowaniem na dysk do natychmiastowego powtórzenia i da
się je pobierać do MP3. Pliki lokalne (MP3, FLAC, WAV, OGG, M4A, AAC, OPUS, WMA)
też grają, są playlisty, kolejka z zakładkami Następne i Ostatnio słuchane,
split-panele i drag and drop między widokami.

Widok tekstów pokazuje zsynchronizowane linijki z klikaniem do przewijania od
darmowych dostawców, adnotacje Genius z tłumaczeniami i własne edytowalne teksty
do każdego utworu. Z serwerem kompatybilnym z OpenAI albo lokalną Ollamą aktywny
tekst przetłumaczymy przez AI. Klawisze multimedialne działają na Linux, Windows
i macOS, a aplikacja mówi w 13 językach.

Do instalacji na Linux albo macOS odpalamy skrypt instalacyjny, na Windows
pobieramy archiwum z releaseów. Da się też zainstalować przez cargo.

### History

Zacząłem pod koniec lipca 2026 roku od prototypu na Slint: dekompozycja backendu
i UI, drag and drop, cacheowanie, miniaturki i kolejka. Ale na początku sierpnia
przepisałem wszystko na iced i całkowicie usunąłem Slint.

Potem pozbyłem się ffmpeg na rzecz natywnego dekodowania, dodałem teksty z dwoma
dostawcami, automatyczne wykrywanie języka i pobieranie Pythona przez aplikację.
We wrześniu dodałem Bandcamp i Last.fm, split-panele, Genius z AI-tłumaczeniem
tekstów i streaming z uwzględnieniem jakości. W październiku dodałem kosz,
changelog i przycisk polubienia.
