import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Cormorant_Garamond } from '@next/font/google'

const cormorantGaramond = Cormorant_Garamond({
    subsets: ['latin-ext'],
    weight: '500'
})

export default function AboutMenu() {
    return (
        <div className="text-right">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center hover:bg-black hover:text-white text-2xl lg:text-3xl pt-1 pb-1 pl-2 pr-2 mt-3 duration-1000">
                        <p className={cormorantGaramond.className}>Kurumsal</p>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-200"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-black text-white' : 'text-gray-900'
                                            } duration-1000 group flex w-full items-center px-2 py-2 text-sm`}
                                    >
                                        Hakkımızda
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-black text-white' : 'text-gray-900'
                                            } duration-1000 group flex w-full items-center px-2 py-2 text-sm`}
                                    >
                                        Değerlerimiz
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-black text-white' : 'text-gray-900'
                                            } duration-1000 group flex w-full items-center px-2 py-2 text-sm`}
                                    >
                                        Ekibimiz
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}