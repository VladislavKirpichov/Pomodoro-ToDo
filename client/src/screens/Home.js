import React from 'react';

import Timer from "../components/Timer";
import ToDo from "../components/ToDo";
import Description from '../components/Description';
import AuthorLink from '../components/AuthorLink';

const Home = () => {
    return (
        <>
            <Timer />
            <ToDo />
            <Description />
            <AuthorLink />
        </>
    );
};

export default Home;
