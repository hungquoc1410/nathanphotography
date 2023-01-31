import { db } from '@/utils/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

export const getStaticProps = async () => {
    const docRef = doc(db, 'content', 'home');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return {
            props: { data: docSnap.data() }
        };
    } else {
        console.log('No such document!');
    }
};

function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div className="w-full lg:w-1/2 flex flex-col gap-8 justify-center items-start">
            <p className="text-6xl font-bold text-yellow-400 w-full">{data.title}</p>
            <p className="w-full bg-black/50 p-4 rounded-lg">{data.description}</p>
            <Link
                href="/contact"
                className="py-4 px-8 rounded-full text-black bg-yellow-400 hover:bg-yellow-500 font-semibold"
            >
                Liên hệ mình nhé
            </Link>
        </div>
    );
}

export default Home;
