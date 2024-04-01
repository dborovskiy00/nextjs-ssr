import { PrismaClient } from "@prisma/client";

// eslint-disable-next-line
type CustomAny = any;

const prisma = new PrismaClient();

class UserDbService {
  static getAllUsers() {
    return prisma.user
      .findMany()
      .catch((error: CustomAny) => console.log(error));
  }
}

export default UserDbService;
