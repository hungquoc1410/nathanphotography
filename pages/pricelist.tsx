import { db } from '@/utils/firebase'
import { DocumentData, doc, getDoc } from 'firebase/firestore'
import type { NextComponentType, NextPageContext } from 'next'
import Link from 'next/link'

interface Props {
    data: DocumentData
}

export const getStaticProps = async () => {
    const docRef = doc(db, 'content', 'pricelist')
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        return {
            props: { data: docSnap.data() },
        }
    } else {
        console.log('No such document!')
    }
}

const Pricelist: NextComponentType<NextPageContext, {}, Props> = ({ data }) => {
    return (
        <div className="flex w-full justify-center">
            <div className="flex flex-col items-center gap-8 rounded-3xl bg-black/50 p-8">
                <div className="text-center text-xl lg:text-2xl">
                    <p>Hiện tại mình đang nhận chụp theo các gói sau đây</p>
                    <p>
                        Nhưng nếu bạn có nhu cầu riêng thì cũng đừng ngần ngại{' '}
                        <Link
                            href="/contact"
                            className="cursor-pointer text-yellow-500 hover:underline hover:underline-offset-8"
                        >
                            liên hệ
                        </Link>{' '}
                        mình nhé!
                    </p>
                </div>
                <div className="flex w-full flex-col justify-evenly gap-8 lg:flex-row">
                    <div className="rounded-3xl border-2 border-solid border-yellow-500 p-4">
                        <p className="font-bold">Cá nhân</p>
                        <p className="my-2 text-xl font-bold tracking-wider text-yellow-500 lg:text-2xl">
                            {data.personal_price}
                        </p>
                        <ul className="list-inside list-disc">
                            {data.personal_details.map(
                                (detail: string, index: number) => {
                                    return (
                                        <li key={`personal_details_${index}`}>
                                            {detail}
                                        </li>
                                    )
                                }
                            )}
                        </ul>
                    </div>
                    <div className="rounded-3xl border-2 border-solid border-yellow-500 p-4">
                        <p className="font-bold">Cặp đôi</p>
                        <p className="my-2 text-xl font-bold tracking-wider text-yellow-500 lg:text-2xl">
                            {data.couple_price}
                        </p>
                        <ul className="list-inside list-disc">
                            {data.couple_details.map(
                                (detail: string, index: number) => {
                                    return (
                                        <li key={`couple_details_${index}`}>
                                            {detail}
                                        </li>
                                    )
                                }
                            )}
                        </ul>
                    </div>
                </div>
                <div className="w-full">
                    <ul className="list-inside list-disc">
                        {data.notes.map((note: string, index: number) => {
                            return <li key={`notes_${index}`}>{note}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pricelist
