import pratoModel from '../models/pratoModel.js';

class pratoController {
  getAll = async (req, res) => {
    try {
      const pratos = await pratoModel.getAll();
      res.json(pratos);
    } catch (error) {
      console.error(error);
      res.status(500).json({erro: "Não foi possível obter pratos"});
    }
  };

  getById = async (req, res) => {
    const {id} = req.params

    try {
      const prato = await pratoModel.getById(parseInt(id));

      if (!prato) {
        return res.status(404).json({ erro: "Nota não encontrada!" })
      }
      res.json (prato);
    } catch (error) {
      console.log(error)
      res.status(500).json({ erro: "Não foi possível obter prato" })
    }
  }



}

export default new pratoController();