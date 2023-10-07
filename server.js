// Import the module 
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {

// Set the response status and content type
res.writeHead(200, { 'Content-Type': 'text/plain' });

// Send the response
res.end('Hello Node!!!!\n');
}); 

// Listen on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


