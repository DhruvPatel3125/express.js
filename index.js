// const express = require("express");
// const app = express();

// let port = 30000;

// app.listen(port,()=>{
//     console.log(`Server is running on port ${port}`);
// })

const express = require("express");
const app = express();
const port = 3000;
// const port = 30000;


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

// app.get("/",(req,res)=>{
//     res.send("you are in dhruv");
// })

// app.get("/sujal",(req,res)=>{
//     res.send("you are in sujal");
// })

// app.get("/mohan",(req,res)=>{
//     res.send("you are in mohan");
// })

// // app.use((req,res)=>{
//     console.log(`request recived`);
//     res.send("this is dhruv");
// });

app.get("/search",(req,res)=>{
    let { q }=req.query;
    res.send(`search result for query: ${q}`);
});