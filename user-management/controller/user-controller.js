const User = require("../model/User");

const getAllUsers = async (req, res, next) =>{
    let users;
    try{
        users = await User.find();
    }
    catch(err){
        return next(err)
    }
    // no user or error ocuure while fetching, show this
    if(!users){
        return res.status(500).json({message: "Internal server error"})
    }
    // if everything is fine, show the result
    return res.status(200).json({users});
};


// function for adding user record to db
const addUser = async(req, res, next) =>{
    const {name, email, password} = req.body;
    // validate inputs
     if(!name && name.trim()==="" && !email && email.trim()=== "" && !password && password.trim()=== ""
     && password.length > 6){
        return res.status(422).json({message: " Invalid data supplied!"});
     }
     // if everything went well then get user data and save the data
     let user;
     try{
        // get the user data. you can as well use: name: first_name, email: user_email
        // but if both input name and the database variable name are the same, no need, just do as below base ES6
        user = new User({
            name, email, password,
        });
        // here save the actual data
        user = await user.save();
     } catch (err){
        return next(err)
     }
     // check if the user is save
     if(!user){
        return res.status(500).json({message: "Unable to save user details, try again"});
     }
     // if it save successfully
     return res.status(201).json({message: "Record save successfully! " + user});
};

// getting updating request from the url and updating record

// update function here...
const updateUser = async (req, res, next) =>{
    const id = req.params.id;
    // we need to desctructure the body like this
    const {name, email, password} = req.body;
    // validate inputs
     if(!name && name.trim()==="" && !email && email.trim()=== "" && !password && password.trim()=== ""
     && password.length > 6){
        return res.status(422).json({message: " Invalid data supplied!"});
     }

     // if everything went well then update data
     let user;
     try{
         user = await User.findByIdAndUpdate(id,{name, email, password});
        
     } catch (err){
        return next(err)
     }
     // check if the user is update or not
     if(!user){
        return res.status(500).json({message: "Unable to update user"});
     }
     // if it updated successfully
     return res.status(200).json({message: "Record updated successfully! " + user});
}

// delete user details function here...
const deleteUser = async(req,res,next) =>{
    const id = req.params.id;
    let user;
     try{
         user = await User.findByIdAndRemove(id);
        
     } catch (err){
        return next(err)
     }
     // check if the user is update or not
     if(!user){
        return res.status(500).json({message: "Unable to delete user"});
     }
     // if it updated successfully
     return res.status(200).json({message: "Record deleted successfully! "}); 
}

// get user by id here...

const getUserById = async (req, res, next) =>{
    const id = req.params.id;
    let user;
     try{
         user = await User.findById(id);
        
     } catch (err){
        return next(err)
     }
     // check if the user exist or not
     if(!user){
        return res.status(500).json({message: "User not found"});
     }
     // if it successfully
     return res.status(200).json({message: "Found! " + user});
}
// exports all functions to be accessible in other pages of the application
exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.getUserById = getUserById;