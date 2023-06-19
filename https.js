// web server
const http = require('http')

const server = http.createServer((req, res)=> {
    // console.log(req)
    if (req.url === '/') {
        res.end('Welcome to our home page') 
    }
    res.write('Welcome to our home page')
    res.end()
    if (req.url === '/about') {
        res.end('Here is a short story')
    }
    res.end(`
    <h1>Ooops!</h1>
    <P>We cant seem to find the page you are looking for </p>
    <a href-"/"> back home<a/>
    `)

})

server.listen(5000)