import prisma from "@/lib/prisma";

class UserDbService {
  static async getAllUsers() {
    return prisma?.user
      ?.findMany()
      ?.then((response) => response)
      ?.catch(() => null);
  }
}

export default UserDbService;
