import Image from 'next/image';

export const SocialButton = (props) => {
  const { href, src, alt } = props;

  return (
    <div className='h-12'>
      <a href={href} target='_blank' rel="noreferrer" className='relative'>
        <Image 
          src={src}
          alt={alt}
          layout='fill'
        />
      </a>
    </div>
  );
}