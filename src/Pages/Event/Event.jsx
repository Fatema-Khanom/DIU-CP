import React from 'react';
import Carousel from './Carousel';
import { Helmet } from 'react-helmet';
import MonthlyContest from './MonthlyContest/MonthlyContest';

const Event = () => {
    return (
        <div>
            <Helmet>
        <meta charSet="utf-8" />
        <title>DIU|CP Community|Event</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
            <Carousel></Carousel>
            <MonthlyContest></MonthlyContest>
        </div>
    );
};

export default Event;