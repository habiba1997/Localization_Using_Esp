const brain = require('brain.js');
let net = new brain.NeuralNetwork();
const dataSet = require('../data.json');



module.exports = {
    train : function(){
        let dataArray = [];



    for (let i = 1;i<dataSet.length;i++){
        dataArray.push({
            input:{
                d1:dataSet[i].STUDBME2,
                d2:dataSet[i].CMP_LAB1,
                d3:dataSet[i].RehabLab
            },
            output:{
                o:dataSet[i].O
            }
        })
    }

    net.train(dataArray,{log:true});
    },


    predict : function(d1,d2,d3){
            
    let testArray = [];

        testArray.push({
            d1:parseInt(d1),
            d2:parseInt(d2),
            d3:parseInt(d3)
        });

        let result = net.run(testArray);


    // res.json(result).status(200);
    // res.json({o:9}).status(200);
    
    console.log(`result = ${result.O}`)
    return result.o;
    }
}