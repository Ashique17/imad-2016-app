var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'MyKitchen', 'index.html'));
});

/*app.get('/:testname', function (req, res) {
   var testname=req.params.testname;
  res.send(createhtml(tests[testname]));
});
*/


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
