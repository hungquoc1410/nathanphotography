import { db } from '@/utils/firebase';
import { DocumentData, doc, getDoc } from 'firebase/firestore';
import type { NextComponentType, NextPageContext } from 'next';
import Link from 'next/link';

interface Props {
    data: DocumentData;
}

export const getStaticProps = async () => {
    const docRef = doc(db, 'content', 'pricelist');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return {
            props: { data: docSnap.data() }
        };
    } else {
        console.log('No such document!');
    }
};

const Pricelist: NextComponentType<NextPageContext, {}, Props> = ({ data }) => {
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col p-8 gap-8 items-center bg-black/50 rounded-3xl">
                <div className="text-center text-xl lg:text-2xl">
                    <p>Hiện tại mình đang nhận chụp theo các gói sau đây</p>
                    <p>
                        Nhưng nếu bạn có nhu cầu riêng thì cũng đừng ngần ngại{' '}
                        <Link
                            href="/contact"
                            className="text-yellow-500 cursor-pointer hover:underline hover:underline-offset-8"
                        >
                            liên hệ
                        </Link>{' '}
                        mình nhé!
                    </p>
                </div>
                <div className="w-full flex-col lg:flex-row flex gap-8 justify-evenly">
                    <div className="p-4 border-solid border-2 rounded-3xl border-yellow-500">
                        <p className="font-bold">Cá nhân</p>
                        <p className="text-xl lg:text-2xl my-2 text-yellow-500 font-bold tracking-wider">
                            {data.personal_price}
                        </p>
                        <ul className="list-disc list-inside">
                            {data.personal_details.map((detail: string, index: number) => {
                                return <li key={`personal_details_${index}`}>{detail}</li>;
                            })}
                        </ul>
                    </div>
                    <div className="p-4 border-solid border-2 rounded-3xl border-yellow-500">
                        <p className="font-bold">Cặp đôi</p>
                        <p className="text-xl lg:text-2xl my-2 text-yellow-500 font-bold tracking-wider">
                            {data.couple_price}
                        </p>
                        <ul className="list-disc list-inside">
                            {data.couple_details.map((detail: string, index: number) => {
                                return <li key={`couple_details_${index}`}>{detail}</li>;
                            })}
                        </ul>
                    </div>
                </div>
                <div className="w-full">
                    <ul className="list-disc list-inside">
                        {data.notes.map((note: string, index: number) => {
                            return <li key={`notes_${index}`}>{note}</li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Pricelist;
