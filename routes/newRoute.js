import { Router } from "express";
import newController from "../controllers/newController.js";

const newRoute = Router();

newRoute.get('/', newController.newViewGet);
newRoute.post('/', newController.newUserDataPost);

export default newRoute;