# Selenium Webdriver V8 Coverage Example
[Selenium Webdriver](https://www.selenium.dev/documentation/webdriver/) integrate with [monocart coverage reports](https://github.com/cenfun/monocart-coverage-reports)

## Step 1, Install
```
npm i monocart-coverage-reports selenium-webdriver mocha -D
```

## Step 2, Collect V8 Coverage Data
Collect coverage data with hooks `before` and `after`
- Chrome Browser: see [test/chrome.test.js](./test/chrome.test.js)
- Edge Browser: see [test/edge.test.js](./test/edge.test.js)

## Step 3, Generate Coverage Reports
- Create mocha [fixtures.js](fixtures.js) for generating coverage reports
- Set coverage options in config file [mcr.config.js](mcr.config.js)

```sh
npm run test
```
The coverage report will be found here: `coverage-reports/index.html`

Check [monocart coverage reports](https://github.com/cenfun/monocart-coverage-reports) for more coverage options.
