const os = require('os');
const fs = require('fs');
const { stringify } = require('querystring');

const osCpu = os.cpus();

fs.writeFile("cpu.json", JSON.stringify(osCpu), (err) => {
    if (err) throw err;
})