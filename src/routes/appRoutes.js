import { Router } from "express";
import examplecontroller from "../controllers/expampleController.js";
import uploadContoller from "../controllers/uploadController.js";
import showContoller from "../controllers/showController.js";

const appRouter = Router();

appRouter.get("/", examplecontroller);
appRouter.post("/upload", uploadContoller);
appRouter.get("/show", showContoller);

export default appRouter;
