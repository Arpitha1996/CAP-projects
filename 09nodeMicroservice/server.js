
var express = require('express');
var app = express();

app.listen(3001);
//Implement first microservice
this.aVendors = [{

        "ID" : "1002",
        "FirstName" : "Anubhav",
        "lastName" : "Oberoy",
        "CompanyName" :"learning",
        "website":"learing Company",
        "Email": "learing@gmail.com",
        "gst number" : "123ghjk900"
        },
    {

        "ID" : "1001",
        "FirstName" : "Anubhav",
        "lastName" : "Oberoy",
        "CompanyName" :"learning",
        "website":"learing Company",
        "Email": "learing@gmail.com",
        "gst number" : "123ghjk900"
    },
    {
        "ID" : "1003",
        "FirstName" : "Anubhav",
        "lastName" : "Oberoy",
        "CompanyName" :"learning",
        "website":"learing Company",
        "Email": "learing@gmail.com",
        "gst number" : "123ghjk900"
    },
    {
        "ID" : "1004",
        "FirstName" : "Anubhav",
        "lastName" : "Oberoy",
        "CompanyName" :"learning",
        "website":"learing Company",
        "Email": "learing@gmail.com",
        "gst number" : "123ghjk900"
    }

    ]
app.get("/",(req,res) => {
    res.send("we are running first microservice")
})
app.get("/vendors", (re, res) => {
    res.json(this.aVendors);
})

app.get("/vendors/:id", (req, res) => {
    const vendorId = req.params.id;
    const vendor = this.aVendors.find(v => v.ID === vendorId);

    if (vendor) {
        res.json(vendor);
    } else {
        res.status(404).send('Vendor not found');
    }
});
app.post("/vendors", (req, res) => {
    var newVendor = req.body;
    newVendor.ID = crypto.randomUUID();
    res.json(newVendor);
    this.aVendors.push(newVendor);
});
console.log("server running with @ http://localhost:3001");

