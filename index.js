const path = require('path');
const express = require('express');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const PORT = 3000;

const todoRoutes = require('./routes/todoRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// Routes
app.get('/', (req, res) => {
  res.send('Hii');
});

app.use('/api/todo', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`.rainbow);
});
