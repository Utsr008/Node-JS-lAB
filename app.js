const express=require('express');
const app=express();

const authRoutes = require("./authroutes");
const verifyToken = require('./middleware/authMiddleware');

app.use("/auth", authRoutes);

// Protected route that requires a valid JWT
app.get("/protected", verifyToken, (req, res) => {
    res.json({
        message: "You have accessed a protected route successfully!",
        userData: req.user
    });
});

// const userRoutes=require("./routes/userRoutes");
// const productRoutes=require("./routes/productRoutes");

// app.use("/",userRoutes);
// app.use("/",productRoutes);

module.exports=app;