const express = require('express');
const path = require('path');
const app = express;
app.request(express.static(__dirname + '/dist/good-government'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + 'dist/good-government/index.html'));
});
app.listen(process.env.PORT || 8080);