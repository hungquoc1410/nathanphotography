import { Dancing_Script, Roboto } from '@next/font/google'
import type { NextComponentType, NextPageContext } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })
const dancing_script = Dancing_Script({ weight: '400', subsets: ['latin'] })

interface Props {}

const Navbar: NextComponentType<NextPageContext, {}, Props> = (
    props: Props
) => {
    const [mobileNav, setMobileNav] = useState(false)
    const router = useRouter()
    const { pathname } = router
    const navigation = ['home', 'gallery', 'pricelist', 'about', 'contact']

    const highlightNav = (link: string) => {
        if ((link == 'home' && pathname == '/') || pathname.includes(link)) {
            return 'text-yellow-400'
        } else {
            return 'text-gray-200'
        }
    }

    return (
        <nav className={`${roboto.className} px-4 py-2`}>
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        width={36}
                        height={36}
                        className="mr-3 h-9 w-auto"
                        priority
                        alt="Logo"
                    />
                    <span
                        className={`${dancing_script.className} self-center whitespace-nowrap text-xl font-semibold text-gray-200 lg:text-2xl`}
                    >
                        Nathan Photography
                    </span>
                </Link>
                <button
                    type="button"
                    className="ml-3 inline-flex items-center rounded-lg border border-gray-100 p-2 text-gray-200 lg:hidden"
                    onClick={() => setMobileNav((p) => !p)}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="h-6 w-6 fill-gray-100"
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
                <div
                    className={`${
                        mobileNav ? 'block' : 'hidden'
                    } w-full lg:block lg:w-auto`}
                >
                    <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-black/50 p-4 lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:font-medium">
                        {navigation.map((link) => {
                            return (
                                <li key={link}>
                                    <Link
                                        href={link == 'home' ? '/' : `/${link}`}
                                        className={`block py-2 pl-3 pr-4 capitalize hover:text-yellow-400 lg:p-0 ${highlightNav(
                                            link
                                        )}`}
                                        onClick={() => setMobileNav((p) => !p)}
                                    >
                                        {link}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
