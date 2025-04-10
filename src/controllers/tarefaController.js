import tarefaModel from "../models/tarefaModel.js";
class TarefaController {
  getAll = async (req, res) => {
    try {
      const tarefas = await tarefaModel.getAll();
      res.json(tarefas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Não foi possível obter as tarefas" });
    }
  };

  create = async (req, res) => {
    const { descricao } = req.body;
    try {
      if (!descricao) {
        return res.status(400).json({ erro: "Descrição é obrigatória" });
      }

      const novaTarefa = await tarefaModel.create(descricao);
      res.status(201).json(novaTarefa);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Não foi possível criar a tarefa" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { concluida, descricao } = req.body;

    try {
      const tarefaAtualizada = await tarefaModel.update(
        Number(id),
        concluida,
        descricao
      );

      if (!tarefaAtualizada) {
        return res.status(404).json({ erro: "Tarefa não encontrada!" })
      }

      res.json(tarefaAtualizada)
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Não foi possível atualizar a tarefa" });
    }
  };


  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await tarefaModel.delete(Number(id));


      if (!sucesso) {
        return res.status(404).json({ error: "Tarefa não encontrada" });
      }

      res.status(200).send("Tarefa deletado com sucesso!");

    } catch (error) {
      console.error(error)
      res.status(500).json({ error: "Não foi possível deletar a tarefa" })
    }
  };
}

export default new TarefaController();
