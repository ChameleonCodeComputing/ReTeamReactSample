const express = require('express');
const router = express.Router();
const InsulationData = require('../models/InsulationData');

// POST route to add insulation data
router.post('/add', async (req, res) => {
    const newData = new InsulationData(req.body);
    try {
        const savedData = await newData.save();
        res.json(savedData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// GET route to fetch all insulation data
router.get('/', async (req, res) => {
    try {
        const data = await InsulationData.find();
        res.json(data);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

