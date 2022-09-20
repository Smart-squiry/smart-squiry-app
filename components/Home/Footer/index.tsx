import Image from 'next/image';
import Link from 'next/link';
import LogoWhite from './components/Logo-white';

const footerNav: {
  title: string;
  navs: { name?: string; more?: boolean }[];
}[] = [
  {
    title: 'Product',
    navs: [
      {
        name: 'Overview',
      },
      {
        name: 'Features',
      },
      {
        name: 'Solutions',
        more: true,
      },
      {
        name: 'Pricing',
      },
    ],
  },
  {
    title: 'Company',
    navs: [
      {
        name: 'About us',
      },
      {
        name: 'Careers',
      },
      {
        name: 'News',
      },
      {
        name: 'Contact',
      },
    ],
  },
  {
    title: 'Resources',
    navs: [
      {
        name: 'Blog',
      },
      {
        name: 'Newsletter',
      },
      {
        name: 'Help centre',
      },
      {
        name: 'Support',
      },
    ],
  },
  {
    title: 'Social',
    navs: [
      {
        name: 'Twitter',
      },
      {
        name: 'LinkedIn',
      },
      {
        name: 'Facebook',
      }
    ],
  },
];

const Footer = () => (
  <footer className='font-Inter'>
    <div className='bg-[#6F6F6F] px-32 py-10 flex xl:items-center lg:flex-col xl:flex-row space-y-10'>
      <div className='text-white w-[50%] mr-48'>
        <LogoWhite />
        <p>
          Design amazing digital experiences that create more happy in the
          world.
        </p>
      </div>

      <div className='flex justify-between w-full'>
        {footerNav.map((nav) => (
          <div>
            <h5 className='text-[#98A2B3] font-bold'>{nav.title}</h5>

            <ul className='mt-3 font-medium text-[#EAECF0] grid gap-y-2 list-none'>
              {nav?.navs.map((each) => (
                <li>
                  <Link href='/'>{each.name}</Link>
                  {each.more ? (
                    <span className='bg-white text-[#344054] text-xs px-2 py-1 rounded-full ml-2'>
                      New
                    </span>
                  ) : (
                    ''
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className='bg-[#101828] px-32 py-8 text-[#98A2B3] flex justify-between'>
      <p>© 2022 Squiry inc.. All rights reserved.</p>

      <div className='flex gap-x-6 items-center'>
        <Image
          src='/twitter.svg'
          alt='Twitter'
          width='25px'
          height='25px'
          objectFit='contain'
        />
        <Image
          src='/linkedin.svg'
          alt='Linkedin'
          width='25px'
          height='25px'
          objectFit='contain'
        />
        <Image
          src='/facebook.svg'
          alt='Facebook'
          width='25px'
          height='25px'
          objectFit='contain'
        />
      </div>
    </div>
  </footer>
);

export default Footer;
