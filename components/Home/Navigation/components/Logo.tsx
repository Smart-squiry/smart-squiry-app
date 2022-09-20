import Image from 'next/image';

const Logo = () => (
  <Image
    src='/squiry-logo.svg'
    alt='Squiry logo'
    width='100px'
    height='50px'
    objectFit='contain'
  />
);

export default Logo;
