import type { NextComponentType, NextPageContext } from 'next';

interface Props {}

const About: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
    return <div className="container mx-auto">About</div>;
};

export default About;
