# Emoji Picker

Enhance user experience by allowing users to easily insert emojis into their text.

Built with [emoji-picker-react](https://www.npmjs.com/package/emoji-picker-react).

## Versions

| Widget / GitHub version | Mendix Studio Pro | Notes |
| --- | --- | --- |
| **1.1.1** (`Version1.1.1`) | **10.24.17** | Current — `@mendix/pluggable-widgets-tools` 10.16.0 |
| 1.1.0 (`Version1.1`) | 9.12.4 | Previous Marketplace release |
| 1.0.0 (`Version1.0`) | 9.12.4 | Earlier release |

Download the matching `.mpk` from the [Releases](https://github.com/bharathidas/Emoji-Picker/releases) page. The `mendix.EmojiPicker.mpk` on `main` is **1.1.1**.

## Build

```bash
cd emojiPicker
npm install
npm run release
```

## Features

### Emoji Display and Style
- **Open** — Controls whether the picker is open or not. Default is true
- **emoji Style** — google, apple, facebook, twitter, native. Default is apple
- **defaultSkinTone** — NEUTRAL, LIGHT, MEDIUM LIGHT, MEDIUM, MEDIUM DARK, DARK. Default is NEUTRAL
- **lazyLoad Emojis** — Lazy-load emojis. Default is false
- **hiddenEmojis** — Comma-separated emoji unicode names to hide
- **emoji Version** — Max emoji version (e.g. "0.6"…"5.0")
- **auto Focus Search** — Default is true
- **Theme** — light, dark, auto. Default is light
- **class Name** — Class on the root element
- **width** / **height** — Defaults 350 / 450

### Skin Tone Settings
- **skinTones Disabled** — Default is false
- **skinTone Picker Location** — SEARCH or PREVIEW. Default is SEARCH

### Suggested Emojis and Reactions
- **suggested Emojis Mode** — frequent or recent. Default is frequent
- **reactionsDefaultOpen** — Default is false
- **allowExpand Reactions** — Default is true

### Search Settings
- **searchPlaceholder** — Default is "Search"
- **search Disabled** — Default is false

### Event Handlers
- **onEmojiClick** / **onEmojiClickedData**
- **onSkinToneChange** / **onSkinToneChangedData**

### Preview Settings
- **Preview Config**, **defaultEmoji** (`1f60a`), **defaultCaption**, **showPreview**

## Demo

https://emoji-picker-sandbox.mxapps.io/index.html?profile=Responsive

Credentials: `demo_administrator` / `b7YCHluT3ouA`

## Issues

https://github.com/bharathidas/Emoji-Picker/issues
