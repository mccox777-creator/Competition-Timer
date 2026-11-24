# Mock Trial Timer

A two-clock timer for mock trial competitions. One clock for the Plaintiff/Prosecution, one for the Defense, each starting at 70 minutes. It runs on any phone, tablet, or computer, and after the first visit it works with no wifi or cell service.

## Features

- Separate Start/Pause clock for each side, showing total time used and total time left
- Time for each activity: Opening, Direct, Cross, Redirect, Recross, Closing, and Rebuttal (Plaintiff/Prosecution only), with direct, cross, redirect, and recross tracked per witness
- Pause for objections and resume: the time keeps going to the same activity
- Switching activities while the clock runs splits the time at that moment
- When one side picks Cross or Recross, it automatically selects the witness the other side is examining
- Breakdown screen with each side's totals and every activity's time, plus a full log
- Starting one side automatically pauses the other, so only one clock runs at a time
- Shows overtime (in red) if a side goes past its allotment
- Turns yellow at 5:00 remaining; phones that support it vibrate at 5:00, 1:00, and 0:00
- Correction buttons (-1 min, -10 sec, +10 sec, +1 min) that fix the current activity's time (and the totals with it)
- Copy All button for pasting the breakdown and log into a score sheet or email
- Settings to change the minutes per side, rename the sides, and enter each side's witness names (two per side by default)
- Keeps the screen awake while a clock is running (on supported browsers)
- Survives a refresh, a closed tab, or a dead battery restart: the times are saved on the device
- Keyboard shortcuts on a computer: `P` toggles Plaintiff, `D` toggles Defense, `Space` pauses both

## Using it during a trial

1. Before trial, open **Settings** and enter each side's witnesses in the order they will be called.
2. Tap the activity (for example **Opening**) on the side that is about to speak, then tap **Start**.
3. When an objection is made, tap **Pause**. Tap **Resume** when the examination continues.
4. When the activity changes, tap the new activity and, for examinations, the witness. You can do this while the clock is running or paused.
5. Tap **Breakdown** at any time to see every activity's time for both sides.

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

If you edit the files and push them to GitHub, devices pick up the new version the next time they open the app with a connection (it takes effect on the following launch). To force a refresh everywhere, change the version string at the top of `sw.js` (for example `mock-trial-timer-v3` to `mock-trial-timer-v4`).

## Accuracy

The clocks are based on the device's system clock, not on counting ticks, so they stay accurate if the phone screen locks, the app is switched away from, or the page is reloaded mid-trial.
