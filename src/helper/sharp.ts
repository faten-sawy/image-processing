import sharp from 'sharp';
const resize = async (
  imgName: string,
  imgWidth: number,
  imgHeight: number,
  imgOut: string
): Promise<string> => {
  if (!isNaN(imgWidth) && !isNaN(imgHeight)) {
    await sharp(imgName).resize(imgHeight, imgWidth).toFile(imgOut);
  } else {
    console.log('return valid height and width');
  }
  console.log(imgOut);
  return imgOut;
};

export default resize;
