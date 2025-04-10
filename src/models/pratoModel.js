import prisma from "../../prisma/client.js";
class pratoModel {
  getAll = async () => {
    return await prisma.dishe.findMany();
  }

  getById = async (id) => {
    return await prisma.dishe.findMany({
      where: { id }
    })
  }

  create = async (name, description, price, category, ingredients, imageUrl, prepTime) => {
    return await prisma.dishe.create({
      data: { name, description, price, category, ingredients, imageUrl, prepTime },
    });
  };

  update = async (id, name, description, price, category, ingredients, imageUrl, prepTime) => {
    try {
      const prato = await prisma.dishe.update({
        where: { id },
        data: { name, category, description, price, ingredients, imageUrl, prepTime },
      });

      return prato;
    } catch (error) {
      console.error("Erro ao atualizar prato:", error);
      throw error;
    }
  };


  delete = async (id) => {

    try {
      const pratoDeletado = await prisma.dishe.delete({
        where: { id },
      });

      return pratoDeletado
    } catch (error) {
      console.log("Erro ao deletar prato!", error);
      throw error;
    }
  };

}

export default new pratoModel();