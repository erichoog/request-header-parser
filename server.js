var express = require('express');
var app = express();

app.locals.pretty = true;
app.set('port', (process.env.PORT || 8080));


app.get('/', function (req, res) {
  res.end("goto /api/whoami");
});

app.get('/api/whoami', function (req, res) {
  
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var lang = req.headers["accept-language"];
  var ua = req.headers['user-agent'];
  
  var obj = {
    ipaddress: ip,
    language : lang,
    software: ua
  };
  
  res.json(obj);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
