const user = require("../models/userModules");

exports.getUsers = async(req,res)=>{
   const users = await user.find({});
   res.json(users);
}

exports.createUser = async(req, res)=>{
    try {
        const newUser = new user(req.body);
        await newUser.save();
        res.status(201).json({ message: "User created!", data: newUser });
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
}


exports.getUsersById = async(req,res)=>{
    const {id} = req.params;
    console.log("id:",typeof id);
    const users = await user.find({_id: (id)});
    res.json(users);
}

//write for post