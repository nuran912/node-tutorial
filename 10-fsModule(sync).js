//file system module : synchronous

//read file module , write file module
// 'fs' refers to the file system module
const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')    //utf8 is a default parameter
const second = readFileSync('./content/second.txt','utf8')

//print contents of first and second files
console.log(first,'\n',second)

writeFileSync('./content/third.txt', //path of the file
    'This is the third text file', //content to be written
    {flag:'a'}  // flag:'a' allows the file to append new content at every run.If flag:'a' was removed the file would re-write every time
)   