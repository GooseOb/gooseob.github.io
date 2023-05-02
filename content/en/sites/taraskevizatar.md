#### Converter of belarusian orthography. From the modern academic to the classic

### Features

There is the text box for a text to convert and initial content in it. We can
use the special constructions to avoid processing the text we want to keep as it
was. It can be useful if you want to convert xml, tags won't be converted unless
you change it.

At the bottom of input card are following buttons:

- copy
- clear
- get prompt - gives prompts about using the app and the last update date

Output card:

- copy
- show/hide settings
- edit the result

At the settings we can:

- choose alphabet: cyrillic / latin / arabic
- choose replacing i by j: never / random / always
- upload text and then download converted one
- go to my telegram profile

In the header we have two buttons for switching theme.

### History

I came across [the baltoslav taraškievizer](https://baltoslav.eu/tar/index.php)
but realized it doesn't work well with many words. I decided to make my own
taraškievizer, started looking for any sources of words for start and found
[this script on the wikipedia](https://be-tarask.wikipedia.org/wiki/MediaWiki:Gadget-nt.js),
it became the base of my project dictionary.

There were 3 files of JavaScript: dictionary, converting logic and UI logic.
Later, I also added the service worker for caching files.

The project was created in vanilla js with GULP because I couldn't cope with
Webpack.

![old UI - desktop](@/old-desktop.jpg) ![old UI - mobile](@/old-mobile.jpg)

[My friend](https://github.com/nopears) proposed me to change the UI of the
project and I did it, the old UI is above.

He also created the Nest.js API for the taraskevizatar later. I and wanted to
avoid duplication of the dictionary file in the API and the frontend folders. It
required using TypeScript and es modules so I decided to rewrite the frontend in
TypeScript and figured out Webpack configuration. I moved the dictionary and
converting logic files to another folder and we could use files from there in
both of our projects.

Then I thought I'd make the possibility of building the taraskevizatar frontend
that interacts with this API. I added alias `@api` for imports and if the build
is in the api mode, `@api` imports fetch function instead of function with
taraskevization logic on frontend.
