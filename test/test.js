const Chrome = require('selenium-webdriver/chrome');
const { Builder, Browser } = require('selenium-webdriver');
const assert = require('assert');

const MCR = require('monocart-coverage-reports');

describe('First script', function() {
    this.timeout(5000);

    let driver;
    let mcr;
    let client;

    before(async function() {

        const options = new Chrome.Options();
        options.addArguments('--headless=new');
        // options.addArguments(`--remote-debugging-port=${port}`);

        driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();

        mcr = MCR();
        await mcr.loadConfig();

        const pageCdpConnection = await driver.createCDPConnection('page');
        const ws = pageCdpConnection._wsConnection;
        const session = new MCR.WSSession(ws);

        client = await MCR.CDPClient({
            session
        }).catch((e) => {
            console.log(e);
        });

        await client.startCoverage();
        // console.log('start coverage');

    });

    it('First Selenium script with mocha', async function() {
        await driver.get('https://www.selenium.dev/documentation/webdriver/');

        const title = await driver.getTitle();
        assert(title.startsWith('WebDriver'));

    });

    after(async () => {

        // console.log('stop coverage');
        const coverageData = await client.stopCoverage();
        await mcr.add(coverageData);

        await driver.quit();
    });
});
