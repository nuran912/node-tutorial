const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method return the system uptime(how long the machine has been running) in seconds
console.log('The system uptime is : ',os.uptime(),'seconds')

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}
console.log(currentOS)