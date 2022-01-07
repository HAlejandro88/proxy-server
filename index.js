const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const PORT = process.env.PORT || 5001;

const app = express();

// rate Limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 5
});

app.use(limiter);

app.set('trust proxy', 1)


app.use('/api', require('./router/index'));

app.use(cors());



app.listen(PORT, () => console.log('server is running in port 5000'))
