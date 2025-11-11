# PokemonPGC — Gen Checklists + Dex Editor

# Jacob D. Grieco & Chatter Geralt Polistack Triliby the Fifth

- Tabs = **Gen 1–10** checklists.
- Each tab contains a special **Dex summary row** that shows completion (X / Y, %) and a progress bar.
- Click **Open Dex** to bring up the overlay editor with cards and checkboxes for that generation's dex.

## Files

- `index.html` — base markup and modal for the dex editor
- `style.css` — styles
- `app.js` — checklist renderer + dex editor + localStorage state
- `data/data.js` — your data
- `images/` — put PNGs here

## Add entries

- Add checklist rows in `DATA.genN` arrays. Example:

```js
DATA.gen1.push({ id: "g1-postgame", text: "Clear post-game tower" });
```

- Add dex entries in `DATA.dex.genN`. Example:

```js
DATA.dex.gen1.push({ id: 25, name: "Pikachu", img: "images/pikachu.png" });
```

- Completion is computed automatically from `DATA.dex[genKey]` and your saved checks.

## Run

Open `index.html` in a browser.
