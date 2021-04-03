const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const Cart = require('../models/cart');
const Product = require('../models/products')
const mongoose = require('mongodb');


  
router.get('/cartitems', (req, res) => {
    console.log("JJJJJJj")
    console.log(req.session)
    console.log("uuuuu")
    Cart.findOne({ _id: req.session.cartId }).then(cart => {
        console.log(cart)
        if(cart)
        res.send(cart);
        else
        res.send({message : "No products"})
    }).catch(() => {
        res.status(500).send({ error: "Internal Server Error" });
    });
});

router.post('/:productId', (req, res) => {
    console.log("yyyyyyyyyyyyy")
    Product.findOne({_id :  mongoose.ObjectID(req.params.productId)}).then(prod => {
       // Product.findById(req.params.productId).then(prod => {

    Cart.findOne({_id : req.session.cartId}).then(cart => {
        if(cart){
            // var result = cart.items.filter(x => x.productId === req.params.productId);
            var index = cart.items.findIndex(function(item, i){
                return item.productId === req.params.productId;
              });
            if(index === -1){
                console.log("New product")

                cart.items.push({title : prod.title, name : prod.name, productId :  req.params.productId, quantity : 1, productprice : prod.price.mrp})
                cart.totalprice = cart.totalprice + prod.price.mrp;
                cart.save().then(() => {console.log("Updated");
                res.status(201).send({message : 'Product Added in D/B'});});

            }
            else{
                console.log(req.session.cartId)
                console.log("Existing product")
                //result.quantity = result.quantity + 1;
                cart.items[index].quantity++;
                console.log("jjjjjjjjjjjjj")
                const prodprice = cart.items[index].productprice + prod.price.mrp;
                console.log("jjjjjjjjjjjjj")

                console.log(prodprice);
                cart.items[index].productprice = prodprice;
                cart.totalprice = cart.totalprice + prod.price.mrp;
                cart.save().then(() => {console.log("Updated");
                res.status(201).send({message : 'Product Updated in D/B'});});
            }
            console.log(req.session)

        }
           else
            {   
                console.log("Hellllllll")
                const categorydb = new Cart({items : {title : prod.title, name : prod.name, productId :  req.params.productId, quantity : 1, productprice : prod.price.mrp} , totalprice:prod.price.mrp});
                   categorydb.save().then((cart3) => {
                       req.session.cartId =  cart3.id;
                       console.log(req.session)
                           res.status(201).send({message : 'Product Added in D/B'});
               }, err => {
                    console.log("in errorr") 
                    console.log(err)
               })
           }
       }, err => {
console.log(`Error in finding blog ${err}`);
});
});
}) 

router.delete('/:productId', (req, res) => {
    Cart.findOne({_id : req.session.cartId}).then(cart => {
        let balance = 0;
        for (var i in cart.items) {
            if(cart.items[i].productId === req.params.productId){
                balance = cart.items[i].productprice;
                cart.items.splice(i, 1);
            }
        }
        cart.totalprice = cart.totalprice - balance;
        cart.save().then(() => {console.log("Deleted");
        res.status(204).send({message : 'Product Deleted in D/B'});
    });
});
 
});
module.exports = router;