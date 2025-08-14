//importing the required modules
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Importing routes
const userRoutes = require('./routes/userRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const forumRoutes = require('./routes/forumRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
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

// API routes app.use('/api/users', userRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/forums', forumRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/auth', authRoutes);
