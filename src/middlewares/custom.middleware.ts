import { Request, Response, NextFunction } from 'express';
import path from 'path';
import { promises as fs } from 'fs';

const checkImgExists = async (imgPath: string): Promise<boolean> => {
  try {
    const file = await fs.open(imgPath, 'r');
    file.close();
    return true;
  } catch {
    return false;
  }
};
export const validateParametersMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { imgName, imgWidth, imgHeight } = req.query;

  const imgPath = path.join(__dirname, `../../Images/${imgName}.jpg`);

  const existingFlag = checkImgExists(imgPath);

  if (!imgName) {
    res.send('Image file is required');
  } else if (!existingFlag) {
    res.send('Image not existing');
  } else if (!imgWidth) {
    res.send('Image width is required');
  } else if (!imgHeight) {
    res.send('Image height is Rquired');
  }
  next();
};
