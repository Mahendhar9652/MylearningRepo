const express =require('express');
const app =express();



var products =[
    {
        id:1,
        name:"realme"
    },
    
    {
        id:2,
    name:"realme c3"
    },

      {
        id:3,
        name:"realme f2"
        }
    ]
    
    app.get('/products',(req,res)=>{
        res.json(products);
    })
    




app.listen(5000,()=>{
    console.log("SERVER IS RUINING");
});