import type { GetStaticProps, NextComponentType, NextPageContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { GetStaticPaths } from 'next'

interface Props {
    params: ParsedUrlQuery
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: { params: context.params },
    }
}

const Concept: NextComponentType<NextPageContext, {}, Props> = ({ params }) => {
    console.log(params)
    return <div>Concept</div>
}

export default Concept
