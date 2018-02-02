var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
        // Timeout limitation.
        allScriptsTimeout: 11000,
        
        // Capabilities to be passed to the webdriver instance.
        capabilities: {
            'browserName': 'chrome',
            'chromeOptions': {                
                args: ['--disable-web-security', '--start-maximized']
            } 
        },

        // Framework to use. Jasmine is recommended.
        framework: 'jasmine',
        
        baseUrl: 'http://localhost:8100',
        
        // Spec patterns are relative to the current working directory when
        // protractor is called.
        specs: ['../testcases/*.ts'],
        
        // Options to be passed to Jasmine-node.
        onPrepare: function() {
            var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
            jasmine.getEnv().addReporter(
                    new Jasmine2HtmlReporter({
                        // Destination folder
                        // Output directory for created files. All screenshots and reports will be stored here(default folder is './').
                        // If the directory doesn't exist, it will be created automatically or
                        // otherwise cleaned before running the test suite.
                        savePath: './test/E2E/report/',
                        
                        // Screenshots folder (optional)
                        // By default the screenshots are stored in a folder inside the default path('/screenshots').
                        // If the directory doesn't exist, it will be created automatically or 
                        // otherwise cleaned before running the test.
                        // screenshotsFolder: 'images',
                        
                        // Take screenshots (optional)
                        // When this option is enabled, reporter will create screenshots for test, and default is true.
                        takeScreenshots: true,
                        
                        // Take screenshots only on failure (optional)
                        // This option allows you to choose if create screenshots always or only when failures. 
                        // Default is false (So screenshots are always generated).
                        takeScreenshotsOnlyOnFailures: false,
                        
                        // FixedScreenshotName (optional)
                        // Choose between random names and fixed ones, and default is false.
                        fixedScreenshotName: true,
                        
                        // FilePrefix (optional)
                        // Filename for html report, and default is 'htmlReport.html'.
                        //filePrefix: 'index',
                        
                        // Consolidate and ConsolidateAll (optional)
                        // This option allow you to create diferent HTML for each test suite, and default is false.
                        consolidate: true,
                        consolidateAll: true,
                        })
            );
        }, 
              
          // Options to be passed to Jasmine.
          jasmineNodeOpts: {
            defaultTimeoutInterval: 30000
          }
};
