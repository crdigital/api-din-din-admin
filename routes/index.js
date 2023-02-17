import express from "express";
import CursosController from "../controllers/cursos.controller";

const routes = express.Router();

routes.get("/", CursosController.getAll);
routes.post("/cursos", CursosController.cadastrarCurso);

export default routes;
