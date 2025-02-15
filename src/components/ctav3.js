import React from "react";
import data from "../data/ctav3.json"

const Ctav3 = () => {
    const {ctav3} = data;
    return (
        <section id="catv3" className="catv3 bg-one p-80px-t">
            <div className="container bg-one">
                <div className="row">
                    <div className="ctav3__content">
                        <h2 className="m-25px-b"> 
                            {ctav3.title1}
                            <br />
                            {ctav3.title2}
                        </h2>
                        <h2 className="display-4 m-25px-b">
                            <a href="tel:610383766284">{ctav3.number}</a>
                        </h2>
                        <a href="#contact" className="smooth button button__primary">
                            <span>{ctav3.btnText}</span>
                        </a>
                        <div className="ctav3__content__icon">
                            <i className="iconfont-read-book"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ctav3;