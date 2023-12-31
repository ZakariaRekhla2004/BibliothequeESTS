import prisma from "@/utils/Prisma";
import { revalidatePath } from "next/cache"
export async function removeUser(id: number) {
  try {
    await prisma.utilisateur.delete({
      where: {
        ID_U: id,
      },
    });
    revalidatePath("utilisateur");
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
