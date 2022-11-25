import express from "express"
import {validateParametersMiddleware } from "../middlewares/custom.middleware"
import { resizeImageController } from "../controllers/resizeImage.controller"
const routes = express.Router()

routes.get("/images/",validateParametersMiddleware,resizeImageController)



export default routes