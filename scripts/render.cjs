const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer');

const ANIMATION_DURATION = 20; // in seconds
const FPS = 60;
const DPF = 1000 / FPS;
const FRAMES = FPS * ANIMATION_DURATION;

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--use-gl=egl']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await page.goto('file:///D:/.tmp-workspaces/photon-sphere-animation/index.html', { waitUntil: 'domcontentloaded' });
    
    console.log(`ANIMATION_DURATION: ${ANIMATION_DURATION}s\nFPS: ${FPS}\nDPF: ${DPF}ms\nTOTAL_FRAME: ${FRAMES}\n`);

    const temporaryPath = path.join(__dirname, '../tmp');
    if (!fs.existsSync(temporaryPath)) {
        fs.mkdirSync(temporaryPath);
    } else {
        fs.rmSync(temporaryPath, { recursive: true, force: true });
        fs.mkdirSync(temporaryPath);
    }

    console.log(`Start!`);

    const a0 = performance.now();

    for (let i = 0; i < FRAMES; i++) {
        const b0 = performance.now();
        await page.evaluate(`jumpToFrame(${i * DPF})`);
        await page.screenshot({ path: path.join(temporaryPath, `${i + 1}.png`)});
        const b1 = performance.now();
        
        console.log(`FRAME: ${i + 1}, RENDER_TIME: ${b1 - b0} ms`);
    }

    const a1 = performance.now();
    console.log(`Finish!, render took ${a1 - a0} ms.`);

    await browser.close();
})();