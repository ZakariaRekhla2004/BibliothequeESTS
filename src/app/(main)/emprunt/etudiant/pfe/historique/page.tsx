import { Epfe, EpfeEncours } from "@/db/Get/emprunt/etudiant/Epfe"
import { Suspense } from "react"
import { Table } from "./table"

export const dynamic = "force-dynamic"

const Page = async () => {
  const data =  await Epfe()
  return (
    <div className='w-full h-full'>
      <Suspense fallback={<div>Loading...</div>}>
        <Table data={data} />
      </Suspense>
    </div>
  )
}

export default Page
