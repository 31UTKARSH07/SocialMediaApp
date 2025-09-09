import express from "express";
import {signUp,signIn} from "../controllers/auth.controllers.js";
const Router = express.Router();
Router.post('/signup', signUp);
Router.post('/signin', signIn);
export default Router;