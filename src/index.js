const express = require('express');
const app = express();
const port = 3000;

// Serve a simple HTML page
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Simple Web App</title>
      </head>
      <body>
        <h1>Hello from the Simple Web App!</h1>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});

