const http = require('http')

const server = http.createServer((req,res) => {

    if(req.url === '/'){
        res.end("Welcome to our home page")
        return;
    }
    if(req.url === '/about'){
        res.end('This is our short history')
        return;
    }
     res.end(
        `<h1>Oops!</h1>
        <p>We cant seem to find a page you are looking for</p>
        <a href ="/">back home </a>
        `)
})

server.listen(5000)