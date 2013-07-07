var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  // get the content from index.html
  fs.readFileiSync('index.html', function (err, data) {
    if (err) throw err;
    response.send(data.toString('utf-8'));
  });
  //response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
