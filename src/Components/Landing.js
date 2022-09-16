import React, { Component } from 'react';
import Cards from './Cards';
import Banner from './Banner';
import Search from './Search';
import Logos from './Logos';

class Landing extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Cards/>
                <Search/>
                <Logos/>
            </div>
        );
    }
}

export default Landing;