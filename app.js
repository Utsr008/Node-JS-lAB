const express=require('express');
const app=express();

app.set("view engine","ejs");

const homePageContent={
    header:{title:"GLA header"},
    footer:{title:"GLA footer"},
    content:{title:"GLA content"},
    data:{
        universityName:"GLA University Mathura",
        students:[
            { name: "Utkarsh",
                age:21,
                cgpa:8.5
            }
        ]
    }
};

app.get("/",(req,res)=>{
    res.render("header",homePageContent.header);
});

app.get("/footer",(req,res)=>{
    res.render("footer",homePageContent.footer);
});

app.get("/content",(req,res)=>{
    res.render("content",homePageContent.content);
});



//const authRoutes = require("./authroutes");
//const verifyToken = require('./middleware/authMiddleware');

//app.use("/auth", authRoutes);

// Protected route that requires a valid JWT
//app.get("/protected", verifyToken, (req, res) => {
  //  res.json({
    //    message: "You have accessed a protected route successfully!",
      //  userData: req.user
    //});
//});

// const userRoutes=require("./routes/userRoutes");
// const productRoutes=require("./routes/productRoutes");

// app.use("/",userRoutes);
// app.use("/",productRoutes);

module.exports=app;