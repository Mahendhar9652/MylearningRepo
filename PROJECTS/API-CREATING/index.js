const express =require('express');
const app = express();
const port =4500

const images =[
    {id:1,
    name:'aishwarya'
  
   },
   {id:2,
    name:'alia',
  
   },
   {id:3,
    name:'amir'
    
   },
   {id:4,
    name:'anaya'
   
   },
   {id:5,
    name:'charan'

   },
   {id:6,
    name:'danush'
 
   },
   {id:7,
    name:'disha'
 
   },
   {id :8,
    name:'hruthik'
   
   }, {id:9,
    name:'jacueline'
   
   }, {id:10,
    name:'kajal',
 
   }, {id:11,
    name:'kangana'

   }, {id:12,
    name:'kriti'
 
   }, {id:13,
    
   }, {id:14,
    name:'pooja'

   }, {id:15,
    name:'prabhas'
   
   }, {id:16,
    name:'priyanka'
   
   }, {id:17,
    name:'ranbeer'
  
   }, {id:18,
    name:'rashmika'
  
   }, {id:19,
    name:'saif'
   }, {id:20,
    name:'salman'
   }, {id:21,
    name:'samantha'
   }, {id:22,
    name:'shahrukhan'
   }, {id:23,
    name:'shalini'
   }, {id:24,
    name:'shradha'
   }, {id:25,
    name:'shruthi'
   
   }, {id:26,
    name:'sridevi'
 
   }, {id:27,
    name:'sushanth'
    
   }, {id:28,
    name:'tammanh'
  
   },
   {id:29,
    name:'tiger'
    
   },{id:30,
    name:'vijay'
   
   },
   {id:31,
    name:'vishal'
  
   },{id:32,
    name:'yash'
    
   },
  ]
    

app.get("/",(req,res)=>{
    res.json(images)
})




app.listen(port,()=>{
    console.log("port is running at"+ port);
})