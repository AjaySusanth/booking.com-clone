"use client";
import Link from "next/link";
import { Fragment,useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  HomeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel, Transition } from "@headlessui/react";

import { cn } from "@/lib/utils";

const products = [
    {
      name: "Book a Stay",
      description: "Get a better understanding of your traffic",
      href: "#",
      icon: HomeIcon,
    },
    {
      name: "Book a Flight",
      description: "Speak directly to your customers",
      href: "#",
      icon: PaperAirplaneIcon,
    },
    {
      name: "Contact our Support Team",
      description: "Your customers’ data will be safe and secure",
      href: "#",
      icon: ChatBubbleLeftIcon,
    },
  ];

  
const callsToAction = [
    { name: "See Demo Booking", href: "#", icon: PlayCircleIcon },
    { name: "Contact Support", href: "#", icon: PhoneIcon },
  ];
  

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-[#013B94]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global">
            <div className="flex lg:flex-1">
                <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Booking.com</span>
                    <img
                    className="h-12 w-auto"
                    src="https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w"
                    alt="logo"
                    />
                </Link>
            </div>

            <div className="flex lg:hidden">
                <button type="button" className="text-white inline-flex justify-center items-center -m-2.5 p-2.5" onClick={()=>setMobileMenuOpen(true)}>
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>

            <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                <Popover className="relative">
                    <PopoverButton className ="flex items-center text-sm font-semibold text-white gap-x-1 leading-6">
                        Stays
                        <ChevronDownIcon
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                        />
                    </PopoverButton>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-1 translate-y-0"
                        leave="transition ease-in duration-200"
                        leaveFrom="opacity-1 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >

                        <PopoverPanel className = "absolute z-10 bg-white top-full -left-8 mt-3 w-screen max-w-md overflow-hidden rounded-3xl ring-1 ring-gray-900/5 shadow-lg ">
                            <div className="p-4">
                                {products.map((item)=>(
                                    <div key={item.name} className = "group flex items-center text-sm leading-6 rounded-lg hover:bg-gray-50 gap-x-6 p-4">
                                        <div className=" h-11 w-11 flex justify-center items-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                                            <item.icon className="h-6 w-6 text-[#013B94] group-hover:text-blue-600"
                                            aria-hidden="true"/>
                                        </div>
                                        <div>
                                            <a href={item.href}
                                            className="font-semibold text-[#013B94]">{item.name}</a>
                                            <p className="mt-1 text-[#013B94]">{item.description}</p>
                                        </div>

                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                {callsToAction.map((item) =>(
                                    <a className='flex justify-center items-center gap-x-2.5 p-3 text-[#013B94] hover:bg-gray-100 text-sm font-semibold' key={item.name} href={item.href}>
                                        <item.icon className="h-6 w-6 text-[#00000] group-hover:text-blue-600"
                                        aria-hidden="true"/>
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </PopoverPanel> 
                    </Transition>
                </Popover>

                <a href="#" className = "text-sm font-semibold leading-6 text-white"> Flights</a>
                <a href="#" className = "text-sm font-semibold leading-6 text-white"> Car Rentals</a>
                <a href="#" className = "text-sm font-semibold leading-6 text-white">Attractions</a>
                <a href="#" className = "text-sm font-semibold leading-6 text-white">Flights + Hotel</a>

            </PopoverGroup>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" className ="text-sm font-semibold text-white leading-6">
                    Login <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </nav>

        <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
        >
           <div className="fixed inset-0 z-10">
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full bg-[#013B94] sm:max-w-sm p-6 sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a className="-m-1.5 p-1.5">
                            <img
                                className="h-8 w-auto"
                                src="https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w"
                            />
                        </a>
                        <button className="-m-2.5 p-2.5 rounded-md text-white" type="button" onClick={()=>setMobileMenuOpen(false)}>
                            <XMarkIcon className="h-6 w-6"/>
                        </button>
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({open}) => (
                                        <>
                                            <DisclosureButton className="flex w-full items-center justify-between text-white text-base font-semibold leading-7 py-2 pl-3 pr-3.5 rounded-lg hover:bg-blue-800">
                                                Stays
                                                <ChevronDownIcon
                                                    className={cn(
                                                        open ? "rotate-180" : "",
                                                        "h-5 w-5 flex-none"
                                                    )}
                                                    aria-hidden="true"
                                                />

                                            </DisclosureButton>
                                            
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                    {[...products,...callsToAction].map((item)=>(
                                                        <DisclosureButton as='a' key={item.name} href={item.href} className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-800 rounded-lg">
                                                            {item.name}
                                                        </DisclosureButton>
                                                        
                                                    ))}
                                            </DisclosurePanel>

                                        </>
                                    )}
                                </Disclosure>
                                <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                                >
                                    Flights
                                </a>
                                <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                                >
                                    Car Rentals
                                </a>
                                <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                                >
                                    Attractions
                                </a>
                                <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                                >
                                    Flight + Hotel
                                </a>
                            </div>
                            <div className="py-3">
                                <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                                >
                                Log In
                                </a>
                            </div>

                        </div>
                    </div>
                </DialogPanel>
           </div>
        </Dialog>
    </header>
  )
}
export default Header