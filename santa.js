const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017";
const saltRounds = 10;
app.use(cors());
app.use(bodyparser.json());


var santa = [];

// function authenticate(req,res,next){

// }
// app.post('/register',function(req,res){
//     mongoClient.connect(url,function(err,client){
//         if(err) throw err;
//         var db = client.db('santa');
//         var datas = {
//             name: req.body.name,
//              email: req.body.email,
//               password : req.body.password,
//                phone: req.body.phone,
//                parent:"",
//                child:""
//         }

//         db.collection('user').insertOne({ datas}, function(err,data){
//             if(err) throw err;
//             console.log(data);

//             res.status(200).json({
//                 message:"successFully registered"
//             })
//             client.close();
//         })
//     })
// })

app.post("/Report", function (req, res) {
    mongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var db = client.db('cricket');
        var datas = { TEAM: req.body.TEAM, SCORE: req.body.SCORE }
        console.log(datas);
        db.collection('match').insertOne({ datas }, function (err, data) {
            if (err) throw err;

            console.log(data);
            res.status(200).json({
                message: "SUCCESS"

            })
            client.close();
        })

    })
})
// app.get("/shuffle",function(req,res){
//     mongoClient.connect(url, function(err,client){
//         if(err)throw err;

//         var db=client.db('santa');

//         var cursor=db.collection('user').find().toArray();
//         cursor.then(function(data){
//             console.log(data);
//             res.json(data);
//             client.close();
//         })
//     })
// })
app.listen(3200);