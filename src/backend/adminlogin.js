const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection


const mongoURI = 'mongodb+srv://user:user1234@cluster0.viojf.mongodb.net/myDatabase?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// User model
const UserSchema = new mongoose.Schema({
  username: String,
  password: String, // In production, use hashed passwords
});
const User = mongoose.model('User', UserSchema);

// ✅ Hardcoded admin credentials
const ADMIN = {
  username: 'admin',
  password: 'password123'
};

// API Routes
app.get('/', (req, res) => {
  res.send('API is running');
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // ✅ Check against hardcoded admin
    if (username === ADMIN.username && password === ADMIN.password) {
      return res.json({ message: `Welcome, admin!` });
    }

    // If not admin, check MongoDB
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ message: `Welcome, ${username}` });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
