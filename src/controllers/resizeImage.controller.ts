import { Request, Response } from 'express';
import resize from '../helper/sharp';
import path from 'path';
import fs from 'fs';

export const resizeImageController = async (req: Request, res: Response) => {
  const { imgName, imgWidth, imgHeight } = req.query;
  const imgPath = path.join(__dirname, `../../Images/${imgName}.jpg`);
  const outImgPath = path.join(
    __dirname,
    `../../Images/thumb/${imgName}-${imgWidth}-${imgHeight}.jpg`
  );
  const heightCheck = isNaN(Number(imgHeight));
  const widthCheck = isNaN(Number(imgWidth));
  if (
    !heightCheck &&
    !widthCheck &&
    Number(imgWidth) > 0 &&
    Number(imgHeight) > 0
  ) {
    if (
      fs.existsSync(
        `Images/thumb/${imgName}-${Number(imgWidth)}-${Number(imgHeight)}.jpg`
      )
    ) {
      res.sendFile(
        path.resolve(`Images/thumb/${imgName}-${imgWidth}-${imgHeight}.jpg`)
      );
    } else {
      const outImage = await resize(
        imgPath,
        Number(imgWidth),
        Number(imgHeight),
        outImgPath
      );
      res.status(200).sendFile(outImage);
    }
  } else {
    res.status(404).json('Height and width must be valid numbers and > 0');
  }
};
