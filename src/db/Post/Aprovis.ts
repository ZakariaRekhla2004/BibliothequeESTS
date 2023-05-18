import prisma from "@/utils/Prisma"
import { revalidatePath } from "next/cache"

export async function setApprovi(Aprovis: any) {
  try {
    await prisma.approvisionement.create({
      data: {
        ...Aprovis,
      },
    })
    revalidatePath("/approvisionnement")
    await prisma.$disconnect
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}
