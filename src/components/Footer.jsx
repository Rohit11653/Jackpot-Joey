import React from 'react'
import flogo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className='foehjnbyt'>
                            <img src={flogo} alt="" />
                            <p>
                                NO PURCHASE IS NECESSARY to play. PROMOTIONS ARE VOID WHERE PROHIBITED BY LAW. For detailed rules, see Terms of Use & Sweepstakes Rules. Chanced.com Social Gaming Platform is a play-for-fun website intended for amusement purposes only. Chanced.com's Social Gaming Platform does not offer “real-money gambling” or the opportunity to win real money. Chanced.com Social Gaming Platform is only open to Eligible Participants, who are at least eighteen (18) years old or the age of majority in their jurisdiction (whichever occurs later) at the time of entry.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='footlink'> 
                            <Link to="#">Privacy Policy</Link>
                            <Link to="#">Terms and Conditions</Link>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='footlink'> 
                            <Link to="#">Customer Acceptance Policy</Link>
                            <Link to="#">Responsible Social Policy</Link>
                        </div>
                    </div>
                    <p className='gtdv5sfdj-p pt-3 pb-3'>© 2025. Jackpot Joey. All Rights Reserved</p>
                </div>
            </div>
        </section>
    )
}

export default Footer