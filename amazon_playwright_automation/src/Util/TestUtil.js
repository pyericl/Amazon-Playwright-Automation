const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://yugipedia.com/wiki/Yugipedia
  await page.goto('https://yugipedia.com/wiki/Yugipedia');

  // Click text=Welcome to Yugipedia!
  await page.locator('text=Welcome to Yugipedia!').click();

  // Click text=Legendary Duelists: Season 3
  await page.locator('text=Legendary Duelists: Season 3').click();
  // assert.equal(page.url(), 'https://yugipedia.com/wiki/Legendary_Duelists:_Season_3');

  // Click text=/.*"Elemental HERO Sunrise".*/
  await page.locator('text=/.*"Elemental HERO Sunrise".*/').click();

  // ---------------------
  await context.close();
  await browser.close();
})();