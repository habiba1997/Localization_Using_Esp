const KNN = require('ml-knn');
const dataSet = require('../train');
const label = require('../label')
var knn;


module.exports = {
    train : function(){
        knn = new KNN(dataSet, label);
    },


    predict : function(d1,d2,d3){

        let testArray = [];

        testArray.push([
            parseInt(d1),
            parseInt(d2),
            parseInt(d3)
        ]);

        var result = knn.predict(testArray);


        // res.json(result).status(200);
        // res.json({o:9}).status(200);

        console.log(`result = ${result}`);
        return result;
    }
}