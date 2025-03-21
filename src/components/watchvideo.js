import React from "react";
import data from "../data/watchvideo.json"
import { FiPlay } from "react-icons/fi";
const WatchVideo = ({isBg}) => {
    const {ctav4} = data;
    return (
        <section 
            className={`section-padding watchVideo ${isBg === "yes" ? "bg-one" : ""}`}
            style={{backgroundImage: `url(${ctav4.backgroundImage})`}}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-4 mb-lg-0 watchVideo__content">
                        <h3
                            className="display-3"
                            data-aos='fade-up'
                            data-aos-duration='1000'
                            data-aos-delay='200'
                        >
                            {ctav4.title}
                        </h3>
                        <h3
                            data-aos='fade-up'
                            data-aos-duration='1000'
                            data-aos-delay='250'
                        >
                            {ctav4.subtitle}
                        </h3>
                        <p
                            data-aos='fade-up'
                            data-aos-duration='1000'
                            data-aos-delay='250'
                        >
                            {ctav4.text}
                        </p>
                        <a
                            href="#preview"
                            className="smooth button button__primary"
                            data-aos='fade-up'
                            data-aos-duration='1000'
                            data-aos-delay='300'
                        >
                            <span>
                                {ctav4.btnText}
                            </span>
                        </a>
                    </div>
                    <div
                        className="col-md-6"
                        data-aos='fade-up'
                        data-aos-duration='1000'
                        data-aos-delay='250'
                    >
                        <div className="watchVideo__video-btn">
                            {ctav4.videoURL === " " ? (
                                ""
                            ) : (
                                <>
                                    <a href={ctav4.videoURL} className="glightbox3 video-btn">
                                        <FiPlay/>
                                    </a>
                                    <div className='promo-video'>
                                        <div className='waves-block'>
                                            <div className='waves wave-1'></div>
                                            <div className='waves wave-2'></div>
                                            <div className='waves wave-3'></div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
    )
}

export default WatchVideo;