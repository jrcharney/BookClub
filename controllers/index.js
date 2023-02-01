const router = require("express").Router();
import apiRoutes from "./api";
import homeRoutes from "./home-routes.js";
import dashboardRoutes from "./dashboard-routes.js";

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);

router.use((req, res) => {
  res.status(404).end();
});

export default router;
