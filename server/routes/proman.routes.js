const ProductController=require('../controllers/proman.controllers')

module.exports=app=>{
    app.get("/api/allProducts",ProductController.findAllProducts)
    app.get("/api/oneProduct", ProductController.oneProduct)
    app.post("/api/makeProduct",ProductController.makeProduct)
    app.post("/api/updateProduct",ProductController.updateProduct)
    app.post("/api/deleteProduct",ProductController.deleteProduct)
}