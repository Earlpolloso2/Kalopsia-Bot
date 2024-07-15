const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <html>
      <head>
        <title>Your Web View</title>
      </head>
      <body style="margin: 0; padding: 0;">
        <iframe width="100%" height="100%" src="https://axocoder.vercel.app/" frameborder="0" allowfullscreen></iframe>
      </body>
    </html>`);
});

server.listen(3000, () => {
  console.log('Server Online because of Axo Coder ✅!!');
});
const config = require('./Structures/Config');
const Bot = require('./Structures/Bot');

const bot = new Bot(config);

bot.start();

/* Error handling (Highly not recommend). To use it, remove the comments from the line below. */
// process.on('uncaughtException', console.error);
// process.on('unhandledRejection', console.error);
