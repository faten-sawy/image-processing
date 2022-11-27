import { Request, Response, NextFunction } from 'express';
import fs from 'fs';

export const validateParametersMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { imgName, imgWidth, imgHeight } = req.query;

  if (!imgName) {
    res.send('Image file is required');
  } else if (!imgWidth) {
    res.send('Image width is required');
  } else if (!imgHeight) {
    res.send('Image height is Rquired');
  }
  next();
};

export const checkExistingImage = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { imgName } = req.query;
  if (fs.existsSync(`Images/${imgName}.jpg`)) {
    next();
  } else {
    res.send('Image not exist');
  }
};
