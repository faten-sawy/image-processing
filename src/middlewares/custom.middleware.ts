import { Request,Response,NextFunction } from "express";

export const validateParametersMiddleware = (
    req:Request,
    res:Response,
    next:NextFunction
)=>{
 const {imgName,imgWidth,imgHeight} = req.query

 if(!imgName){
    res.send("Image file is required")
   

 }
 else if(!imgWidth){
    res.send("Image width is required")
    
 }
 else if(!imgHeight) {
    res.send("Image height is Rquired")
   
 }

 console.log(imgHeight,imgName,imgWidth)
 next()


}