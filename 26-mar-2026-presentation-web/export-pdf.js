const puppeteer = require('puppeteer');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

const BASE_URL = 'http://localhost:3800';
const SLIDE_WIDTH = 1920;
const SLIDE_HEIGHT = 1080;
// Extra time (ms) to let Framer Motion animations finish after page load
const ANIMATION_SETTLE_MS = 4500;

(async () => {
  console.log('🚀 Starting Puppeteer (screenshot mode)...');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // Use 2x device scale factor for retina-quality screenshots
  await page.setViewport({
    width: SLIDE_WIDTH,
    height: SLIDE_HEIGHT,
    deviceScaleFactor: 2,
  });

  // --- Step 1: Determine total slide count ---
  console.log(`Navigating to ${BASE_URL} to count slides...`);
  await page.goto(BASE_URL, { waitUntil: 'networkidle0', timeout: 60000 });
  await new Promise((r) => setTimeout(r, 2000));

  const totalSlides = await page.evaluate(() => {
    // Count pagination dots rendered by Presentation.tsx
    return document.querySelectorAll('.flex.gap-2 button[class*="rounded-full"]').length;
  });

  if (!totalSlides || totalSlides === 0) {
    console.error('❌ Could not detect slides. Is the dev server running on port 3800?');
    await browser.close();
    process.exit(1);
  }

  console.log(`✅ Found ${totalSlides} slides. Starting screenshot capture...\n`);

  const mergedPdf = await PDFDocument.create();

  // --- Step 2: Screenshot each slide ---
  for (let i = 1; i <= totalSlides; i++) {
    const url = `${BASE_URL}?slide=${i}`;
    console.log(`📸 Slide ${i}/${totalSlides} — ${url}`);

    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });

    // Wait for Framer Motion entrance animations to finish
    await new Promise((r) => setTimeout(r, ANIMATION_SETTLE_MS));

    // Hide navigation chrome so it doesn't appear in each slide
    await page.evaluate(() => {
      // Hide bottom nav bar (arrows + dots)
      document.querySelectorAll('main > div.absolute').forEach((el) => {
        el.style.display = 'none';
      });
    });

    // Capture the full viewport as a PNG screenshot (screen rendering engine)
    const screenshotBuffer = await page.screenshot({
      type: 'png',
      clip: { x: 0, y: 0, width: SLIDE_WIDTH, height: SLIDE_HEIGHT },
    });

    // Embed PNG into the PDF
    const pngImage = await mergedPdf.embedPng(screenshotBuffer);
    const pdfPage = mergedPdf.addPage([SLIDE_WIDTH, SLIDE_HEIGHT]);
    pdfPage.drawImage(pngImage, {
      x: 0,
      y: 0,
      width: SLIDE_WIDTH,
      height: SLIDE_HEIGHT,
    });

    console.log(`   ✔ Slide ${i} captured`);
  }

  // --- Step 3: Save merged PDF ---
  const outputPath = '../docs/BMAD_Agentic_Engineering_Presentation.pdf';
  console.log(`\n💾 Saving PDF to ${outputPath} ...`);

  const mergedPdfBytes = await mergedPdf.save();
  fs.writeFileSync(outputPath, mergedPdfBytes);

  console.log(`\n🎉 Done! PDF saved with ${totalSlides} pages at: ${outputPath}`);
  await browser.close();
})();
