import { Request, Response } from 'express';
import resize from '../helper/sharp';
import path from 'path';
import { promises as fsPromise } from 'fs';

import fs from 'fs';

/* const cache = new NodeCache({stdTTL:})
 */ const checkImgExists = async (imgPath: string): Promise<boolean> => {
  try {
    const file = await fsPromise.open(imgPath, 'r');
    file.close();

    return true;
  } catch {
    return false;
  }
};

export const resizeImageController = async (req: Request, res: Response) => {
  const { imgName, imgWidth, imgHeight } = req.query;
  const imgPath = path.join(__dirname, `../../Images/${imgName}`);
  const outImgPath = path.join(__dirname, `../../Images/thumb/${imgName}`);

  const existingFlag = await checkImgExists(imgPath);

  if (existingFlag) {
    const heightCheck = isNaN(Number(imgHeight));
    const widthCheck = isNaN(Number(imgWidth));
    if (
      !heightCheck &&
      !widthCheck &&
      Number(imgWidth) > 0 &&
      Number(imgHeight) > 0
    ) {
      if (fs.existsSync(`images/thumb/${imgName}`)) {
        res.sendFile(path.resolve(`./images/thumb/${imgName}`));
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
  }
};
