const express = require('express');
const http = require('http');
const path = require('path');
const proxy = require('express-http-proxy');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api', proxy('https://immense-inlet-78725.herokuapp.com/'));

app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running`));
