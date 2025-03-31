const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const compression = require('compression');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Compression middleware
const shouldCompress = (req, res) => {
  // Don't compress responses with this request header
  if (req.headers['x-no-compression']) {
    return false;
  }
  
  // Compress all other requests
  return compression.filter(req, res);
};

app.prepare().then(() => {
  createServer((req, res) => {
    // Apply compression
    compression({ filter: shouldCompress })(req, res, () => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    });
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
