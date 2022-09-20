import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Home/Footer';
import {
  About,
  CTA,
  Navigation,
  EmptySpace,
  Services,
  Team,
  ClientReviews,
  Client,
} from './../components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SMART SQUIRY</title>
        <link rel='shortcut icon' href='/squiry-logo.svg' type='image/x-icon' />
      </Head>
      <div className='mt-3'>
        <Navigation />
        <CTA />
        <EmptySpace />
        <About />
        <Services />
        <Team />
        <ClientReviews />
        <Client />
        <EmptySpace className='h-48' />
        <Footer />
      </div>
    </>
  );
};

export default Home;
