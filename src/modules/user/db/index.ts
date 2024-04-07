import prisma from "@/lib/prisma";

class UserDbService {
  static async getAllUsers() {
    return prisma?.user
      ?.findMany()
      ?.then(() => [{}])
      ?.catch((error) => {
        console.log(error);

        return [null];
      });
  }
}

export default UserDbService;
