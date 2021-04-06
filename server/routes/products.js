const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const UserCredential = require('../models/user-credential');
const Product = require('../models/products.js');


router.get('/allproducts', (req, res) =>{    
    Product.find({})
        .then(user => {       
           if(!user) {       
              res.status(404).send();      
           }
           res.send(user);
         }).catch((e) => {      
            res.status(400).send(e);    
         });
    });

    router.get('/category/:categoryname', (req,res) => {
        console.log(req.params.categoryname)
        Product.find({ category: req.params.categoryname})
        .then(user => {       
               if(!user) {       
                  res.status(404).send();      
               }
               res.send(user);
             }).catch((e) => {      
                res.status(400).send(e);    
             });
    });

    
router.get('/:productid', (req,res) => {
    Product.find({ _id: req.params.productid})
    .then(user => {  
           if(!user) {       
              res.status(404).send();      
           }
           console.log(user._id)
           res.send(user);
         }).catch((e) => {      
            res.status(400).send(e);    
         });
});





router.post('/myproducts', (req, res) => {
    let email;

    const {title, description,category, mrp, lp, name} = req.body;
    if (!title) {
        res.status(200).send({message: "Please provide Rating"});
        return;
    }

    if (!description) {
        res.status(200).send({message: "Enter a description"});
        return;
    }
        const product = new Product({title : title, description :  description,category : category, "price.mrp" : mrp,"price.lp" : lp, name : name});
        product.save().then(() => {
                res.status(201).send({message : 'Product Added in D/B'});
    }).catch((error) => {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    });
});
module.exports = router;
