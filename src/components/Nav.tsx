/* eslint-disable react/jsx-key */
import { Nav } from "@/ui/nav"
import { NestedNav } from "@/ui/nestedNav"
import { CgFileDocument } from "react-icons/cg"
import {
  FaChalkboardTeacher,
  FaFileContract,
  FaUserGraduate,
  FaUserTie,
} from "react-icons/fa"
import { MdCategory, MdOutlineWork, MdSpaceDashboard } from "react-icons/md"
import { TbBooks, TbReportMoney } from "react-icons/tb"
import { VscRepo } from "react-icons/vsc"
import { GiBlackBook } from "react-icons/gi"
import { cookies } from "next/headers"

export const ZNav = () => {
  const root = cookies().get("login")?.value === "root"
  return (
    <nav className='h-full overflow-auto scrollbar-none'>
      <ul>
        <Nav href='/dashboard' title='Accueil' icon={<MdSpaceDashboard />} />
        <NestedNav
          principale={{
            title: "Documents",
            href: "",
            icon: <CgFileDocument />,
          }}
          href={["/livre", "/pfe", "/categorie", "/exemplaire"]}
          title={["Livre", "PFE", "Categorie", "Exemplaire"]}
          icon={[<TbBooks />, <VscRepo />, <MdCategory />, <GiBlackBook />]}
        />
        <NestedNav
          principale={{
            title: "Emprunt",
            href: "",
            icon: <FaChalkboardTeacher />,
          }}
          href={[
            "/emprunt/etudiant/livre/encours",
            "/emprunt/prof/livre/encours",
          ]}
          title={["Etudiants", "Professeurs"]}
          icon={[<FaUserGraduate />, <FaUserTie />]}
        />
        <Nav href='/fournisseur' title='Fournisseur' icon={<TbReportMoney />} />
        <Nav
          href='/approvisionnement'
          title='Approvisionnement'
          icon={<FaFileContract />}
        />
        <Nav href='/etudiant' title='Etudiant' icon={<FaUserGraduate />} />
        <Nav href='/prof' title='Professeur' icon={<FaUserTie />} />
        {root ? (
          <Nav
            href='/utilisateur'
            title='Utilisateur'
            icon={<MdOutlineWork />}
          />
        ) : null}
      </ul>
    </nav>
  )
}
