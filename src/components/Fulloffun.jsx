import React from "react";
import jackpotjoey from '../assets/images/exclusive.png';
import jackpotjoey1 from '../assets/images/premium.png';
import jackpotjoey2 from '../assets/images/support.png';
import jackpotjoey3 from '../assets/images/super.png';
import trusted from '../assets/images/trusted.png';
import trusted1 from '../assets/images/reliable.png';
import trusted2 from '../assets/images/daily.png';

function Fulloffun() {
    return (
        <section className="mzx48rblve">
            <div className="container">
                <h1>Safe, Secure & Full of Fun</h1>
                {/* <div className="row">

                    <div className="col-md-3">
                        <div className="mzx48rblve-con gtdv5sfdj-div">
                            <img src={jackpotjoey} alt="Exclusive Joey Rewards Icon" />
                            <h3>Exclusive Joey Rewards</h3>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="mzx48rblve-con gtdv5sfdj-div">
                            <img src={jackpotjoey1} alt="Premium Features Icon" />
                            <h3>Exclusive Joey Rewards</h3>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="mzx48rblve-con gtdv5sfdj-div">
                            <img src={jackpotjoey2} alt="24/7 Support Icon" />
                            <h3>Exclusive Joey Rewards</h3>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="mzx48rblve-con gtdv5sfdj-div">
                            <img src={jackpotjoey3} alt="Super Secure Gameplay Icon" />
                            <h3>Exclusive Joey Rewards</h3>
                        </div>
                    </div>

                </div> */}
                <div className="row">

                    <div className="col-md-4">
                        <div className="mzx48rblve-con gtdv5sfdj-div">
                            <img src={trusted} alt="Exclusive Joey Rewards Icon" />
                            <h3>Trusted Entertainment</h3>
                            <p>We guarantee safe, secure, and smooth gameplay—so you can focus on fun.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="mzx48rblve-con gtdv5sfdj-div">
                            <img src={trusted1} alt="Premium Features Icon" />
                            <h3>Reliable Payments</h3>
                            <p>Lightning-fast, secure, and transparent transactions every time.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="mzx48rblve-con gtdv5sfdj-div">
                            <img src={trusted2} alt="24/7 Support Icon" />
                            <h3>Daily Rewards</h3>
                            <p>Keep coming back for daily surprises and bonus coins that make winning easier.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Fulloffun;
