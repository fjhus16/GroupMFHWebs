import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Cormorant_Garamond } from '@next/font/google'
import Link from 'next/link'

const cormorantGaramond = Cormorant_Garamond({
    subsets: ['latin-ext'],
    weight: '500'
})

export default function AboutMenu() {
    return (
        <div className="text-left">
            <Menu as="div" className="relative z-[90] inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center hover:bg-black hover:text-white text-xl lg:text-2xl pt-1 pb-1 pl-2 pr-2 mt-3 duration-1000">
                        <p className={cormorantGaramond.className}>Kurumsal</p>
                    </Menu.Button>
                </div>
                <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-200" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute z-[90] left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link className={`${active ? 'bg-black text-white' : 'text-gray-900'} duration-1000 group flex w-full items-center px-2 py-2 text-sm`} href='/tr/about'><p className={cormorantGaramond.className}>Hakkımızda</p></Link>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link className={`${active ? 'bg-black text-white' : 'text-gray-900'} duration-1000 group flex w-full items-center px-2 py-2 text-sm`} href='/tr/ourvalues'><p className={cormorantGaramond.className}>Değerlerimiz</p></Link>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link className={`${active ? 'bg-black text-white' : 'text-gray-900'} duration-1000 group flex w-full items-center px-2 py-2 text-sm`} href='/tr/team'><p className={cormorantGaramond.className}>Ekibimiz</p></Link>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}