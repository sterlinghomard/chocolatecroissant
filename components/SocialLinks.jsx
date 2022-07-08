import Image from "next/image";

export const SocialLinks = () => (
  <footer className="relative h-12">
    <a href="https://www.linkedin.com/in/danielblack2022/" target='_blank' rel="noreferrer">
      <Image 
        src='/icons/logo-linkedin.svg'
        alt='LinkedIn Icon'
        layout="fill"
      />
    </a>
    <a href="https://github.com/daniel-black" target='_blank' rel="noreferrer">
      <Image 
        src='/icons/logo-github.svg'
        alt='Github Icon'
        layout="fill"
      />
    </a>
    <a href="https://www.instagram.com/danblack__/" target='_blank' rel="noreferrer">
      <Image 
        src='/icons/logo-instagram.svg'
        alt='Instagram Icon'
        layout="fill"
      />
    </a>
  </footer>
);