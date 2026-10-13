#### Seminar groups and thesis management system. My university diploma project

### Content

There are two roles: lecturer and student. Each group and project has its own
room with a member list, real-time chat and file sharing with a dropzone.

The thesis workflow is the core of the app. A student uploads a PDF thesis, the
lecturer opens it in a PDF view with zoom, selects text across pages and
attaches comments to the selection. A diff view shows what changed between
versions, and a submit-review button locks the thesis from deletion once the
review starts.

At the settings we can switch the theme (light, dark, auto), change the language
(English and Polish), and upload a profile photo. The layout is responsive, the
sidebar collapses on mobile.

### History

I started the project in February 2025 with a basic layout and navigation. In
March I added the chat, the member list and themes. In April I connected the
database, made registration and login work, and switched the linter setup from
Biome to ESLint with Prettier.

In May I integrated the app with Cloudflare, made file uploading and downloading
work and replaced API routes with tRPC. Then I built the PDF view with
selectable text and zoom handling.

In June I implemented the diff of thesis versions, first with a custom
algorithm, and added PDF comments with multipage selection and the submit review
button. In August I replaced the custom diff with the diff package, which made
the code simpler. After that I only fixed types, polished the translations and
removed unused code.
