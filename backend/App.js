const express =require("express")
const app = express();
const cors=require('cors')
const port=3000;
const dbconnection=require("./config/dbconnection")

dbconnection().then(()=>{
       app.listen(port,()=>{
        console.log(`server is starting at ${port}`);
         })
}).catch((error)=>{
    console.log(error);
    
})

const corsOptions = {
    origin: "http://localhost:5173"
};


// routers 
const adminrouter=require("./router/AdminRouter")


// buffer format 
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors(corsOptions))
app.use("/admin",adminrouter)