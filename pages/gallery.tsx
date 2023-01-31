import { db, storage } from '@/utils/firebase';
import { DocumentData, doc, getDoc } from 'firebase/firestore';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    data: DocumentData;
}

export const getStaticProps = async () => {
    const docRef = doc(db, 'content', 'gallery');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return {
            props: { data: docSnap.data() }
        };
    } else {
        console.log('No such document!');
    }
};

const Gallery: NextComponentType<NextPageContext, {}, Props> = ({ data }) => {
    return (
        <div className="flex flex-wrap">
            {data.concepts.map((concept: string, index: number) => {
                return (
                    <div className="w-1/4" key={`concept_${index}`}>
                        <figure className="group w-full relative cursor-pointer filter">
                            <Link href="#">
                                <Image
                                    className="aspect-square block object-cover object-center w-full h-full rounded-lg"
                                    width={500}
                                    height={500}
                                    src="/mobile-background.webp"
                                    alt="image description"
                                />
                            </Link>
                            <figcaption className="w-full rounded-b-lg group-hover:rounded-lg group-hover:h-full transition-all absolute p-4 left-0 bottom-0 bg-black/70 flex justify-center items-center">
                                <p className="capitalize">{concept}</p>
                            </figcaption>
                        </figure>
                    </div>
                );
            })}
        </div>
    );
};

export default Gallery;
