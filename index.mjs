import createBareServer from '@tomphttp/bare-server-node';
import http from 'http';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';

const httpServer = http.createServer();
const expressServer = express();
const __dirname = path.resolve();

expressServer.use(cookieParser());

expressServer.get('/', (req, res) => {
	if (req.cookies['GZD3zrpjo1jApwtwPq4WH1G4xAgAPwjP'] === 'rN9aywsyd7UdYLuf0ynrbM9UQJeBzbcze') {
        res.sendFile(path.join(__dirname + '/astral/', 'index.html'));
        expressServer.get('/util.js', function(req, res) {
            res.sendFile(__dirname + "/astral/" + "util.js");
        });
        expressServer.get('/uv/uv.config.js', function(req, res) {
            res.sendFile(__dirname + "/astral/uv/" + "uv.config.js");
        });

        expressServer.get('/uv/uv.bundle.js', function(req, res) {
            res.sendFile(__dirname + "/astral/uv/" + "uv.bundle.js");
        });
        
        expressServer.get('/uv/uv.bundle.js', function(req, res) {
            res.sendFile(__dirname + "/astral/" + "sw.js");
        });

		res.clearCookie('GZD3zrpjo1jApwtwPq4WH1G4xAgAPwjP')
	} else {
        if (req.cookies['initialCloak'] === 'Khan Academy') {
            res.sendFile(path.join(__dirname + '/mislead/', 'khan.html'));
        } else if (req.cookies['initialCloak'] === 'Quizlet') {
            res.sendFile(path.join(__dirname + '/mislead/', 'quizlet.html'));
        } else if (req.cookies['initialCloak'] === 'IXL') {
            res.sendFile(path.join(__dirname + '/mislead/', 'ixl.html'));
        } else if (req.cookies['initialCloak'] === 'Quizizz') {
            res.sendFile(path.join(__dirname + '/mislead/', 'quizizz.html'));
        } else if (req.cookies['initialCloak'] === 'Clever') {
            res.sendFile(path.join(__dirname + '/mislead/', 'clever.html'));
        } else if (req.cookies['initialCloak'] === 'Blooket') {
            res.sendFile(path.join(__dirname + '/mislead/', 'blooket.html'));
        } else if (req.cookies['initialCloak'] === 'Edpuzzle') {
            res.sendFile(path.join(__dirname + '/mislead/', 'edpuzzle.html'));
        } else {
            res.sendFile(path.join(__dirname + '/mislead/', 'khan.html'));
        } 
	}
});

const bareServer = createBareServer('/bear/', {
	maintainer: {
		email: 'webmaster@goastral.net',
		website: 'https://github.com/astralservice',
	},
});

httpServer.on('request', (req, res) => {
	if (bareServer.shouldRoute(req)) {
		bareServer.routeRequest(req, res);
	} else {
		expressServer(req, res);
	}
});

httpServer.on('upgrade', (req, socket, head) => {
	if (bareServer.shouldRoute(req)) {
		bareServer.routeUpgrade(req, socket, head);
	} else {
		socket.end();
	}
});

httpServer.on('listening', () => {
	console.log('Multis listening on port 8080');
});

httpServer.listen({
	port: 8080,
});
