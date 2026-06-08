const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Fetch portfolio details
app.get('/api/portfolio', (req, res) => {
  const dataPath = path.join(__dirname, 'data', 'portfolioData.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error("Failed to read portfolio data:", err);
      return res.status(500).json({ error: "Failed to retrieve portfolio data" });
    }
    res.json(JSON.parse(data));
  });
});

// Handle contact submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  console.log(`[Contact Message Received]:`);
  console.log(`From: ${name || 'Anonymous'} <${email}>`);
  console.log(`Message: ${message || '(No content)'}`);
  
  // Here, one would typically integrate nodemailer or an external marketing API.
  res.json({ success: true, message: "Thank you for reaching out! Your message was received." });
});

// Download resume mock
app.get('/api/resume/download', (req, res) => {
  // Check if a resume.pdf exists, if not we will send a dummy text file
  const pdfPath = path.join(__dirname, 'public', 'resume.pdf');
  if (fs.existsSync(pdfPath)) {
    res.download(pdfPath, 'Himanshu_Sah_Resume.pdf');
  } else {
    // Return a text-based resume fallback if pdf is not found
    const txtPath = path.join(__dirname, 'public', 'resume.txt');
    if (!fs.existsSync(path.dirname(txtPath))) {
      fs.mkdirSync(path.dirname(txtPath), { recursive: true });
    }
    fs.writeFileSync(txtPath, "Himanshu Sah - Brand Strategist & Marketer Resume Fallback Text");
    res.download(txtPath, 'Himanshu_Sah_Resume_Fallback.txt');
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
