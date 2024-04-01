import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserDbService {
  static getAllUsers() {
    return prisma.user.findMany().catch((err) => console.log(err));
  }
}

export default UserDbService;
