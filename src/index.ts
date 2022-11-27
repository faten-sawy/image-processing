import express from 'express';

import { resizeImageController } from './controllers/resizeImage.controller';

import {
  validateParametersMiddleware,
  checkExistingImage
} from './middlewares/custom.middleware';

const app = express();
const port = 4000;
const Middlewares = [validateParametersMiddleware, checkExistingImage];
app.get('/images/', Middlewares, resizeImageController);

app.listen(port, () => {
  console.log(`hello form ${port}`);
});

export default app;
