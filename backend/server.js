
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/data', (req, res) => {
  const data = { message: 'Hello from the backend!' };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});

