/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import Footer from '../../component/Footer/Footer'

export default function HomePage() {
    return (
        <div>
            <div id="Home" className="pagehome" >
                {/* <!-- slider --> */}
                <div className="slider">
                    <img src="../img/main/1561009918.jpg" alt="ducati" className="h-100 w-100" />
                </div>
                {/* <!--Các đối tác--> */}
                <div className="opposite  multiple-items  ">
                    <div className="opposite-items">
                        <a className="" href="">
                            <img src="../img/doitac/bmw.png" alt="" />
                        </a>
                    </div>
                    <div className="opposite-items">
                        <a className="" href="">
                            <img src="../img/doitac/benelli-.png" alt="" />
                        </a>
                    </div>
                    <div className="opposite-items">
                        <a className="" href="">
                            <img src="../img/doitac/ducatii.png" alt="" />
                        </a>
                    </div>
                    <div className="opposite-items">
                        <a className="" href="">
                            <img src="../img/doitac/harlye.png" alt="" />
                        </a>
                    </div>

                    <div className="opposite-items">
                        <a className="" href="">
                            <img src="../img/doitac/kawasaki.png" alt="" />
                        </a>
                    </div>
                    <div className="opposite-items">
                        <a className="" href="">
                            <img src="../img/doitac/suzuki.png" alt="" />
                        </a>
                    </div>
                    <div className="opposite-items">
                        <a className="" href="">
                            <img src="../img/doitac/triump.jpeg" alt="" />
                        </a>
                    </div>
                    <div className="opposite-items">
                        <a className="" href="">
                            <img src="../img/doitac/yamaha.png" alt="" />
                        </a>
                    </div>

                </div>
            </div>
            <Footer />
        </div>

    );
}