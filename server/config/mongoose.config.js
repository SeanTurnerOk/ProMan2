const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/ProMan',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(console.log('Server connected to db'))
    .catch(err=>console.log("Something went wrong with db connection"+err))