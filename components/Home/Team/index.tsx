import Image from 'next/image';
import { Title } from '../..';

const Team = () => (
  <section className='w-[75%] mx-auto mt-32 h-max'>
    <Title className='mb-20'>Meet The Team</Title>

    <div className='flex justify-between flex-wrap gap-y-10'>
      {[...Array(6)].map((item) => (
        <div className='border border-black w-max rounded-xl overflow-hidden'>
          <Image
            src='/about-image.png'
            alt='Team member name'
            width='300'
            height='300'
            className='rounded-t-xl'
          />

          <div className='bg-[#6F6F6F] rounded-b-xl mt-[-1rem] py-4 flex justify-between px-4 pt-7 text-white'>
            <p>CEO</p>
            <p className='font-semibold'>Badiru</p>
          </div>
        </div>
      ))}
    </div>    
  </section>
);

export default Team;
