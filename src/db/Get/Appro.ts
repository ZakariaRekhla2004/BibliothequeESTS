import prisma from "@/utils/Prisma"

export async function getApprosShort() {
  try {
    const appros = await prisma.approvisionement.findMany({
      orderBy: {
        DATE: "desc",
      },
    })
    await prisma.$disconnect
    return appros
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}
export async function getApproEx(id: number) {
  try {
    const appros = await prisma.contient.findMany({
      include: {
       livre :{
        select :{
          exemplaire : true,
          TITRE : true ,
          AUTHEUR : true ,
          categorie : true,
          PRIX :true ,
          DATE_EDITION : true ,
        }
       }
      },
      where: {
        ID_APRO: id,
      },
    })
    await prisma.$disconnect
    return appros
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}

export async function getAppro(id: number) {
  try {
    const appros = await prisma.approvisionement.findFirst({
      include: {
        contient: {
          include: {
            livre: {
              include: {
                categorie: {
                  select: {
                    LIBELLE: true,
                  },
                },
              },
            },
          },
        },
        fournisseur: true,
        utilisateur: true,
      },
      where: {
        ID_APRO: id,
      },
    })
    await prisma.$disconnect
    return appros
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}
export async function getApproID(id: number) {
  try {
    const appros = await prisma.approvisionement.findUnique({
      where: {
        ID_APRO: id,
      },
    })
    await prisma.$disconnect
    return appros
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}

export async function getAppros() {
  try {
    const appros = await prisma.approvisionement.findMany({
      include: {
        contient: {
          include: {
            livre: {
              include: {
                categorie: {
                  select: {
                    LIBELLE: true,
                  },
                },
              },
            },
          },
        },
        fournisseur: true,
        utilisateur: true,
      },
    })
    await prisma.$disconnect
    return appros
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}
