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
import Books from '../books';
import Review from '../review';
import Testimonial from '../testimonial';
import WatchVideo from '../watchvideo';
import Contact from '../contact';
import Footer from '../global/Footer';

const MainPage = ({ header, footer }) => {
    const {menu} = footer;
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
            <Books isBg='yes'/>
            <Review isBg=''/>
            <Testimonial isBg='yes'/>
            <WatchVideo isBg=''/>
            <Contact isBg=''/>
            <Footer isBg='yes' menu={menu}/>
        </>
    )
}
export default MainPage;

