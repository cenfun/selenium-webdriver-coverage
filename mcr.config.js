module.exports = {
    name: 'My Selenium Coverage Report',

    reports: ['v8', 'console-details'],

    entryFilter: {
        '**/*jquery*': false,
        '**/prism.*': true,
        '**/main*.js': true
    },

    outputDir: './coverage-reports'
};
