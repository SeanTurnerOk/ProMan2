const Product=require('../models/proman.models.js');

module.exports.findAllProducts=(req,res)=>{
    Product.find({})
    .then(products=>res.json(products))
    .catch(err=>console.log("findAllProducts failed:",err))
}
module.exports.oneProduct=(req,res)=>{
    Product.findOne({})
    .then(product=>res.json(product))
    .catch(err=>console.log("findOne failed:",err))
}
module.exports.makeProduct=(req,res)=>{
    Product.create(req.body)
    .then(res.json("You made a product! Well done."))
    .catch(err=>console.log("findOne failed:",err))
}
module.exports.updateProduct=(req,res)=>{
    Product.updateOne({},req.body)
    .then(res.json("You updated a product!"))
    .catch(err=>console.log("findOne failed:",err))
}
module.exports.deleteProduct=(req,res)=>{
    Product.remove({_id:req.body.id})
    .then(res.json("You deleted a product! Sad."))
    .catch(err=>console.log("findOne failed:",err))
}