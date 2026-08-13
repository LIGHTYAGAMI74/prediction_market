import type { NextFunction } from "express"
import type { Request,Response } from "express"
import jwt from "jsonwebtoken"


export function authMiddleware(req:any,res:Response,next:NextFunction){
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({
            message:"unauthorized"
        })
    }
    const decode:any = jwt.verify(token,"secret")
    if(!decode){
        return res.status(401).json({
            message:"wrong token"
        })
    }
    const id = decode.id
    req.id = id
    next()

}

module.exports={
    authMiddleware
}