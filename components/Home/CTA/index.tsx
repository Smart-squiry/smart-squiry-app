import React from 'react';
import { Button } from '../..';
import { MainTitle } from './components';

const CTA = () => {
  return (
    <section className='bg-primary rounded-lg h-[85vh] mt-2 flex flex-col items-center justify-center gap-y-4'>
      <p className='font-medium bg-white/60 px-12 py-1 rounded-full border border-[#E4E4E7]'>
        Welcome to SQUIRY!
      </p>
      <div className='w-[45%]'>
        <MainTitle />
        <div className='w-[70%] mx-auto mt-4 flex flex-col'>
          <p className='text-center text-[#52525B]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula
            massa in enim luctus. Rutrum arcu.
          </p>
          <Button className='mx-auto w-[80%] mt-9'>CONTACT US </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
