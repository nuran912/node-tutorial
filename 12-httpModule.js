/*
http module allows nodeJS to transfer data over the HTTP
Output of the code can be viewed in the web browser
*/
const http = require('http')

//req->incoming requests, info about method(req is a giant object with a ton of info)
//res->response
const server = http.createServer((req,res)=>{
    //console.log(req) : shows the info within req object

    //this line checks if the url directs to the home page,URL of the home page starts with '/'
    if(req.url === '/'){    
        res.end('Welcome to our Home Page') //if it is the home page, print this text
    }
    if(req.url === '/about'){   //if you access the /about page, the following text will appear
        res.end('Here is our short history')
    }
    /*if the user tries to access a service that isn't available in our server;
    print the following default texts   */
    else{
        res.end("OOPS! the page you're tryna access is unavailable")
    }

    //res.write('Sample text')   //what is written in the web browser
})

//5000 is the port that our server is gonna be listening to
//Then enter URL 'localhost:5000' to visit the corresponding website
server.listen(5000)

//we have now effectively created a website