import sharp from "sharp";

const resize = async (
    imgName:any,
    imgWidth:number,
    imgHeight:number,
    outImg:any
):Promise<string>=>{
    if(!isNaN(imgWidth) && !isNaN(imgHeight)){
        await sharp(imgName).resize(imgHeight,imgWidth).toFile(outImg)
    }
    else{
        console.log("return valid height and width")
    }
     
     return outImg
}

export default resize