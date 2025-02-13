import React from 'react';
import Header from '../global/Header';
import Hero from '../hero';
import Achieve from '../achieve';
import Chapter from '../chapter';
import Chapterpreview from '../chapter-preview';
import Pricing from '../pricing';
import Author from '../author';
import Achievement from '../achievement';
import Funfacts from '../fun-fact';

const MainPage = ({ header }) => {
    return(
        <>
            <Header header={header}/>
            <Hero isBg='yes'/>
            <Achieve isBg=''/>
            <Chapter isBg='yes'/>
            <Chapterpreview isBg=''/>
            <Pricing isBg='yes'/>
            <Author isBg=''/>
            <Achievement isBg='yes'/>
            <Funfacts isBg=''/>
        </>
    )
}
export default MainPage;

