import SocialButton from "./SocialButton";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center space-x-4">
      <SocialButton  
        href='https://www.linkedin.com/in/danielblack2022/'
        src='/icons/logo-linkedin.svg'
        alt='LinkedIn Icon'
      />
      <SocialButton  
        href='https://www.instagram.com/danblack__/'
        src='/icons/logo-instagram.svg'
        alt='Instagram Icon'
      />
    </footer>
  );
}