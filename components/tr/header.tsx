import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Phone } from '@mui/icons-material'
import { styled, TextField } from '@mui/material'
import { Cormorant_Garamond } from '@next/font/google'
import AboutMenu from './about-menu'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin-ext'],
  weight: '500'
})

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black',
  },
});

const Header = () => {

  const { asPath } = useRouter()

  return (
    <Popover className='z-50 bg-gradient-to-b from-slate-400 via-slate-200 to-slate-100 sticky top-0 flex items-center px-4 md:px-12 py-2 h-24 z-10'>
      <Link href='/tr/'><Image src={'/assets/header/logo.png'} priority loading='eager' alt={'MFH Group Logo'} width={200} height={120}></Image></Link>
      <div className='grow flex flex-row'>
        <div className='hidden ml-6 lg:flex font-bold items-center justify-start gap-2 lg:gap-8'>
          <AboutMenu />
          <Link className='hover:bg-black hover:text-white text-2xl lg:text-3xl pt-1 pb-1 pl-2 pr-2 mt-3 duration-1000' href=''><p className={cormorantGaramond.className}>Hizmetlerimiz</p></Link>
          <Link className='hover:bg-black hover:text-white text-2xl lg:text-3xl pt-1 pb-1 pl-2 pr-2 mt-3 duration-1000' href='/tr/contact'><p className={cormorantGaramond.className}>İletişim</p></Link>
        </div>
        <div className='hidden ml-[auto] lg:flex font-bold items-center justify-end gap-2 md:gap-8'>
          <CssTextField id="standard-search" label="Arama" type="search" className='mb-4' variant="standard" />
          <Link className='flex flex-row' href={asPath.replace('/tr', '/en')}><img
            alt="Flag of the United Kingdom"
            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" className='h-10 w-10 mr-1' /></Link>
          <Link href={'/tr/contact'} aria-label='İletişim'><Phone /></Link>
        </div>
      </div>
      <div className='flex grow items-center justify-end lg:hidden'>
        <Link className='px-2 mt-4 mb-4 text-3xl' href={asPath.replace('/tr', '/en')}><img
          alt="Flag of the United Kingdom"
          src="https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" className='h-10 w-10 mr-1' /></Link>
        <Popover.Button className="inline-flex items-center justify-center p-2 text-black hover:bg-black hover:text-white">
          <span className='sr-only'>Menüyü aç</span>
          <Bars3Icon className='h-6 w-6' aria-hidden="true" />
        </Popover.Button>
      </div>
      <Transition as={Fragment} enter="duration-200 ease-out" enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' leave='duration-100 ease-in' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-0'>
        <Popover.Panel className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden'>
          <div className='bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-500'>
            <div className='flex items-center justify-between'>
              <Link className='font-bold ml-5 mt-3 text-5xl' href='/tr/'><Image src={'/assets/header/logo.png'} priority loading='eager' alt={'MFH Group Logo'} width={200} height={120}></Image></Link>
              <Popover.Button className="mr-3 inline-flex items-center justify-center p-2 text-black hover:bg-black hover:text-white">
                <span className='sr-only'>Menüyü kapat</span>
                <XMarkIcon className='h-6 w-6' aria-hidden="true" />
              </Popover.Button>
            </div>
            <nav className='grid border-none ml-3 font-bold'>
              <Link className='focus:outline-none focus:underline px-2 mt-4 text-3xl' href='/tr/about'><p className={cormorantGaramond.className}>Hakkımızda</p></Link>
              {/*<Link className='focus:outline-none focus:underline px-2 mt-4 text-3xl' href='/tr/team'>Kadromuz</Link>*/}
              <Link className='focus:outline-none focus:underline px-2 mt-4 text-3xl' href=''><p className={cormorantGaramond.className}>Hizmetlerimiz</p></Link>
              <Link className='focus:outline-none focus:underline px-2 mt-4 text-3xl mb-4' href='/tr/contact'><p className={cormorantGaramond.className}>İletişim</p></Link>
            </nav>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Header