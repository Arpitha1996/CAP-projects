
var express = require('express');
var app = express();

app.listen(3001);
//Implement first microservice

app.get("/",(req,res) => {
    res.send("we are running first microservice")
})
app.get("/vendors", (re, res) => {
    res.json([{

        "EmplID" : "1002",
        "EmpName" : "Anubhav",
        "Salary" : "3444"
    },
    {

        "EmplID" : "1002",
        "EmpName" : "Anubhav",
        "Salary" : "3444"
    }

    ])
})
console.log("server running with @ http://localhost:3001");

