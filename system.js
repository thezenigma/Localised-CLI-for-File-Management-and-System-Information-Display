const os = require('os');


function systemInfo(){
    console.log("HERE IS THE CURRENT SYSTEM INFO: ");
    console.log(`CPU RUNTIME: ${os.uptime}`);
    console.log(`FREE MEMORY: ${os.freemem}`);
    console.log(`TOTAL MEMORY: ${os.totalmem}`);
    console.log("CPU INFO: ");
    os.cpus().forEach((cpu, index) => {
        console.log(`CORE: ${index + 1}`);
        console.log(`MODEL: ${cpu.model}`);
        console.log(`SPEED: ${cpu.speed}`);
        console.log("----------------------")
    });
}

module.exports = {systemInfo};