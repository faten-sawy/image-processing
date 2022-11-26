import express from "express";

import { resizeImageController } from "./controllers/resizeImage.controller";
/* import apicache from 'apicache'
 */

import { validateParametersMiddleware } from "./middlewares/custom.middleware";

const app = express()
const port:number = 4000

app.get("/images/",validateParametersMiddleware,resizeImageController)

app.listen(port,()=>{
    console.log(`hello form ${port}`)
})

export default app