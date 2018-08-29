var express = require('express');
var app = new express();
var port = process.env.port || process.env.PORT || 443;


app.get('/currentBill', function(req, res){
    res.json({
        number: "+919552543985",
        month : "August 2018",
        smsCharges : "2",
        callCharges : "50"
    });
});

app.get('/', function(req, res){
    res.send("Expressample is deployed sucessfully!!");
});

app.get('/lastBill', function(req, res){
    res.json({
        number: "+919552543985",
        month : "July 2018",
        smsCharges : "20",
        callCharges : "100"
    });
});

app.get('/offers', function(req, res){
    res.json({
        number: "+919552543985",
        dataPack  : {
            "price"  : "10",
            "benefits"  : "10 GB addon on your current plan"
        }, 
        voicePack : {
            "price" : "20",
            "benefits" : "unlimited voice calls on Sprint numbers for 10 days"
        }
    });
});
app.listen(port, function(err, resp){
    if (err){
        console.log(err);
    } else {
        console.log("Server listening on "+port);    
    }
});
