import prisma from "../../prisma/client.js"; // Importando o cliente Prisma
class pratoModel { // Definindo a classe pratoModel
  // Método para obter todos os pratos
  getAll = async () => { 
    return await prisma.dishe.findMany();
  }

  // Método para obter um prato específico pelo ID
  getById = async (id) => {
    return await prisma.dishe.findMany({
      where: { id }
    })
  }

  // Método para criar um novo prato
  create = async (name, description, price, category, ingredients, imageUrl, prepTime) => {
    return await prisma.dishe.create({
      data: { name, description, price, category, ingredients, imageUrl, prepTime },
    });
  };

  // Método para atualizar um prato existente pelo ID
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

  // Método para deletar um prato existente pelo ID
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