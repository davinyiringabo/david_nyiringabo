const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, DevOps!');
});

app.listen(port, () => {
  console.log(`Express server listening on ${port} at http://localhost:${port}`);
}); 