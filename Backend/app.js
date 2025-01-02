const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const blogRoutes = require('./routes/blogRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/posts', blogRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => app.listen(process.env.PORT || 5000, () => console.log('Server running on port 5000')))
.catch(err => console.error(err));
