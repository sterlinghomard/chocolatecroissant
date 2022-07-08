import Image from 'next/image';

export default function SocialButton(props) {
  const { href, src, alt } = props;

  return (
    <div>
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
          className='opacity-30 hover:opacity-100 duration-200 ease-in-out'
        />
      </a>
    </div>
  );
}