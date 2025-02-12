import React from 'react';
import Header from '../global/Header';
import Hero from '../hero';
import Achieve from '../achieve';
import Chapter from '../chapter';
import Chapterpreview from '../chapter-preview';

const MainPage = ({ header }) => {
    return(
        <>
            <Header header={header}/>
            <Hero isBg='yes'/>
            <Achieve isBg=''/>
            <Chapter isBg='yes'/>
            <Chapterpreview isBg=''/>
        </>
    )
}
export default MainPage;

