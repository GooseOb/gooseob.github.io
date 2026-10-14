#### Desktop music player with streaming from YouTube, SoundCloud and Bandcamp

### Content

There is a search with provider pills: YouTube, SoundCloud, Bandcamp, Last.fm
and MusicBrainz. We can drill into artists, albums and playlists, start song and
artist radios, and save everything to the library.

Tracks stream with caching to disk for instant replay, and we can download them
to MP3. Local files (MP3, FLAC, WAV, OGG, M4A, AAC, OPUS, WMA) play too, with
playlists, queue with Up Next and Recently Played tabs, split panes and drag and
drop between views.

The lyrics view shows synced lines with click-to-seek from free providers,
Genius annotations with translations, and our own editable lyrics per track.
With an OpenAI-compatible server or local Ollama we can translate the active
lyrics with AI. OS media keys work on Linux, Windows and macOS, and the app
speaks 13 languages.

To install on Linux or macOS we run the install script, on Windows we download
the release archive. It can also be installed with cargo.

### History

I started at the end of July 2026 with a Slint prototype: backend and UI
decomposition, drag and drop, caching, thumbnails and queue. But in the
beginning of August I rewrote it to iced and removed Slint completely.

Then I got rid of ffmpeg in favor of native decoding, added lyrics with two
providers, automatic language detection and the ability to download Python
through the app. In September I added Bandcamp and Last.fm, split panes, Genius
with AI translation of lyrics and quality-aware streaming. In October I added
the trashbin, the changelog and the like button.
