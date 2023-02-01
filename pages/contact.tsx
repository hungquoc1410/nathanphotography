import type { NextComponentType, NextPageContext } from 'next'
import Image from 'next/image'
import Link from 'next/link'

interface Props {}

const Contact: NextComponentType<NextPageContext, {}, Props> = (
    props: Props
) => {
    return (
        <div className="flex w-full items-center justify-center">
            <div className="flex flex-col items-center gap-8 rounded-3xl bg-black/50 p-8">
                <div className="text-xl font-semibold text-yellow-500 lg:text-2xl">
                    Bạn có thể liên lạc với mình qua:
                </div>
                <div className="flex flex-col gap-6 lg:flex-row lg:gap-16">
                    <div className="flex w-full flex-col gap-4">
                        <Link
                            href="https://www.facebook.com/hungquoc.nguyen.37669/"
                            target="_blank"
                            className="flex items-center justify-center gap-2"
                        >
                            <div className="h-10 w-10">
                                <Image
                                    priority
                                    width={40}
                                    height={40}
                                    src="/facebook-app-icon.svg"
                                    alt="facebook-icon"
                                />
                            </div>
                            <span>Nguyễn Hùng Quốc</span>
                        </Link>
                        <div className="hidden w-full justify-center lg:flex">
                            <Image
                                priority
                                className="max-h-72 w-auto"
                                width={500}
                                height={500}
                                src="/facebook-qr.jpg"
                                alt="facebook-qr"
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-4">
                        <Link
                            href="https://zalo.me/0334866870"
                            target="_blank"
                            className="flex items-center justify-center gap-2"
                        >
                            <div className="h-10 w-10">
                                <Image
                                    priority
                                    className="rounded-lg bg-white"
                                    width={40}
                                    height={40}
                                    src="/zalo-icon.svg"
                                    alt="zalo-icon"
                                />
                            </div>
                            <span>Nguyễn Hùng Quốc</span>
                        </Link>
                        <div className="hidden w-full justify-center lg:flex">
                            <Image
                                priority
                                className="max-h-72 w-auto"
                                width={500}
                                height={500}
                                src="/zalo-qr.jpg"
                                alt="zalo-qr"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
