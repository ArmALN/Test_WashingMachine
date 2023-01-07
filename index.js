const express = require('express')
const path = require('path')
const app = express()

const bodyParser = require('body-parser')

const home_page = path.join(__dirname,"home.html")

app.use(bodyParser.json())

// app.use((req,res)=>{
//     res.send("hello express.js")
// })

// app.use(express.bodyParser());

app.get("/",(req,res)=>{
    res.status(200)
    res.type('text/html');
    res.sendFile(home_page)
})


app.post("/notify",(req,res)=>{

    // console.log(req.body.line_token);

    const line_token = req.body.line_token;
    const line_message = req.body.washing_machine;

    const request = require('request');
    const dotenv = require('dotenv');
    dotenv.config();
    
    const url_line_notification = "https://notify-api.line.me/api/notify";
    
    request({
        method: 'POST',
        uri: url_line_notification,
        header: {
            'Content-Type': 'multipart/form-data',
        },
        auth: {
            bearer: line_token,
        },
        form: {
            message: line_message
        },
    }, (err, httpResponse, body) => {
        if (err) {
            console.log(err)
        } else {
            console.log(body)
        }
    });

})

// app.get("/notfy",(req,res)=>{
//     res.status(200)
//     res.type('php')
//     res.sendFile(home_page_js)

// })


app.listen(8080,()=>{
    console.log("รัน server ที่ port 808");
})



// ------------------
// const http = require('http')

// const server = http.createServer(function (req,res) { 
//     res.write('Hello world')
//     res.end()
// })

// server.listen(3000)

// const http = require('http')
// const fs = require('fs')

// const indexPage =  fs.readFileSync(__dirname+'/home.html')
// const homejs =  fs.readFileSync(__dirname+'/home.js')

// http.createServer(function(req,res) {
//     const pathname = req.url
//     console.log("dir = ",pathname);
//     if (pathname==="/" || pathname === "/home") {
//         res.end(indexPage)
//         res.end(homejs)
//     }else{
//         res.writeHead(404)
//         res.end("<h1>Not Found</h1>")
//     }
//     const myhtml = '<h1>Arm ATTHAPON</h1><p style="color:green;">armatthapon studio | 2023</p>';

//     // res.write(myhtml)
//     // res.end()
// }).listen(8080,'localhost',()=>{
//     console.log("start server in port 8080");
// })



// const request = require('request');
// const dotenv = require('dotenv');
// dotenv.config();

// const url_line_notification = "https://notify-api.line.me/api/notify";

// request({
//     method: 'POST',
//     uri: url_line_notification,
//     header: {
//         'Content-Type': 'multipart/form-data',
//     },
//     auth: {
//         bearer: '9PcsALwysGeWlDrzVMk12kancDFQM0GXhRLofFiGCHg',
//     },
//     form: {
//         message: 'Test Message!'
//     },
// }, (err, httpResponse, body) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(body)
//     }
// });

