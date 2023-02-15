import { Router } from 'express';
import userRoutes from "./user-routes.js";
import commentRoutes from "./comment-routes.js";
const APIrouter = new Router();

APIrouter.use("/users", userRoutes);
APIrouter.use("/comments", commentRoutes);

export default APIrouter;