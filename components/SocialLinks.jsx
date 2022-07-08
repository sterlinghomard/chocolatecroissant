import Image from "next/image";
import { SocialButton } from "./SocialButton";

export const SocialLinks = () => (
  <footer className="relative h-12 flex items-center justify-center space-x-4">
    {/* <a href="https://www.linkedin.com/in/danielblack2022/" target='_blank' rel="noreferrer" className="block">
      <Image 
        src='/icons/logo-linkedin.svg'
        alt='LinkedIn Icon'
        layout="fill"
      />
    </a>
    <a href="https://github.com/daniel-black" target='_blank' rel="noreferrer" className="block">
      <Image 
        src='/icons/logo-github.svg'
        alt='Github Icon'
        layout="fill"
      />
    </a>
    <a href="https://www.instagram.com/danblack__/" target='_blank' rel="noreferrer" className="block">
      <Image 
        src='/icons/logo-instagram.svg'
        alt='Instagram Icon'
        layout="fill"
      />
    </a> */}
    <SocialButton  
      href='https://www.linkedin.com/in/danielblack2022/'
      src='/icons/logo-linkedin.svg'
      alt='LinkedIn Icon'
    />
  </footer>
);