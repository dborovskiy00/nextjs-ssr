import { PrismaClient } from "@prisma/client";

class UserDbService {
  static getPrisma() {
    let client;

    try {
      client = new PrismaClient();
    } catch {
      client = null;
    }

    return client;
  }

  static async getAllUsers() {
    const prisma = this.getPrisma();

    return prisma?.user
      ?.findMany()
      ?.then(() => [{}])
      ?.catch(() => [null]);
  }
}

export default UserDbService;
