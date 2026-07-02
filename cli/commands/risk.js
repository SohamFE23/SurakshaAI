const fs = require('fs');
const path = require('path');

module.exports = function (district) {
  const filePath = path.join(__dirname, '../../data/risk_predictions.json');

  if (!fs.existsSync(filePath)) {
    console.log('Data file not found.');
    return;
  }

  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  if (data.district && data.district.toLowerCase() === district.toLowerCase()) {
    console.log(`Risk for ${data.district}: ${data.risk} (score: ${data.score})`);
  } else {
    console.log(`No data found for "${district}".`);
  }
};