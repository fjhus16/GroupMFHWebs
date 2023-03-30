import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, GlobeEuropeAfricaIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Phone } from '@mui/icons-material'
import { TextField } from '@mui/material'
import { Cormorant_Garamond } from '@next/font/google'
import AboutMenu from './about-menu'


const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin-ext'],
  weight: '500'
})

const Header = () => {

  const { asPath } = useRouter()

  return (
    <Popover className="sticky top-0 mx-auto flex items-center border-b-2 px-12 py-2 h-24 z-10 bg-white">
      <Link className='font-bold text-3xl ism:text-5xl' href='/en/'><Image src={'/assets/header/logo.png'} priority loading='eager' alt={'MFH Group Logo'} width={200} height={120}></Image></Link>
      <div className='grow flex flex-row'>
        <div className='hidden ml-6  sm:flex font-bold items-center justify-end gap-2 md:gap-8'>
          <AboutMenu />
          {/*<Link className='hover:underline text-xl lg:text-2xl' href='/en/team'>Our team</Link>*/}
          <Link className='hover:bg-black hover:text-white text-2xl lg:text-3xl pt-1 pb-1 pl-2 pr-2 mt-3 duration-1000' href='/en/contact'><p className={cormorantGaramond.className}>Contact</p></Link>
          <Link className='hover:bg-black hover:text-white text-2xl lg:text-3xl pt-1 pb-1 pl-2 pr-2 mt-3 duration-1000' href='/en/contact'><p className={cormorantGaramond.className}>Our Services</p></Link>
        </div>
        <div className='hidden ml-[auto] sm:flex font-bold items-center justify-end gap-2 md:gap-8'>
          <TextField 
          id="standard-search" label="Search" type="search" className='mb-4' variant="standard"  />  
          <Link className='hover:underline flex flex-row' href={ asPath.replace('/en', '/tr') }><img
            alt="Türk bayrağı"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/TR.svg" className='h-10 w-10 mr-1'/></Link>
          <Link href={'/tr/contact'}><Phone /></Link>
        </div>
      </div>
      <div className='flex grow items-center justify-end sm:hidden'>
        <Link className='hover:underline flex flex-row' href={ asPath.replace('/en', '/tr') }><img
            alt="Türk bayrağı"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/TR.svg" className='h-10 w-10 mr-1'/></Link>
        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
          <span className='sr-only'>Open menu</span>
          <Bars3Icon className='h-6 w-6' aria-hidden="true" />
        </Popover.Button>
      </div>
      <Transition as={Fragment} enter="duration-200 ease-out" enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' leave='duration-100 ease-in' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-0'>
        <Popover.Panel className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
          <div className='rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-500'>
            <div className='flex items-center justify-between'>
              <Link className='font-bold ml-5 mt-3 text-5xl' href='/en/'><Image src={'/assets/header/logo.png'} priority loading='eager' alt={'MFH Group Logo'} width={200} height={120}></Image></Link>
              <Popover.Button className="mr-3 inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400">
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden="true" />
              </Popover.Button>
            </div>
            <nav className='grid border-none ml-3 font-bold'>
              <Link className='focus:outline-none focus:underline px-2 mt-4 text-3xl' href='/en/about'>About us</Link>
              {/*<Link className='focus:outline-none focus:underline px-2 mt-4 text-3xl' href='/en/team'>Our team</Link>*/}
              <Link className='focus:outline-none focus:underline px-2 mt-4 text-3xl mb-4' href='/en/contact'>Contact</Link>
          </nav>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Header
