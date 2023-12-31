import MyImage from "@/components/ui/MyImage"
import ESTS from "@/img/ESTS.jpg"
import { FC, ReactNode } from "react"

interface LoginProps {
  children: ReactNode
}

const Login: FC<LoginProps> = ({ children }) => {
  return (
    <div className='flex justify-center items-center h-full w-full'>
      <div className='w-3/5 min-h-[50%] h-auto flex rounded-lg overflow-hidden shadow-3d'>
        <div className='relative w-1/2 min-h-full'>
          <MyImage src={ESTS} alt='ESTS-FrontPicture' />
        </div>
        <div className='w-1/2 min-h-full bg-white/70 px-8'>{children}</div>
      </div>
    </div>
  )
}

export default Login
