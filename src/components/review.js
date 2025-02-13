import React from "react";
import data from "../data/review.json"

const Review = ({isBg}) => {
    const {ctav5} =data;
    return (
        <section 
            id="reviews" 
            className={`section-padding review ${isBg === "yes" ? "bg-one" : ""}`}
            style={{backgroundImage: `url(${ctav5.backgroundImage})`}}
        >
            <div className="container">
                <div className="row">
                    <div className="review__content">
                        <h2
                            className="display-3"
                            data-aos='fade-up'
                            data-aos-duration='1000'
                            data-aos-delay='200'
                        >
                            {ctav5.title}
                        </h2>
                        <ul>
                            <li
                                data-aos='fade-up'
                                data-aos-duration='1000'
                                data-aos-delay='200'
                            >
                                <img
                                    className="img-fluid"
                                    src={ctav5.icon}
                                    alt="star icon"
                                    height='25'
                                    width='25'
                                />
                            </li>
                            <li
                                data-aos='fade-up'
                                data-aos-duration='1000'
                                data-aos-delay='300'
                            >
                                <img
                                    className="img-fluid"
                                    src={ctav5.icon}
                                    alt="star icon"
                                    height='25'
                                    width='25'
                                />
                            </li>
                            <li
                                data-aos='fade-up'
                                data-aos-duration='1000'
                                data-aos-delay='400'
                            >
                                <img
                                    className="img-fluid"
                                    src={ctav5.icon}
                                    alt="star icon"
                                    height='25'
                                    width='25'
                                />
                            </li>
                            <li
                                data-aos='fade-up'
                                data-aos-duration='1000'
                                data-aos-delay='500'
                            >
                                <img
                                    className="img-fluid"
                                    src={ctav5.icon}
                                    alt="star icon"
                                    height='25'
                                    width='25'
                                />
                            </li>
                        </ul>
                        <p
                            className="fs-5"
                            data-aos='fade-up'
                            data-aos-duration='1000'
                            data-aos-delay='600'
                        >
                            {ctav5.text1} <br/>
                            {ctav5.text2}
                        </p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Review;