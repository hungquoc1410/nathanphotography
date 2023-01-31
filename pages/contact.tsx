import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface Props {}

const Contact: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-8 p-8 bg-black/50 rounded-3xl">
                <div className="text-2xl font-semibold text-yellow-500">
                    Bạn có thể liên lạc với mình qua:
                </div>
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
                    <div className="flex flex-col w-full gap-4">
                        <Link
                            href="https://www.facebook.com/hungquoc.nguyen.37669/"
                            target="_blank"
                            className="flex justify-center items-center gap-2"
                        >
                            <div className="h-10 w-10">
                                <Image
                                    width={40}
                                    height={40}
                                    src="/facebook-app-icon.svg"
                                    alt="facebook-icon"
                                />
                            </div>
                            <span>Nguyễn Hùng Quốc</span>
                        </Link>
                        <div className="hidden lg:flex w-full justify-center">
                            <Image
                                className="w-auto max-h-72"
                                width={500}
                                height={500}
                                src="/facebook-qr.jpg"
                                alt="facebook-qr"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-4">
                        <Link
                            href="https://zalo.me/0334866870"
                            target="_blank"
                            className="flex justify-center items-center gap-2"
                        >
                            <div className="h-10 w-10">
                                <Image
                                    className="bg-white rounded-lg"
                                    width={40}
                                    height={40}
                                    src="/zalo-icon.svg"
                                    alt="zalo-icon"
                                />
                            </div>
                            <span>Nguyễn Hùng Quốc</span>
                        </Link>
                        <div className="hidden lg:flex w-full justify-center">
                            <Image
                                className="w-auto max-h-72"
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
    );
};

export default Contact;
