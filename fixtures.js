const MCR = require('monocart-coverage-reports');

const mcr = MCR();

const mochaGlobalSetup = async () => {
    // console.log('mochaGlobalSetup');
    await mcr.loadConfig();
    mcr.cleanCache();
};


const mochaGlobalTeardown = async () => {
    // console.log('mochaGlobalTeardown');
    await mcr.generate();
};


module.exports = {
    mochaGlobalSetup,
    mochaGlobalTeardown
};
