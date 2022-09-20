import Image from 'next/image';
import { Title } from '../..';

const servicesTexts: { header: string; text: string }[] = [
  { header: 'Lorem', text: 'Quality resources shared by the community' },
  { header: '', text: '' },
  { header: '', text: '' },
];

const Services = () => (
  <section className='w-[75%] mx-auto mt-32 h-max'>
    <Title className='mb-20'>Our Services</Title>

    <div className='flex flex-wrap gap-y-10 justify-between'>
      {servicesTexts.map((text) => (
        <div className='relative w-max'>
          <div className='content-none absolute top-[10rem] left-0 z-10 mx-auto px-3'>
            {text.header ? (
              <Title className='!mb-3'>{text.header}</Title>
            ) : null}
            {text.text ? <p className='text-center'>{text.text}</p> : null}
          </div>
          <Image
            src='/service-image.png'
            alt='Service Image'
            width='300'
            height='400'
          />
        </div>
      ))}
    </div>
  </section>
);

export default Services;
