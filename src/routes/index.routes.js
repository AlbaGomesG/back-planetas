import { Router } from "express";

import planetasRoutes from "./planetas.routes.js";

const routes = Router();

routes.get("/", (req, res) => {
    return res.status(200).send({ message: "Só os devs!"})
});

routes.use("/planetas", planetasRoutes);

export default routes;