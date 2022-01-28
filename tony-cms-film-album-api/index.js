const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
app.use(cors());

// router
const filmRoute = require('./routes/flim');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');

// env
const PORT = process.env.PORT || 4000;

// connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  },
  () => {
    console.log('connect to DB successfully')
  }
)

// routes
app.use(express.json({ extend: true }));

app.get('/', (req, res) => {
  res.send('API running')
})

// routes middleware
app.use('/api/film', filmRoute);
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

app.listen(PORT, () => {
  console.log(`Server Up and running localhost:${PORT}`)
});