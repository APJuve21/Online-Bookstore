const router = require('express').Router();

const bodyParser = require("body-parser");
var cors = require("cors");

router.use(cors());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', function(req, res, next) {
    res.send("Good")
    console.log("Invoice Received!")
    var name = req.body.name
    var company = req.body.company
    var address1 = req.body.address1
    var address2 = req.body.address2
    var city = req.body.city
    var region = req.body.region
    var country = req.body.country
    var postcode = req.body.postcode
    
    console.log(address1);
});

module.exports = router;