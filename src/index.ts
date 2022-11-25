import express,{Request,Response} from "express";
import routes from "./Routes/index";
import path from "path"
import resize from "./helper/sharp";
import { resizeImageController } from "./controllers/resizeImage.controller";

import { validateParametersMiddleware } from "./middlewares/custom.middleware";
const app = express()
const port:number = 3000


app.get("/images/",validateParametersMiddleware,resizeImageController)

app.listen(port,()=>{
    console.log(`hello form ${port}`)
})