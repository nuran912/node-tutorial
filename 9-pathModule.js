//path module
const path = require('path')

//platform specific seperator
console.log(path.sep)

//joins a sequence of path segments
const filePath = path.join('/content','subFolder','test.txt')
console.log(filePath)

//to get only the last portion of the path
const base = path.basename(filePath)
console.log(base)

//return an absolute path, it accepts a sequence of paths or path segments and resolves it into an absolute path
const absolute = path.resolve(__dirname,'content','subFolder','test.txt')
console.log(absolute) 