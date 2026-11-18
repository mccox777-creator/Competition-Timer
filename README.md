# Mock Trial Timer

A two-clock timer for mock trial competitions. One clock for the Plaintiff/Prosecution, one for the Defense, each starting at 70 minutes. It runs on any phone, tablet, or computer, and after the first visit it works with no wifi or cell service.

## Features

- Separate Start/Stop clock for each side, showing time used and time left
- Starting one side automatically stops the other, so only one clock runs at a time
- Shows overtime (in red) if a side goes past its allotment
- Turns yellow at 5:00 remaining; phones that support it vibrate at 5:00, 1:00, and 0:00
- Correction buttons (-1 min, -10 sec, +10 sec, +1 min) for fixing a late start or stop
- Log of every start, stop, and correction, with a Copy button for pasting into a score sheet or email
- Settings to change the minutes per side or rename the sides
- Keeps the screen awake while a clock is running (on supported browsers)
- Survives a refresh, a closed tab, or a dead battery restart: the times are saved on the device
- Keyboard shortcuts on a computer: `P` toggles Plaintiff, `D` toggles Defense, `Space` stops both

## Put it on GitHub Pages

1. Create a new public repository on GitHub (for example `mock-trial-timer`).
2. Upload everything in this folder, keeping the `icons` folder: `index.html`, `sw.js`, `manifest.json`, `README.md`, and `icons/`.
3. In the repository, go to **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**, pick `main` and `/ (root)`, and click **Save**.
4. After a minute or two the site is live at `https://YOUR-USERNAME.github.io/mock-trial-timer/`.

## Make it work offline

Open the site once while you have a connection. The footer will say **Ready for offline use** when it has saved itself to the device. Then install it:

- **iPhone / iPad (Safari):** tap Share, then **Add to Home Screen**.
- **Android (Chrome):** tap the menu, then **Install app** or **Add to Home screen**.
- **Computer (Chrome or Edge):** click the install icon in the address bar, or just bookmark the page.

To be sure, put the phone in airplane mode and open the app before competition day. It should load normally.

Tip: on iPhone, use the Home Screen icon rather than a Safari tab. iOS can clear saved website data for sites that are not on the Home Screen if they go unused for a while.

## Updating

If you edit the files and push them to GitHub, devices pick up the new version the next time they open the app with a connection (it takes effect on the following launch). To force a refresh everywhere, change the version string at the top of `sw.js` (for example `mock-trial-timer-v1` to `mock-trial-timer-v2`).

## Accuracy

The clocks are based on the device's system clock, not on counting ticks, so they stay accurate if the phone screen locks, the app is switched away from, or the page is reloaded mid-trial.
