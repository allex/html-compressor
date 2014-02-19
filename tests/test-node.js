var testrunner = require('qunit');

testrunner.options.log.summary = true;
testrunner.options.log.tests = false;
testrunner.options.log.assertions = false;

testrunner.run({
  deps: ['./lib/htmlparser.js', './lib/htmllint.js'],
  code: './lib/htmlminifier.js',
  tests: [
    './tests/minifier.js',
    './tests/lint.js',
  ]
}, function(err, report) {
  if(report.failed > 0){
    process.on('exit', function() {
      process.exit(1);
    });
  }
  if (err) {
    console.log(err);
  }
});
