const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const insulationDataRoutes = require('./routes/insulationData');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/insulation-data', insulationDataRoutes);

const mongoURI = 'mongodb://localhost:27017/insulationDataDB';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5201;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
