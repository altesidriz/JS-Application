const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page; // Declare reusable variables

describe('E2E tests', async function () {
  this.timeout(5000);

  before(async () => { browser = await chromium.launch();}); // {headless:false, slowMo: 2000}
  after(async () => { await browser.close(); });
  beforeEach(async () => { page = await browser.newPage(); });
  afterEach(async () => { await page.close(); });


        it('loads static page', async function () {
          await page.goto('http://localhost:3000/');

          // await page.click('text=More');

          // await page.screenshot({ path: `index.png` });

          await page.waitForSelector('.accordion');

          const content = await page.textContent('#main');

          expect(content).to.contain('Scalable Vector Graphics');
          expect(content).to.contain('Open standard');
          expect(content).to.contain('Unix');
          expect(content).to.contain('ALGOL');
        });

        it('loads static page', async function () {
          await page.goto('http://localhost:3000/');

          await page.click('text=More');
          await page.waitForSelector('.accordion p');
          const visible = await page.isVisible('.accordion p');

          expect(visible).to.be.true;
      
        });

        it('loads static page', async function () {
          await page.goto('http://localhost:3000/');

          await page.click('text=More');
          await page.waitForSelector('.accordion p');
          let visible = await page.isVisible('.accordion p');
          expect(visible).to.be.true;

          await page.click('text=Less');
           visible = await page.isVisible('.accordion p');
          expect(visible).to.be.false;
      
        });



})

