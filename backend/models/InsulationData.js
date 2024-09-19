const mongoose = require('mongoose');

const InsulationDataSchema = new mongoose.Schema({
    foundationType: { type: String, enum: ['Conditioned', 'Unconditioned'], required: true },
    squareFoot: { type: Number, required: true },
    rValueCeiling: { type: Number, required: true },
    insulationType: { type: String, enum: ['Fiberglass', 'Polystyrene', 'Spray Foam'], required: true },
    rValueWalls: { type: Number, required: true },
    upgradeRecommended: { type: String, enum: ['Y', 'N'], required: true },
});

module.exports = mongoose.model('InsulationData', InsulationDataSchema);
