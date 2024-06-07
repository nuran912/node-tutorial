//file system module : Asynchronous
const {readFile,writeFile} = require('fs')

//we run a callback when we are done with the rest of the functionality
// (err,result)=>{}  is the callback function
// we pass two arguements to the callback function, 'err' if there's an error.else 'result'.
// if we don't include 'utf8', the output will be a buffer 
readFile('./content/first.txt','utf8',(err,result1)=>{
    if(err){
        console.log(err)    
        return
    }else{
        //console.log(result1)   <-alternate method to output the content of the first file
        const first = result1  //result1 returns the content of the first file
        console.log(first)
        readFile('./content/second.txt','utf8',(err,result2)=>{
            if(err){
                console.log(err)
                return
            }else{
                const second = result2  //result2 returns the content of the second file
                console.log(second)
            }
        })
    }
})

writeFile('./content/fourth.txt',
    'This is the fourth text file, written using async fs module',
    (err,result3)=>{
        if(err){
            console.log(err)
            return
        }else{
            console.log(result3)
        }
    }
)

