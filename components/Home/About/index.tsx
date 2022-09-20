import Image from 'next/image';
import { Title } from '../..';
import { AboutParagraph } from './components';

const About = () => (
  <section className='w-[70%] mx-auto mt-20 flex justify-between items-center h-max'>
    <div>
      <Image
        src='/about-image.png'
        alt='About Image'
        width='320px'
        height='320px'
      />
    </div>
    <div className='w-[50%]'>
      <Title className='!text-left'>About Us</Title>
      <div className='flex flex-col space-y-4 mt-4'>
        {[...Array(3)].map((index) => (
          <AboutParagraph key={index} />
        ))}
      </div>
    </div>
  </section>
);

export default About;
