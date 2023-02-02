import { db, storage } from '@/utils/firebase'
import { DocumentData, doc, getDoc } from 'firebase/firestore'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import type { NextComponentType, NextPageContext } from 'next'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    data: DocumentData
    urls: string[]
}

export const getStaticProps = async () => {
    const docRef = doc(db, 'content', 'gallery')
    const docSnap = await getDoc(docRef)
    const galleryRef = ref(storage, 'Thumbnails')
    const gallerySnap = await listAll(galleryRef)
    let i = 0
    let urls: string[] = []

    while (i < gallerySnap.items.length) {
        const url = await getDownloadURL(gallerySnap.items[i])
        urls.push(url)
        i++
    }

    if (docSnap.exists()) {
        return {
            props: { data: docSnap.data(), urls: urls },
        }
    } else {
        console.log('No such document!')
    }
}

const Gallery: NextComponentType<NextPageContext, {}, Props> = ({
    data,
    urls,
}) => {
    console.log(urls)
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {data.concepts.map((concept: string, index: number) => {
                return (
                    <div
                        className="w-5/12 rounded-lg bg-gray-200 p-1 lg:w-1/5"
                        key={`concept_${index}`}
                    >
                        <figure className="group relative w-full cursor-pointer filter">
                            <Link href="#">
                                <Image
                                    priority
                                    className="block aspect-square h-full w-full rounded-lg object-cover object-center"
                                    width={500}
                                    height={500}
                                    src="/mobile-background.webp"
                                    alt="image description"
                                />
                            </Link>
                            <figcaption className="absolute left-0 bottom-0 flex w-full items-center justify-center rounded-b-lg bg-black/70 p-4 group-hover:h-full group-hover:rounded-lg group-hover:text-3xl">
                                <p className="capitalize">{concept}</p>
                            </figcaption>
                        </figure>
                    </div>
                )
            })}
        </div>
    )
}

export default Gallery
