import React from 'react';

import Timer from "../components/Timer";
import ToDo from "../components/ToDo";
import Description from '../components/Description';
import AuthorLink from '../components/AuthorLink';

const Home = () => {
    return (
        <>
            <h1></h1>
            <Timer />
            <ToDo />
            <Description />
            <AuthorLink />
        </>
    );
};

export default Home;
