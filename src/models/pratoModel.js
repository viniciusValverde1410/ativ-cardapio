import prisma from "../../prisma/client.js";
class pratoModel {
  getAll = async () => {
    return await prisma.prato.findMany();
}

getById = async (id) => {
  return await prisma.nota.findMany({
    where: { id }
  })
}

}

export default new pratoModel();