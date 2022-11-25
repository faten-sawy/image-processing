import sharp from "sharp";

const resize = async (
    imgName:any,
    imgWidth:number,
    imgHeight:number,
    outImg:any
):Promise<string>=>{
     await sharp(imgName).resize(imgWidth,imgHeight).toFile(outImg)
     return outImg
}

export default resize