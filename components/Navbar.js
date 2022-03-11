import Link from './Link'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline'
import ServicesMenu from './ServicesMenu'
import Logo from '@/data/logo.svg'
import ContactUs from './ContactUs'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <Popover className="relative bg-white">
      <div className="pointer-events-none absolute inset-0 z-30 shadow" aria-hidden="true" />
      <div className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8">
          <Link href="/">
            <div className="mr-3 shrink">
              <Logo />
            </div>
          </Link>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              {/* services dropdown */}
              <ServicesMenu />
              {/* samples */}
              <Link
                href="/samples"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Samples
              </Link>
              {/* contact us dropdown */}
              <ContactUs />
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              <Link
                href="/freetrial"
                className="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Free Trial
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
        >
          {/* Mobile Navigation */}
          <MobileNav />
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Navbar
