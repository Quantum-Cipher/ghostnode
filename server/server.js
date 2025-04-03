const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'admin@eternum.ai' && password === '369369') {
    res.json({ message: 'Login successful.' });
  } else {
    res.json({ message: 'Invalid credentials.' });
  }
});

app.listen(3001, () => {
  console.log('🔐 Ghostwire Node server listening on port 3001');
});
