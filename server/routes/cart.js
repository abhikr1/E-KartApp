const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const Cart = require('../models/cart');
const Product = require('../models/products')
router.post('/mycart', (req, res) => {
    console.log("Hi");

    const productId = req.body.productId;   
    const mrp = req.body.mrp;
    const lp = req.body.lp;
    console.log(lp);
    console.log(productId);

                Cart.findOne({ productId : productId })
                .then(blog => {
                    if(blog){
                        console.log("iiiii")
                        console.log(blog);
                    console.log(blog.id)
                   blog.quantity++;
                    blog.save().then(() => {console.log("Updated");
                    res.status(201).send({message : 'Product Updated in D/B'});});

                }
                else{
                    const categorydb = new Cart({sessionid : req.session.usedId, productId : productId, "price.mrp" : mrp, quantity : 1, "price.lp" : lp});
                        console.log("HHHHH")
                        categorydb.save().then(() => {
                                console.log("HHH")
                                res.status(201).send({message : 'Product Added in D/B'});
                    })
                }
            }, err => {
                    console.log(`Error in finding blog ${err}`);
                });
             
            });

            router.post('/mycartnew', (req, res) => {
                
                 Cart.findOne({ _id : req.session.cartId}).then(Cart2 => {
                     if(Cart2){
                        console.log(Cart2.id)
                        Cart2.quantity++;
                        Cart2.save().then(() => {console.log("Updated");
                         res.status(201).send({message : 'Product Updated in D/B'});});
                     }
                        else
                         {
                            const categorydb = new Cart({productId : req.body.productId, "price.mrp" : req.body.mrp, quantity : 1, "price.lp" : req.body.lp});
                                console.log("HHHHH")
                                categorydb.save().then((cart3) => {
                                    req.session.cartId =  cart3.id;

                                        console.log("HHH")
                                        res.status(201).send({message : 'Product Added in D/B'});
                            })
                        }
                    }, err => {
    console.log(`Error in finding blog ${err}`);
    });
});
module.exports = router;