var products = require('../models/products');

exports.getProducts = function(req, res, next){
    products.find('title','price', function(err, products){
        if(err){
            res.send(err);
        }
        res.json(products);
    });
}