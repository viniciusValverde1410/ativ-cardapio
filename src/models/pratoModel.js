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

}

export default new pratoModel();