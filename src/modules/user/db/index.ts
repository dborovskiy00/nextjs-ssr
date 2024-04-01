import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class UserDbService {
  static getAllUsers() {
    return prisma.user.findMany();
  }
}

export default UserDbService;
