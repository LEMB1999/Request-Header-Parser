const express = require("express");
const app = express();

app.get("/api/whoami",(req,res)=>{
     res.status(200).json({
        ipaddress:req.headers["x-forwarded-for"].split(",")[1].trim(),
        language:req.headers["accept-language"],
        software:req.headers["user-agent"]
     })
});

app.listen(3000,()=>{
   console.log("Server listening in port 3000");
});
