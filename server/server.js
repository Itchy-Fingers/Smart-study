//importing the required modules
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');

// Importing routes
const userRoutes = require('./routes/userRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const forumRoutes = require('./routes/forumRoutes');
const answerRoutes = require('./routes/answerRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
const questionRoutes = require('./routes/questionRoutes');
const authRoutes = require('./routes/authRoutes');

// Load environment variables
dotenv.config();

// Create an Express application
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database and start server
connectDB();
app.listen (PORT, () => console.log(`Server is running on port ${PORT}`));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// API routes
app.use('/api/users', userRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/forums', forumRoutes);
app.use('/api/answers', answerRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/auth', authRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('The SmartStudy app is running!');
});

// Catch-all route to serve the React app for any other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
    }
);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error!');
});

//Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  // Optionally, you can exit the process if needed
  process.exit(1);
});