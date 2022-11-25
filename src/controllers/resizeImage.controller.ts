import { Request,Response} from "express";
import resize from "../helper/sharp";
import path from "path"
import fs from "fs"
export const resizeImageController = async (
    req:Request,
    res:Response,
)=>{
    const {imgName,imgWidth,imgHeight} = req.query
    const imgPath = path.join(__dirname,`../../Images/${imgName}`)
    const outImgPath =path.join(__dirname,`../../Images/thumb/${imgName}`)

    const outImage = await resize(imgPath,Number(imgWidth),Number(imgHeight),outImgPath)
 
    res.status(200).sendFile(outImage)

}