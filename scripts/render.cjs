const puppeteer = require('puppeteer');

const ANIMATION_DURATION = 1; // in seconds
const FPS = 24;
const DFP = 1000 / FPS;
const FRAMES = FPS * ANIMATION_DURATION;

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await page.goto('file:///D:/.tmp-workspaces/photon-sphere-animation/index.html');

    for (let i = 0; i < FRAMES; i++) {
        console.log(`ANIMATION_DURATION: ${ANIMATION_DURATION},`, `FPS: ${FPS},`, `DFP: ${DFP},`, `CURRENT_FRAME: ${i + 1}`);
        await page.evaluate(`jumpToFrame(${i * DFP})`);
        await page.screenshot({ path: `capture/${i}.png` });
    }

    await browser.close();
})();