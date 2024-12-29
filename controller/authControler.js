import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const registerControler = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validation
    if (!name) {
      return res.send({ error: "name is required" });
    }
    if (!email) {
      return res.send({ error: "email is required" });
    }
    if (!password) {
      return res.send({ error: "password is required" });
    }
    if (!phone) {
      return res.send({ error: "phone no is required" });
    }
    if (!address) {
      return res.send({ error: "address is required" });
    }
    //check user
    const exsitingUser = await userModel.findOne({ email });

    //exsiting user
    if (exsitingUser) {
      return res.status(200).send({
        success: true,
        message: "Already registered",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword  
    }).save();

res.status(201).send({
    success: true,
    message: "User created successfully",
    user
})

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in register",
      error,
    });
  }
};


//post login
export const loginControler = async (req, res) => {
  try {
    const { email, password } = req.body; //get email and password from req.body
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "invalid email and password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    //if user not found
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "email is not registered",
      });
    }
    const match = await comparePassword(password, user.password);
    //if password not match
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "invalid password",
      });
    }
    //generate token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    //send token
    res.status(200).send({
      success: true,
      message: "login success",
      user:{
        name:user.name,
        email:user.email,
        phone:user.phone,
        address:user.address,
      },token,
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }

}

export const testController = (req,res)=>{
 res.send("protected route")
}