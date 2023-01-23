const app = require('./App');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const port = 3600 || process.env.port
dotenv.config();
//connect to DB
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Successful Connected to DB')
})

app.listen(port, () => console.log('Server is up at 3600 port'));
