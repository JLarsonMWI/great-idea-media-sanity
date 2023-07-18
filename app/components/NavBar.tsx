"use client";

import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function HomePage(posts: any) {
    console.log('nav: ', posts.sports)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const navigation = {
        categories: [
            {
                name: 'News',
                featured: [
                    {
                        name: posts.news[0].title,
                        href: `/${posts.news[0].slug}`,
                        imageSrc: posts.news[0].coverImage.fields.file.url,
                        imageAlt: posts.news[0].coverImage.fields.file.fileName,
                    },
                    {
                        name: posts.news[1].title,
                        href: `/${posts.news[1].slug}`,
                        imageSrc: posts.news[1].coverImage.fields.file.url,
                        imageAlt: posts.news[1].coverImage.fields.file.fileName,
                    },
                    {
                        name: posts.news[2].title,
                        href: `/${posts.news[2].slug}`,
                        imageSrc: posts.news[2].coverImage.fields.file.url,
                        imageAlt: posts.news[2].coverImage.fields.file.fileName,
                    },
                    {
                        name: posts.news[3].title,
                        href: `/${posts.news[3].slug}`,
                        imageSrc: posts.news[3].coverImage.fields.file.url,
                        imageAlt: posts.news[3].coverImage.fields.file.fileName,
                    },
                ],
            },
            {
                name: 'Sports',
                featured: [
                    {
                        name: posts.sports[0].title,
                        href: `/${posts.sports[0].slug}`,
                        imageSrc: posts.sports[0].coverImage.fields.file.url,
                        imageAlt: posts.sports[0].coverImage.fields.file.fileName,
                    },
                    {
                        name: posts.sports[1].title,
                        href: `/${posts.sports[1].slug}`,
                        imageSrc: posts.sports[1].coverImage.fields.file.url,
                        imageAlt: posts.sports[1].coverImage.fields.file.fileName,
                    },
                    {
                        name: posts.sports[2].title,
                        href: `/${posts.sports[2].slug}`,
                        imageSrc:  posts.sports[2].coverImage.fields.file.url,
                        imageAlt: posts.sports[2].coverImage.fields.file.fileName,
                    },
                ],
            },
        ],
        pages: [
            { name: 'Local', href: '#' },
            { name: 'Contact', href: '#' },
        ],
    };
    const footerNavigation = {
        shop: [
            { name: 'Bags', href: '#' },
            { name: 'Tees', href: '#' },
            { name: 'Objects', href: '#' },
            { name: 'Home Goods', href: '#' },
            { name: 'Accessories', href: '#' },
        ],
        company: [
            { name: 'Who we are', href: '#' },
            { name: 'Sustainability', href: '#' },
            { name: 'Press', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'Terms & Conditions', href: '#' },
            { name: 'Privacy', href: '#' },
        ],
        account: [
            { name: 'Manage Account', href: '#' },
            { name: 'Returns & Exchanges', href: '#' },
            { name: 'Redeem a Gift Card', href: '#' },
        ],
        connect: [
            { name: 'Contact Us', href: '#' },
            { name: 'Twitter', href: '#' },
            { name: 'Instagram', href: '#' },
            { name: 'Pinterest', href: '#' },
        ],
    };

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="flex px-4 -mb-px space-x-8">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="px-4 py-6 space-y-12">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                          {category.featured.map((item) => (
                            <div key={item.name} className="relative group">
                              <div className="overflow-hidden bg-gray-100 rounded-md aspect-h-1 aspect-w-1 group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                              </div>
                              <a href={item.href} className="block mt-6 text-sm font-medium text-gray-900">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                {item.name}
                              </a>
                            </div>
                          ))}
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="px-4 py-6 space-y-6 border-t border-gray-200">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="block p-2 -m-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Hero section */}
      <div className="relative bg-gray-900">
        {/* Navigation */}
        <header className="relative z-10">
          <nav aria-label="Top">
            {/* Account navigation */}
            {/* <div className="bg-gray-900">
              <div className="flex items-center justify-between h-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

                <div className="flex items-center justify-end w-full space-x-6">
                  <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                    Sign in
                  </a>
                  <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                    Create an account
                  </a>
                </div>
              </div>
            </div> */}

            {/* Main navigation */}
            <div className="bg-black bg-opacity-80 backdrop-blur-md backdrop-filter">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div>
                  <div className="flex items-center justify-between h-16">
                    {/* Logo (lg+) */}
                    <div className="hidden lg:flex lg:flex-1 lg:items-center">
                      <a href="#">
                        <span className="sr-only">Your Company</span>
                        <img
                          className="w-auto h-8"
                          src="https://tailwindui.com/img/logos/mark.svg?color=white"
                          alt=""
                        />
                      </a>
                    </div>

                    <div className="hidden h-full lg:flex">
                      {/* Flyout menus */}
                      <Popover.Group className="inset-x-0 bottom-0 px-4">
                        <div className="flex justify-center h-full space-x-8">
                          <Link
                              href='/'
                              className="flex items-center text-sm font-medium text-white"
                            >
                              Home
                            </Link>
                          {navigation.categories.map((category) => (
                            <Popover key={category.name} className="flex">
                              {({ open }) => (
                                <>
                                  <div className="relative flex">
                                    <Popover.Button className="relative z-10 flex items-center justify-center text-sm font-medium text-white transition-colors duration-200 ease-out">
                                      {category.name}
                                      <span
                                        className={classNames(
                                          open ? 'bg-white' : '',
                                          'absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out'
                                        )}
                                        aria-hidden="true"
                                      />
                                    </Popover.Button>
                                  </div>

                                  <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Popover.Panel className="absolute inset-x-0 text-sm text-gray-500 top-full">
                                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                      <div className="absolute inset-0 bg-white shadow top-1/2" aria-hidden="true" />

                                      <div className="relative bg-white">
                                        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                                          <div className="grid grid-cols-4 py-16 gap-x-8 gap-y-10">
                                            {category.featured.map((item) => (
                                              <div key={item.name} className="relative group">
                                                <div className="overflow-hidden bg-gray-100 rounded-md aspect-h-1 aspect-w-1 group-hover:opacity-75">
                                                  <img
                                                    src={"https:" + item.imageSrc}
                                                    alt={item.imageAlt}
                                                    className="object-cover object-center"
                                                  />
                                                </div>
                                                <Link href={item.href} className="block mt-4 font-medium text-gray-900">
                                                  <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                  {item.name}
                                                </Link>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    </Popover.Panel>
                                  </Transition>
                                </>
                              )}
                            </Popover>
                          ))}

                          {navigation.pages.map((page) => (
                            <Link
                              key={page.name}
                              href={page.href}
                              className="flex items-center text-sm font-medium text-white"
                            >
                              {page.name}
                            </Link>
                          ))}
                        </div>
                      </Popover.Group>
                    </div>

                    {/* Mobile menu and search (lg-) */}
                    <div className="flex items-center flex-1 lg:hidden">
                      <button type="button" className="p-2 -ml-2 text-white" onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Logo (lg-) */}
                    <a href="#" className="lg:hidden">
                      <span className="sr-only">Your Company</span>
                      <img src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" className="w-auto h-8" />
                    </a>

                    
                    <div className="flex items-center justify-end flex-1">
                      {/* Search */}
                      <a href="#" className="p-2 ml-4 text-white">
                        <span className="sr-only">Search</span>
                        <MagnifyingGlassIcon className="w-6 h-6" aria-hidden="true" />
                      </a>

                      
                      <div className="flex items-center lg:ml-4">
                        {/* Help */}
                        <span className="p-2 text-white">
                          <span className="sr-only">Help</span>
                          <QuestionMarkCircleIcon className="w-6 h-6" aria-hidden="true" />
                        </span>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  )
}
