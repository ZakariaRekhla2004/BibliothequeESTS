import prisma from "@/utils/Prisma";
import { revalidatePath } from "next/cache"
export async function removeEtudiant(id: number ) {
  try {
    await prisma.etudiant.delete({
      where: {
        N_APOGEE :id,
      },
    });
    revalidatePath("/etudiant");
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}