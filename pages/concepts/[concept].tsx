import type { NextComponentType, NextPageContext } from 'next'

interface Props {}

const Concept: NextComponentType<NextPageContext, {}, Props> = (
    props: Props
) => {
    return <div>Concept</div>
}

export default Concept
