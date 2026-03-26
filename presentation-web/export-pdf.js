const puppeteer = require('puppeteer');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

(async () => {
  console.log('Starting puppeteer...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log('Navigating to http://localhost:3001...');
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle0', timeout: 60000 });

  // Find total slides by counting the pagination dots at the bottom
  const totalSlides = await page.evaluate(() => {
     return document.querySelectorAll('.absolute.bottom-4 .flex.gap-2 button').length;
  });
  console.log(`Found ${totalSlides} slides. Generating individual PDFs...`);

  const mergedPdf = await PDFDocument.create();

  for (let i = 1; i <= totalSlides; i++) {
    console.log(`Rendering Slide ${i}/${totalSlides}...`);
    await page.goto(`http://localhost:3001?slide=${i}`, { waitUntil: 'networkidle0' });
    
    // Give components time to finish intro animations
    await new Promise(r => setTimeout(r, 1500));
    
    const pdfBytes = await page.pdf({
      width: '1920px',
      height: '1080px',
      printBackground: true,
      pageRanges: '1',
    });
    
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const copiedPages = await mergedPdf.copyPages(pdfDoc, [0]);
    mergedPdf.addPage(copiedPages[0]);
  }

  console.log('Saving merged PDF...');
  const mergedPdfBytes = await mergedPdf.save();
  const outputPath = '../docs/BMAD_Agentic_Engineering_Presentation.pdf';
  fs.writeFileSync(outputPath, mergedPdfBytes);

  console.log(`PDF Generated successfully with ${totalSlides} pages at: ${outputPath}`);
  await browser.close();
})();
