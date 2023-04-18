#### Passport system visualization of the virtual states

### Features

We can flip the pages of the passport, rotate it. Input the passport id
to the id field and get it. Color of background is changing
if the state of current passport differs from the state of previous one.

Flipping pages is available by clicking arrow buttons, clicking pages
and pressing arrow buttons on keyboard.

There is the qr-code, it’s available to scan, or we can
just click it to copy url.

### History

This project is my first one.

Was created for automation of issuing passports at my virtual state of Gooselande.
Usually I did it in Photoshop with sample of passport,
but it was taking too much time for me and recipients and coincided
with start of computer operator classes at my school,
we were working in MS Excel, and it inspired me to create
the Passport System of Gooselande in spreadsheets, I chose Google Sheets due to
the possibility to share it and the possibility of connecting with Google Forms.

![old passports](@/old.jpg)

Initially I was just copying the sample of passport and then moving data
from the sheet of the form results to the passport sheet (one sheet per passport)
like I did in Photoshop but faster. Then I wanted to even more decrease
time of issuing passports, so I began using macros and found out that
it’s creating scripts based on my actions. It interested me and I started
to learn about google apps scripts and then about JavaScript. I created the script
doing all my job for me, it was even making requests to API of social network VK
to get the id of the user. Later it also started to send messages with a link
to the passport in pm.

I realised JavaScript is used for creating websites and began learning it.
This way I made this site. All the sheets of passports in Google Sheets became
useless, I deleted them and left only the main sheet with all the data,
the sheet of statistics and the sheet with examples of old passports.

![statisctics](@/statistics.jpg)

Currently, I use Google Sheets only for confirmation passports by stamp.
I just fill an appropriate cell with
- 1 - confirmed
- 0 or empty - not confirmed
- -1 - annulled

Now, we have a website that makes request to the Google Spreadsheet
(cache service in fact, it’s updated when new passport is added)
for a data and visualize it. Making request to my google service for each passport
would take too much time, so It requests all the passports.
If it contained a big amount of passport, I’d probably stop using google services.

Frontend was created in vanilla js with GULP but 2 years later
I decided to rewrite the project in TypeScript, so replaced GULP by Vite.

Passport System is not used only by Gooselande but
also by NewGooselande and Duck State.