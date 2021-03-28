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
        console.log("xxxxxxxxxx");
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
           res.send(user);
         }).catch((e) => {      
            res.status(400).send(e);    
         });
});





router.post('/myproducts', (req, res) => {
    console.log("Hi");
    console.log(req.body.movie_name);
    let email;
    // if (!req.session.userId) {
    //     console.log("Not logged in");
    //     res.send(200).send({message : "Not logged in"});
    //     return;
    // }
    // if (!req.body.rating) {
    //     res.status(400).send({message: "Please enter the rating"});
    //     return;
    // }

    const {title, description,category, mrp, lp} = req.body;
    console.log(req.body);
    console.log(req.body.title);
    if (!title) {
        res.status(200).send({message: "Please provide Rating"});
        return;
    }

    if (!description) {
        res.status(200).send({message: "Enter a description"});
        return;
    }
    // email_id = UserCredential.findOne({ _id : req.session.userId}).then(User => {
    //     if (User) {
    //         email = User.email

    //     ReviewDetails.findOne({ email, moviename : movie_name }).then(user => {
    //     if (user) {
    //         res.status(400).send({message: "Rating for this movie is already added by the user"});
    //         return;
    //     }



        console.log(mrp);
        console.log(lp);
        const product = new Product({title : title, description :  description,category : category, "price.mrp" : mrp,"price.lp" : lp});
        console.log("hhhhhh")
        product.save().then(() => {
            
                res.status(201).send({message : 'Product Added in D/B'});
    }).catch((error) => {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    });
});
module.exports = router;
