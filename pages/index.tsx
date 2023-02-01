import { db } from '@/utils/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'

export const getStaticProps = async () => {
    const docRef = doc(db, 'content', 'home')
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        return {
            props: { data: docSnap.data() },
        }
    } else {
        console.log('No such document!')
    }
}

function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div className="flex w-full flex-col items-start justify-center gap-8 lg:w-1/2">
            <p className="w-full text-5xl font-bold text-yellow-400 lg:text-6xl">
                {data.title}
            </p>
            <p className="w-full rounded-lg bg-black/50 p-4">
                {data.description}
            </p>
            <Link
                href="/contact"
                className="rounded-full bg-yellow-400 py-4 px-8 font-semibold text-black hover:bg-yellow-500"
            >
                Liên hệ mình nhé
            </Link>
        </div>
    )
}

export default Home
