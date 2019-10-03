const express = require('express');
const app = express();
//we add the path module which is built in node.js
const path = require('path');
//require our database odm
const mongoose = require('mongoose');
//require body parser to parse date from front-end
const bodyParser = require('body-parser');

const brain = require('brain.js');
//const testSet = require('./test');
let net = new brain.NeuralNetwork();
const main = require('./routes/main');
//let current = 4
const{train} = require('./helper/model')

//connecting to database
// mongoose.connect('mongodb://localhost/beta',{ useNewUrlParser: true }).then((db)=>{
//     console.log('database connected');
// }).catch(error=> console.log(error));


//we add the middle ware for the public folder and join it to the path to call our styles from it
app.use(express.static(path.join(__dirname,'public')));



//always put it before the routes or it will not work
app.use(bodyParser.urlencoded({extended: true}));
//to be able to parse json files
app.use(bodyParser.json());



// app.get('/:d1/:d2/:d3',(req,res)=>{
//     console.log(req.params.d1);
//     let testArray = [];

//         testArray.push({
//             d1:parseInt(req.params.d1),
//             d2:parseInt(req.params.d2),
//             d3:parseInt(req.params.d3)
//         });

//         let result = net.run(testArray);


//     // res.json(result).status(200);
//     // res.json({o:9}).status(200);
//     current = 9;
//     console.log(`current = ${current}`)
//     res.redirect('/getRoom')

// });



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//middle ware to active pass
app.use('/',main);



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
    // let dataArray = [];



    // for (let i = 1;i<dataSet.length;i++){
    //     dataArray.push({
    //         input:{
    //             d1:dataSet[i].d1,
    //             d2:dataSet[i].d2,
    //             d3:dataSet[i].d3
    //         },
    //         output:{
    //             o:dataSet[i].o
    //         }
    //     })
    // }

    // net.train(dataArray,{log:true});

    train();
});