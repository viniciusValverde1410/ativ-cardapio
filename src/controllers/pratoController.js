import pratoModel from '../models/pratoModel.js';

class pratoController {
  getAll = async (req, res) => {
    try {
      const pratos = await pratoModel.getAll();
      res.json(pratos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Não foi possível obter pratos" });
    }
  };

  getById = async (req, res) => {
    const { id } = req.params

    try {
      const prato = await pratoModel.getById(parseInt(id));

      if (!prato) {
        return res.status(404).json({ erro: "Nota não encontrada!" })
      }
      res.json(prato);
    } catch (error) {
      console.log(error)
      res.status(500).json({ erro: "Não foi possível obter prato" })
    }
  }

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

}

export default new pratoController();