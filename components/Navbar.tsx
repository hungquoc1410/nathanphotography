import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import { Roboto } from '@next/font/google';
import { useState } from 'react';
import { Dancing_Script } from '@next/font/google';
import { useRouter } from 'next/router';
import Link from 'next/link';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });
const dancing_script = Dancing_Script({ weight: '400', subsets: ['latin'] });

interface Props {}

const Navbar: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
    const [mobileNav, setMobileNav] = useState(false);
    const router = useRouter();
    const { pathname } = router;
    const navigation = ['home', 'gallery', 'pricelist', 'about', 'contact'];

    const highlightNav = (link: string) => {
        if ((link == 'home' && pathname == '/') || pathname.includes(link)) {
            return 'text-yellow-400';
        } else {
            return 'text-gray-100';
        }
    };

    return (
        <nav className={`${roboto.className} px-4 py-2.5 bg-transparent`}>
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        width={36}
                        height={36}
                        className="w-auto h-9 mr-3"
                        alt="Logo"
                    />
                    <span
                        className={`${dancing_script.className} self-center text-2xl font-semibold whitespace-nowrap text-gray-100`}
                    >
                        Nathan Photography
                    </span>
                </Link>
                <button
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-gray-100 border border-gray-100 rounded-lg lg:hidden"
                    onClick={() => setMobileNav((p) => !p)}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6 fill-gray-100"
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
                <div className={`${mobileNav ? 'block' : 'hidden'} w-full lg:block lg:w-auto`}>
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:font-medium lg:border-0">
                        {navigation.map((link) => {
                            return (
                                <li key={link}>
                                    <Link
                                        href={link == 'home' ? '/' : link}
                                        className={`block py-2 pl-3 pr-4 hover:text-yellow-400 lg:p-0 capitalize ${highlightNav(
                                            link
                                        )}`}
                                        onClick={() => setMobileNav((p) => !p)}
                                    >
                                        {link}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
