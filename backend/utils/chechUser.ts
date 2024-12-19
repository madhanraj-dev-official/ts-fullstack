import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function checkUser(user:string):boolean {
  try {
    const result = async () =>
      await prisma.staff.findUnique({ where: { username: user} });
    result().then((DATA) => true);
    return true
  } catch (error) {
    return false
  }
}