import { Router } from "express";
import APIrouter from "./api/index.js";
import homeRoutes from "./home-routes.js";
import dashboardRoutes from "./dashboard-routes.js";

const router = Router();

router.use("/api", APIrouter);
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);

router.use((req, res) => {
    res.status(404).end();
});

export default router;
