import React from "react";
import banner from "../assets/images/banner.png";

function Banner() {
    return (
        <section className="bd9eq0lzvn">
            <div className="container brbnghty">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="brbnghty1">
                            <h1 className="gtdv5sfdj-h1">
                                Win More with Daily Cash Rewards!
                            </h1>
                            <p className="gtdv5sfdj-p pt-3 pb-3">
                                At Jackpot Joey, every spin brings you closer to exciting rewards.
                                Get instant cashback coins every day and keep the thrill alive with endless opportunities to win.
                            </p>
                            <button className="gtdv5sfdj-btn">Start Playing Now</button>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="brbnghty2">
                            {/* <img src={banner} alt="Jackpot Banner" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
