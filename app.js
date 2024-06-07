const os = require('os');
//infor about current user
const user=os.userInfo();
console.log(user);

//method returns system uptiime

console.log(`the system uptime is ${os.uptime()}`);

const currentos={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentos);