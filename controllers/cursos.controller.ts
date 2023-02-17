import { Request, Response } from "express";

import listaDeCursos from "../models/cursos.json";
import fs from "fs";

// inserido na aula
interface Curso {
  titulo: string;
  professor: string;
  descricao: string;
}

const CursoController = {
  getAll(req: Request, res: Response) {
    try {
      let jsonData = fs.readFileSync("./models/cursos.json", "utf8");
      res.status(200).json(jsonData);     
    } catch (error) {
      res.status(400).json({message:`Erro na requisição: ${error}`});
    }
  },
  cadastrarCurso(req: Request, res: Response) {
    // inserido na aula
    listaDeCursos as Curso[];

    const { titulo, descricao, professor } = req.body;

    if (!titulo || !descricao || !professor) {
      return res
        .status(400)
        .json({ error: "Você precisa passar os atributos corretamente" });
    }


    listaDeCursos.push({
      titulo,
      descricao,
      professor,
    });

    fs.writeFileSync("./models/cursos.json", JSON.stringify(listaDeCursos));

    res.status(201).json({ message: "Cadastro efetuado com sucesso!" });
  },
};

export default CursoController;
