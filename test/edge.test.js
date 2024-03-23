const path = require('path');
const { pathToFileURL } = require('url');
const Chrome = require('selenium-webdriver/chrome');
const { Builder, Browser } = require('selenium-webdriver');

const MCR = require('monocart-coverage-reports');

describe('Edge test', function() {
    this.timeout(5000);

    let driver;
    let mcr;
    let client;

    before(async function() {

        const options = new Chrome.Options();
        options.addArguments('--headless=new');

        driver = await new Builder().forBrowser(Browser.EDGE).setEdgeOptions(options).build();

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

    it('Edge case', async function() {
        await driver.get(pathToFileURL(path.resolve('test/mock/index.html')).toString());

        await new Promise((resolve) => {
            setTimeout(resolve, 100);
        });

    });

    after(async () => {

        // console.log('stop coverage');
        const coverageData = await client.stopCoverage();
        await mcr.add(coverageData);

        await driver.quit();
    });
});
