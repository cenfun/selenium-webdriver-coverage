module.exports = {
    name: 'My Selenium Coverage Report',

    reports: ['v8', 'console-details'],

    entryFilter: {
        '**/*': true
    },

    sourceFilter: {
        '**/webpack/**': false,
        '**/*': true
    },

    outputDir: './coverage-reports'
};
