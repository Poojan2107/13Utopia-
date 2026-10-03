const fs = require('fs');
// Read raw buffer and use basic JPEG / bitmap parsing or pixel scan
const data = fs.readFileSync('d:/13U/public/metal-human/metal-human.jpg');
console.log('File size:', data.length);
