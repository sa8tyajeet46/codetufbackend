import { Router} from "express";
import examplecontroller from "../controllers/expampleController";
import uploadContoller from "../controllers/uploadController";
import showContoller from "../controllers/showController";

const appRouter=Router();

appRouter.get("/",examplecontroller);
appRouter.post("/upload",uploadContoller);
appRouter.get("/show",showContoller);



export default appRouter;