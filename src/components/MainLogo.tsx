import MLink from "@/ui/MLink";
import { StaticImageData } from "next/image";
import MyImage from "./ui/MyImage";

interface HeaderProps {
  Logo: StaticImageData;
}

export function MainLogo({Logo} : HeaderProps) {
  return (
    <header className='flex justify-center items-center h-24 max-h-[20%]'>
      <MLink href='/dashboard' type={"logo"} font={"none"}>
        <div className='relative w-full h-full'>
          <MyImage src={Logo} alt='LibEST-S' />
        </div>
      </MLink>
    </header>
  )
}
