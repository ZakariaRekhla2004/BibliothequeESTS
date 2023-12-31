// POUR LES ETUDIANTS

import prisma from "@/utils/Prisma";
import { revalidatePath } from "next/cache";

export async function PutElivre(Elivre: any, id: number) {
  try {
    await prisma.emprunt_livre_etudiant.update({
      where: {
        IDLE: id,
      },
      data: {
        ...Elivre,
      },
    });
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}

export async function ConfirmeElivre(date: Date, id: number) {
  try {
    await prisma.emprunt_livre_etudiant.update({
      where: {
        IDLE: id,
      },
      data: {
        DATE_R: date,
      },
    });
    await prisma.$disconnect;
  } catch (error) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + error);
  }
}
