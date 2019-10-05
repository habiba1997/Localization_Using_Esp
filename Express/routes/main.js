var express = require('express');
var router = express.Router();
let current = 5;
const{predict} = require('../helper/model')
// Home page route.
router.get('/:n1/:n2/:n3', function (req, res) {
  current = 10
 // res.json({o:9}).status(200);
 current = predict(req.params.n1,req.params.n2,req.params.n3)
 res.redirect('/getRoom')
})

router.get('/getRoom',(req,res)=>{
   res.json({o:current}).status(200);

})

// // About page route.
// router.get('/about', function (req, res) {
//   res.send('About this wiki');
// })

module.exports = router;