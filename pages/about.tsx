import { db } from '@/utils/firebase'
import { doc, getDoc } from 'firebase/firestore'
import type {
    InferGetStaticPropsType,
    NextComponentType,
    NextPageContext,
} from 'next'
import Image from 'next/image'

export const getStaticProps = async () => {
    const docRef = doc(db, 'content', 'about')
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        return {
            props: { data: docSnap.data() },
        }
    } else {
        console.log('No such document!')
    }
}

function About({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div className="flex w-full flex-col gap-6 rounded-3xl bg-black/50 p-6 lg:flex-row lg:gap-0 lg:p-16">
            <div className="flex flex-1 items-center justify-center">
                <Image
                    className="max-h-96 w-auto rounded-full"
                    width={500}
                    height={500}
                    priority
                    src="/personal-image.jpg"
                    alt="personal image"
                />
            </div>
            <div className="flex flex-1 items-center justify-center">
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default About
