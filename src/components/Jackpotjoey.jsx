import React from "react";
import jackpotjoey from '../assets/images/exclusive.png';
import jackpotjoey1 from '../assets/images/premium.png';
import jackpotjoey2 from '../assets/images/support.png';
import jackpotjoey3 from '../assets/images/super.png';

function Jackpotjoey() {
    return (
        <section className="mzx48rblve">
            <div className="container">
                <h1>Why Play at Jackpot Joey?</h1>
                <div className="row">

                    <div className="col-md-3">
                        <div className="mzx48rblve-con gtdv5sfdj-div">
                            <img src={jackpotjoey} alt="Exclusive Joey Rewards Icon" />
                            <h3>Exclusive Joey Rewards</h3>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="mzx48rblve-con gtdv5sfdj-div">
                            <img src={jackpotjoey1} alt="Premium Features Icon" />
                            <h3>Premium VIP Experience</h3>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="mzx48rblve-con gtdv5sfdj-div">
                            <img src={jackpotjoey2} alt="24/7 Support Icon" />
                            <h3>24/7 Live Support</h3>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="mzx48rblve-con gtdv5sfdj-div">
                            <img src={jackpotjoey3} alt="Super Secure Gameplay Icon" />
                            <h3>Super-Fast Withdrawals</h3>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Jackpotjoey;
