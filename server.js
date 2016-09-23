var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var tests={
test1 :{
    title:"Test One | Ashique",
    heading:"Test One",
    content:"<p>Test One Sucessfully Completed!!!</p>"
},
test2:{
    title:"Test Two | Ashique",
    heading:"Test Two",
    content:"<p>Test Two Sucessfully Completed!!!</p>"
},
test3:{
    title:"Test Three | Ashique",
    heading:"Test Three",
    content:"<p>Test Three Sucessfully Completed!!!</p>"
}
};
function createhtml(data){
    var title= data.title;
    var heading=data.heading;
    var content=data.content;
var htmltemplate=`
<html>
    <head>
        <title> ${title} </title>
        <meta name="viewport" content="width-device-width, initial-scale= 1"/>
    </head>
    <body>
        <div>
            <a href='/'>Home</a>
        </div>
        <div>
            <h1>
            ${heading}
            </h1>
        </div>
        <div>
            <p>
                ${content}
            </p>
        </div>
    </body>
</html>`;
return createhtml;
}
    
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:testname', function (req, res) {
   var testname=req.params.testname;
  res.sendFile(createhtml(tests[testname]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
