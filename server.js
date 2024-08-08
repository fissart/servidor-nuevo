const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/new'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname + '/new/index.html'));
});
app.listen(8089);
