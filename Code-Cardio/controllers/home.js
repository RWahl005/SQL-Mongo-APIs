var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/setdata', (req, res, next) => {
    console.log(req.body);
    if(req.body.urlencoded != null && req.body.urlencoded != "") {
      res.end();
    }
    else if(req.body.txtencoded != null && req.body.txtencoded != ""){
      res.end();
    }
    res.end();
});

module.exports = router;
