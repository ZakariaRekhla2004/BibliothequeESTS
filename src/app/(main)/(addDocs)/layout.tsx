import { Card } from "@/ui/Card"
import { FC, ReactNode } from "react"

interface addDocs {
  children: ReactNode
}

const layout: FC<addDocs> = ({ children }) => {
  return (
    <div className='w-full h-full'>
      <Card type={'full'}>{children}</Card>
    </div>
  )
}

export default layout
