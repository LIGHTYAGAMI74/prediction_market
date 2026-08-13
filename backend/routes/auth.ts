import express from "express";
import * as z from "zod"
import { prisma } from "../db";
const router = express.Router()
import jwt from "jsonwebtoken"

const signup =z.object({
    username:z.string().min(3).max(20),
    email:z.string(),
    password:z.string().min(6)
})
const signin = z.object({
    email:z.string(),
    password:z.string().min(6)
})

router.post("/signup",async (req,res)=>{
    const {data,success}= signup.safeParse(req.body)
    if(!success){
        return res.status(401).json({
            message:"not safely parese the body"
        })
    }
    const {username,email,password}= data
    const userExist = await prisma.user.findFirst({
        where:{
            email
        }
    })
    if(userExist){
        return res.status(401).json({
            message:"user already exist"
        })
    }
    const user = await prisma.user.create({
        data:{
            username,
            email,
            password,
            role:"User",
            balance:1000
        }
    })
    res.status(201).json({
        message:"user created successfully"
    })
})

router.post("/signin", async (req,res)=>{
    const {data,success} = signin.safeParse(req.body)
    if(!success){
        return res.status(401).json({
            message:"error in validation"
        })
    }
    const {email,password}=data
    const userExist = await prisma.user.findFirst({
        where:{
            email,
            password
        }
    })
    if(!userExist){
        return res.json({
            message:"user is not registered"
        })
    }
    const token = jwt.sign({id:userExist.id},"secret")
    res.cookie("token",token)
    res.json({
        message:" user is logged in ",
        id:userExist.id
    })    

    
})
export default router