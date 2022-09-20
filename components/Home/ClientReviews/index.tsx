import Image from 'next/image';
import { Title } from '../..';

const ClientReviews = () => (
  <section className='w-[75%] mx-auto mt-32 h-max'>
    <Title className='mb-20'>What Our Clients Are Saying</Title>

    <div className='flex justify-between flex-wrap gap-y-10'>
      {[...Array(3)].map((item) => (
        <div className=' w-max rounded-xl overflow-hidden relative'>
          <Image
            src='/about-image.png'
            alt='Team member name'
            width='300'
            height='400'
            className='rounded-t-xl'
          />

          <div className='rounded-b-xl py-4 flex flex-col items-center px-4 pt-12 pb-8 absolute top-0 left-0 w-full h-full text-black font-medium'>
            <Image
              src='/circle.svg'
              alt='Team member name'
              width='100'
              height='100'
              className='rounded-t-xl'
            />
            <h3 className='font-Inter text-xl w-[70%] mx-auto text-center mt-12 font-medium'>
              “what our clients are saying”
            </h3>

            <div className='text-center mt-auto'>
              <h5>John Doe</h5>
              <p className='font-normal'>CEO Oracle Ltd</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ClientReviews;
