import { db } from '@/utils/firebase';
import { doc, getDoc } from 'firebase/firestore';
import type { InferGetStaticPropsType, NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';

interface Props {}

export const getStaticProps = async () => {
    const docRef = doc(db, 'content', 'about');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return {
            props: { data: docSnap.data() }
        };
    } else {
        console.log('No such document!');
    }
};

function About({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div className="w-full flex flex-col lg:flex-row bg-black/50 rounded-3xl p-6 lg:p-16 gap-6 lg:gap-0">
            <div className="flex-1 flex items-center justify-center">
                <Image
                    className="w-auto max-h-96 rounded-full"
                    width={500}
                    height={500}
                    src="/personal-image.jpg"
                    alt="personal image"
                />
            </div>
            <div className="flex-1 flex items-center justify-center">
                <p>{data.description}</p>
            </div>
        </div>
    );
}

export default About;
