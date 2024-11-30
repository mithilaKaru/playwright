const { defneconfig } = require('@playwright/test');
module.exports = defneconfig ({
reporter: [['html', {outputFolder : 'PlayWright-report'}]],
use : {
headless : true,
},

});