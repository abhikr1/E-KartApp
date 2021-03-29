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

//             router.post('/:pid', (req, res) => {
                
//                  Cart.findOne({ _id : req.session.cartId, "productId" : req.params.pid}).then(Cart2 => {
//                      if(Cart2){
//                         console.log(Cart2.id)
//                         Cart2.quantity++;
//                         Cart2.save().then(() => {console.log("Updated");
//                          res.status(201).send({message : 'Product Updated in D/B'});});
//                      }
//                         else
//                          {
//                             const categorydb = new Cart({productId : req.params.pid, "price.mrp" : req.body.mrp, quantity : 1, "price.lp" : req.body.lp});
//                                 console.log("HHHHH")
//                                 categorydb.save().then((cart3) => {
//                                     req.session.cartId =  cart3.id;
//                                         console.log("HHH")
//                                         res.status(201).send({message : 'Product Added in D/B'});
//                             })
//                         }
//                     }, err => {
//     console.log(`Error in finding blog ${err}`);
//     });
// });



router.post('/:productId', (req, res) => {
                
    Cart.findOne({_id : req.session.cartId}).then(cart => {
        if(cart){
            console.log(cart);
            console.log(cart.items);
            // var result = cart.items.filter(x => x.productId === req.params.productId);
            var index = cart.items.findIndex(function(item, i){
                return item.productId === req.params.productId;
              });
            if(index === -1){
                cart.items.push({productId :  req.params.productId, quantity : 1})
                cart.save().then(() => {console.log("Updated");
                res.status(201).send({message : 'Product Added in D/B'});});
            }
            else{
                //result.quantity = result.quantity + 1;
                cart.items[index].quantity++; 
                cart.save().then(() => {console.log("Updated");
                res.status(201).send({message : 'Product Updated in D/B'});});
            }
        }
           else
            {
                const categorydb = new Cart({items : {productId : req.params.productId, quantity : 1}});
                   categorydb.save().then((cart3) => {
                       req.session.cartId =  cart3.id;
                           res.status(201).send({message : 'Product Added in D/B'});
               })
           }
       }, err => {
console.log(`Error in finding blog ${err}`);
});
});


module.exports = router;