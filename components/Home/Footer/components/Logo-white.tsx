import Image from 'next/image';

const LogoWhite = () => (
  <Image
    src='/squiry-logo-white.svg'
    alt='Squiry logo white'
    width='65px'
    height='65px'
    objectFit='contain'
  />
);

export default LogoWhite;
