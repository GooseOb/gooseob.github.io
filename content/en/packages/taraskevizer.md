#### NPM package for Belarusian orthography conversion. The engine behind the taraskevizatar web app

### Content

The package converts the academic orthography to the classical one. The main
function is `tarask`, there are also `alphabetic` and experimental `phonetic`
pipelines, `splitIntoChunks` for worker-ready chunks, and the `TaraskConfig`
class with options for the alphabet (cyrillic, latin, arabic), i by j replacing,
variations, wrappers and the g letter.

It ships in 5 forms: an npm library with types, a CDN bundle with a global
variable that works synchronously without initialization, a `tarask` CLI with
prebuilt binaries that streams multi-gigabyte inputs in parallel, Rust library,
and JSON dictionaries in the GitHub releases.

```sh
npm install taraskevizer
tarask --latin 'планета'
tarask < ./cyr-text.txt > ./lat-text.txt
```

![npm page](@/npm.jpg)

### History

After a while, someone asked me in issues on GitHub to move logic of conversion
to an npm-package. And I moved this with json-generation to another repository.
For building I chose tsup, it's simple builder, that allows use esbuild plugins.
It was simpler to create a plugin for json-generation with esbuild than with
Webpack.

Then, I set up CI/CD with GitHub Actions. The workflow is building project and
publish it as npm-package, after successful publication it triggers a workflow
in the app repository, that makes build and publish to GitHub Pages.

Later I replaced bundling with transpiling and removed tsup from the deps. In
the autumn of 2026 I moved the conversion core to Rust compiled to WASM, so the
browser conversion became 3-4 times faster, and added the prebuilt `tarask`
binaries to every release.
