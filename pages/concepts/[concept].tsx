import ConceptPhoto from '@/components/ConceptPhoto'
import { storage } from '@/utils/firebase'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import type { GetStaticProps, NextComponentType, NextPageContext } from 'next'
import { GetStaticPaths } from 'next'
import Link from 'next/link'

interface Props {
    data: string[]
}

const concepts = [
    'beach',
    'black-&-white',
    'christmas',
    'coffee-shop',
    'couple',
    'forest',
    'graduation',
    'night-life',
    'outdoor',
    'studio',
    'traditional-costume',
]

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = concepts.map((concept) => {
        return { params: { concept: concept } }
    })
    return {
        paths: paths,
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    if (context.params) {
        const galleryRef = ref(
            storage,
            `gallery/${String(context.params.concept)}`
        )
        const gallerySnap = await listAll(galleryRef)
        let i = 0
        let data: string[] = []

        while (i < gallerySnap.items.length) {
            const url = await getDownloadURL(gallerySnap.items[i])
            data.push(url)
            i++
        }

        return {
            props: { data: data },
        }
    }

    return {
        props: { data: [] },
    }
}

const Concept: NextComponentType<NextPageContext, {}, Props> = ({ data }) => {
    return (
        <div className="mb-4 flex flex-wrap justify-center gap-4">
            {data.map((image, index) => {
                return <ConceptPhoto key={`image_${index}`} imageUrl={image} />
            })}
            <div className="flex w-full justify-center">
                <Link
                    href="/gallery"
                    className="rounded-full bg-black py-2 px-6 font-semibold hover:bg-yellow-500"
                >
                    Back to Gallery
                </Link>
            </div>
        </div>
    )
}

export default Concept
