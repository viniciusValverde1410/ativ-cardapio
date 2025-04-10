import pratoModel from '../models/pratoModel.js'; 

class pratoController { // Definindo a classe pratoController

  // Método para obter todos os pratos
  getAll = async (req, res) => {
    try {
      const pratos = await pratoModel.getAll();
      res.json(pratos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Não foi possível obter pratos" });
    }
  };

  // Método para obter um prato específico pelo ID
  getById = async (req, res) => {
    const { id } = req.params

    try {
      const prato = await pratoModel.getById(parseInt(id));
      res.json(prato);

      if (!prato) {
        return res.status(404).json({ erro: "Prato não encontrado!" })
      }

    } catch (error) {
      console.log(error)
      res.status(500).json({ erro: "Não foi possível obter prato" })
    }
  }

  // Método para criar um novo prato
  create = async (req, res) => {
    const { name, description, price, category, ingredients, imageUrl, prepTime } = req.body;
    try {
      if (!name ||
        !description ||
        !price ||
        !category ||
        !ingredients ||
        !prepTime) {
        return res.status(400).json({ erro: "Preencha todo os campos obrigatórios!" });
      }


      if (category.toLowerCase() !== "entrada" && category.toLowerCase() !== "prato principal" && category.toLowerCase() !== "sobremesa") {
        return res.status(400).json({ erro: "A categoria deve ser Entrada, Prato principal ou sobremesa" });
      }

      res.status(200).json({ message: "Prato criado com sucesso!" });

    } catch (error) {
      console.log(error);
      res.status(500).json({ erro: "Não foi possível criar prato" });
    }
  };


  // Método para atualizar um prato existente pelo ID
  update = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, category, ingredients, imageUrl, prepTime } = req.body;

    try {
      const pratoAtualizado = await pratoModel.update(
        Number(id),
        name, description, price, category, ingredients, imageUrl, prepTime
      )

      if (!pratoAtualizado) {
        return res.status(404).json({ erro: "Prato não encontrado!" })
      }

      res.status(200).json({ message: "Prato atualizado com sucesso!" });

    } catch (error) {
      console.error(error)
      res.status(500).json({ erro: "Não foi possível atualizar prato" })
    }
  };

  // Método para deletar um prato existente pelo ID
  delete = async (req, res) => {
    const { id } = req.params

    try {
      const deletado = await pratoModel.delete(Number(id))

      if (!deletado) {
        return res.status(404).json({ erro: "Prato não encontrado!" })
      }

      res.status(200).json({ message: "Prato deletado com sucesso!" })

    } catch {
      console.error(error)
      res.status(500).json({ erro: "Não foi possível deletar prato" })
    }
  }

}

export default new pratoController();