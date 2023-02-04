import { storage } from '@/utils/firebase'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import type { NextComponentType, NextPageContext } from 'next'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    data: { name: string; url: string }[]
}

const formatString = (string: string) => {
    return string.split('-').join(' ')
}

export const getStaticProps = async () => {
    const galleryRef = ref(storage, 'thumbnails')
    const gallerySnap = await listAll(galleryRef)
    let i = 0
    let data: { name: string; url: string }[] = []

    while (i < gallerySnap.items.length) {
        const url = await getDownloadURL(gallerySnap.items[i])
        const name = gallerySnap.items[i].name.split('.')[0]
        data.push({ name: name, url: url })
        i++
    }

    return {
        props: { data: data },
    }
}

const Gallery: NextComponentType<NextPageContext, {}, Props> = ({ data }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {data.map(
                (concept: { name: string; url: string }, index: number) => {
                    return (
                        <Link
                            href={`/concepts/${concept.name}`}
                            key={`concept_${index}`}
                            className="w-5/12 rounded-lg bg-gray-200 p-1 lg:w-1/5"
                        >
                            <figure className="group relative w-full cursor-pointer filter">
                                <Image
                                    priority
                                    className="block aspect-square h-full w-full rounded-lg object-cover object-center"
                                    width={500}
                                    height={500}
                                    src={concept.url}
                                    alt="image description"
                                />
                                <figcaption className="absolute left-0 bottom-0 flex w-full items-center justify-center rounded-b-lg bg-black/70 p-4 group-hover:h-full group-hover:rounded-lg group-hover:text-3xl">
                                    <p className="capitalize">
                                        {formatString(concept.name)}
                                    </p>
                                </figcaption>
                            </figure>
                        </Link>
                    )
                }
            )}
        </div>
    )
}

export default Gallery
