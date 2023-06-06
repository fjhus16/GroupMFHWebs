import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Phone } from '@mui/icons-material';
import { styled, TextField } from '@mui/material';
import { Cormorant_Garamond } from '@next/font/google';
import AboutMenu from './about-menu';
import PartnersMenu from './partners';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin-ext'],
  weight: '500'
});

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black',
  },
});

const Header = () => {
  const router = useRouter();
  const { asPath } = router;

  const handleScrollToServices = () => {
    if (asPath !== '/en') {
      router.push('/en');
    } else {
      window.scrollTo({
        top: 450,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Popover className='z-50 bg-gradient-to-b from-slate-400 via-slate-200 to-slate-100 sticky top-0 flex items-center px-4 md:px-8 py-2 h-24 z-10'>
      <Link href='/en/'>
        <Image src={'/assets/header/logo.png'} priority loading='eager' alt={'MFH Group Logo'} width={200} height={120} /></Link>
      <div className='grow flex flex-row'>
        <div className='hidden ml-4 mr-2 lg:flex font-bold items-center justify-start gap-2 lg:gap-6'>
          <AboutMenu />
          <button
            className='hover:bg-black whitespace-nowrap hover:text-white text-xl lg:text-2xl pt-1 pb-1 pl-2 pr-2 mt-3 duration-1000'
            onClick={handleScrollToServices}
          >
            <p className={cormorantGaramond.className}>Our Services</p>
          </button>
          <PartnersMenu />
          <Link className='hover:bg-black hover:text-white text-xl lg:text-2xl pt-1 pb-1 pl-2 pr-2 mt-3 duration-1000' href='/en/blog'><p className={cormorantGaramond.className}>Headlines</p></Link>
          <Link className='hover:bg-black hover:text-white text-xl lg:text-2xl pt-1 pb-1 pl-2 pr-2 mt-3 duration-1000' href='/en/contact'><p className={cormorantGaramond.className}>Contact</p></Link>
        </div>
        <div className='hidden ml-[auto] lg:flex font-bold items-center justify-end gap-2 md:gap-8'>
          <CssTextField id="standard-search" label="Search" type="search" className='mb-4' variant="standard" />
          <Link className='flex flex-row' href={asPath.replace('/en', '/tr')}><img alt="Türk bayrağı" src="https://purecatamphetamine.github.io/country-flag-icons/3x2/TR.svg" className='h-10 w-10 mr-1' /></Link>
          <Link href={'/en/contact'} aria-label='Contact'><Phone /></Link>
        </div>
      </div>
      <div className='flex grow items-center justify-end lg:hidden'>
        <Link className='flex flex-row' href={asPath.replace('/en', '/tr')}><img alt="Türk bayrağı" src="https://purecatamphetamine.github.io/country-flag-icons/3x2/TR.svg" className='h-10 w-10 mr-1' /></Link>
        <Popover.Button className="inline-flex items-center justify-center p-2 text-black hover:bg-black hover:text-white">
          <span className='sr-only'>Open menu</span>
          <Bars3Icon className='h-6 w-6' aria-hidden="true" />
        </Popover.Button>
      </div>
      <Transition as={Fragment} enter="duration-200 ease-out" enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' leave='duration-100 ease-in' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-0'>
        <Popover.Panel className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden'>
          <div className='bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-500'>
            <div className='flex items-center justify-between'>
              <Link className='font-bold ml-5 mt-3 text-5xl' href='/en/'>
                <Image
                  src={'/assets/header/logo.png'}
                  priority
                  loading='eager'
                  alt={'MFH Group Logo'}
                  width={200}
                  height={120}
                />
              </Link>
              <Popover.Button className="mr-3 inline-flex items-center justify-center p-2 text-black hover:bg-black hover:text-white">
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden="true" />
              </Popover.Button>
            </div>
            <nav className='grid border-none ml-3 font-bold'>
              <AboutMenu />
              <button
                className='focus:outline-none focus:underline px-2 mt-2 text-xl lg:text-2xl mr-auto'
                onClick={handleScrollToServices}
              >
                <p className={cormorantGaramond.className}>Our Services</p>
              </button>
              <PartnersMenu />
              <Link className='focus:outline-none focus:underline px-2 mt-2 text-xl lg:text-2xl mb-2' href='/en/blog'>
                <p className={cormorantGaramond.className}>Headlines</p>
              </Link>
              <Link className='focus:outline-none focus:underline px-2 mt-2 text-xl lg:text-2xl mb-2' href='/en/contact'>
                <p className={cormorantGaramond.className}>Contact</p>
              </Link>
            </nav>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
