var express = require('express');
var router = express.Router();
var data = [{
        title: "满300减30",
        img: "../img/1.jpg",
        price: 489
    },
    {
        title: "满300减50",
        img: "../img/2.jpg",
        price: 599
    },
    {
        title: "3件8折",
        img: "../img/3.jpg",
        price: 99
    },
    {
        title: "满999减100",
        img: "../img/1.jpg",
        price: 1299
    },
    {
        title: "满五免一",
        img: "../img/2.jpg",
        price: 39
    }
];
/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(data)
    res.locals.data = data;
    res.render('index');
});

module.exports = router;