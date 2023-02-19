import { Fragment } from 'react'
import { Menu } from '@headlessui/react'



 export default function HeaderMenu() {

    const links = [
        { href: '/jobs', label: "Jobs" },
        { href: '/blog', label: "Blog" }
    ]


    return (
        <Menu >
            <div className='font-content w-full	h-20 text-primary flex flex-row justify-end items-center text-xl'>
                <div className='flex flex-row gap-10 hidden sm:flex mr-20'>
                    {links.map((link) => (
                        <a key={link.href} className=' hover:text-tertiary' href={link.href}>{link.label}</a>
                    ))}
                </div>

                    <div className="relative flex h-full items-center sm:hidden">
                        <Menu.Button >
                            {({ open }) => (
                                <svg className={`${open ? '' : ''
                                    } w-7 h-7 mr-10 fill-primary cursor-pointer`} >
                                    <use xlinkHref='/images/menu-icon.svg#menuicon' href="/images/menu-icon.svg#menuicon"></use>
                                </svg>
                            )}
                        </Menu.Button>
                        <Menu.Items className="absolute top-20 right-0 w-60 divide-y divide-gray-100 rounded-md bg-white shadow ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {links.map((link) => (
                                /* Use the `active` state to conditionally style the active item. */
                                <Menu.Item key={link.href} as={Fragment}>
                                    {({ active }) => (
                                        <a key={link.href}
                                            href={link.href}
                                            className={`${active ? 'bg-primary text-secondary' : 'bg-white text-primary'
                                                } group flex w-full items-center rounded-md px-2 py-2 font-content`}
                                        >
                                            {link.label}
                                        </a>
                                    )}
                                </Menu.Item>
                            ))}
                        </Menu.Items>

                    </div>

            </div>

        </Menu>
    )
}

