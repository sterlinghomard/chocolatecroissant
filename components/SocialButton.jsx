import Image from 'next/image';

export default function SocialButton(props) {
  const { href, src, alt } = props;

  return (
    <div className='hover:animate-pulse'>
      <a 
        href={href} 
        target='_blank' 
        rel="noreferrer" 
        className='relative'>
        <Image 
          src={src}
          alt={alt}
          height='30'
          width='30'
        />
      </a>
    </div>
  );
}