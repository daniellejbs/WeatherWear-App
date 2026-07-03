# WeatherWear 🌥️

A simple web app that takes the guesswork out of getting dressed for the UK's unpredictable weather. Select a temperature range and the type of event you're dressing for, and WeatherWear will generate a suggested outfit.

## Features

- **Temperature-based suggestions** — choose between Cold (0–10°C), Mild (11–20°C), and Hot (21°C+)
- **Event-based styling** — outfits are tailored for Casual, Work, or Formal occasions
- **Dynamic background colour** — the page background changes colour to reflect the selected temperature
- **Clear results** — reset the output with a single click
- **Input validation** — prompts the user if either dropdown is left unselected

## How it works

1. Select a temperature range from the first dropdown
2. Select an event type from the second dropdown
3. Click **Generate** to see a suggested outfit, displayed as a bulleted list
4. Click **Clear results** to reset the output area

## Tech stack

- **HTML** — page structure and form controls
- **CSS** — styling (`weatherstyles.css`)
- **JavaScript (vanilla)** — outfit logic and DOM manipulation (`WeatherWear.js`)

## Project structure

```
WeatherWear/
├── index.html          # Main page markup
├── WeatherWear.js       # Outfit generation logic and event handlers
├── weatherstyles.css    # Styling
└── README.md
```

## Code overview

- **Outfit data**: Nine outfit arrays covering every combination of temperature (cold/mild/hot) and event type (casual/work/formal)
- **`generateOutfit(temp, eventType)`**: Looks up the matching outfit array based on the two selected values
- **Event listeners**:
  - `action` button — validates selections, generates the outfit, and renders it to the page
  - `clear` button — empties the output area
  - `tempSelect` dropdown — updates the page background colour to visually match the selected temperature

## Possible future improvements

- Replace the chain of `if/else` statements in `generateOutfit` with an object/lookup map for more scalable outfit data
- Add more granular temperature bands or seasonal variations
- Add real-time weather data via an API (e.g. auto-select temperature based on the user's location)
- Add accessible labels to the dropdowns (currently empty `<label>` elements)
- Add outfit images alongside the text list

## Author notes

Built as part of ongoing React/JavaScript learning — a good example of using arrays, conditional logic, and basic DOM manipulation to build an interactive front-end feature.
