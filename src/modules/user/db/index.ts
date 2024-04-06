import prisma from "@/lib/prisma";

class UserDbService {
  static async getAllUsers() {
    return prisma?.user
      ?.findMany()
      ?.then(() => [{}])
      ?.catch(() => [null]);
  }
}

export default UserDbService;
