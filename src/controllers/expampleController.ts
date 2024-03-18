import {Request,Response} from "express";

const examplecontroller=(req:Request, res:Response) => {
    res.send('Hello Worldndnindi!');
  }

export default examplecontroller;