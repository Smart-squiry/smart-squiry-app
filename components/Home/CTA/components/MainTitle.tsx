const MainTitle = () => (
  <h1 className='font-extrabold text-5xl text-center leading-tight'>
    Quality{' '}
    <span className='relative'>
      resources{' '}
      <span className='content-none absolute left-0 bottom-0 z-10 w-full h-[12px]'>
        <svg
          width='259'
          height='16'
          viewBox='0 0 259 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M2.14689 13.6626C46.6856 6.89546 88.3011 4.1196 133.218 3.2947C166.412 2.68511 203.253 1.30773 236.126 5.12506C242.71 5.49867 248.725 6.75382 256.089 8.20334'
            stroke='url(#paint0_linear_3665_1645)'
            stroke-width='4'
            stroke-linecap='round'
          />
          <defs>
            <linearGradient
              id='paint0_linear_3665_1645'
              x1='22.5697'
              y1='5.28615'
              x2='54.2445'
              y2='82.5027'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#D9B227' />
              <stop offset='1' stop-color='#FD4141' />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </span>{' '}
    shared by the community
  </h1>
);

export default MainTitle;