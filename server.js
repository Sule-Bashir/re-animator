const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// AI API simulation
app.post('/api/rewrite', async (req, res) => {
  const { text, action } = req.body;

  const responses = {
    improve: `Improved version: ${text} - optimized for clarity and impact!`,
    shorten: `Short version: ${text.split(' ').slice(0, 10).join(' ')}...`,
    summarize: `Summary: This text discusses "${text.split(' ').slice(0, 5).join(' ')}..."`
  };

  const result = responses[action] || `Processed: ${text}`;

  setTimeout(() => {
    res.json({ 
      original: text,
      result: result,
      action: action
    });
  }, 1000);
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Re-Animator Windows 95 is running!',
    version: 'Windows 95.1'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Re-Animator running on port ${PORT}`);
});
