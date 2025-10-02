import React from "react";
import FeaturesGames from '../assets/images/marchinglegions.png';
import FeaturesGames1 from '../assets/images/electricwilds.png';
import FeaturesGames2 from '../assets/images/megaflip.png';
import FeaturesGames3 from '../assets/images/marching.png';
import FeaturesGames4 from '../assets/images/busta.png';
import star from '../assets/images/star.svg';
import { Link } from "react-router-dom";

function Features() {
    return (
        <section className="ujc74tmqwd">
            <div className="container">
                <h1>Features Games</h1>
                <div className="row">
                    <div className="col">
                        <Link to="/game/1">
                            <div className="zpe63ynxlf">
                                <img src={FeaturesGames} alt="Marching Legions" />
                                <div className="a9whvt4bco">
                                    <h4>Marching Legions</h4>
                                    <span>
                                        <img src={star} alt="Star Rating" />
                                        <h6>4.9</h6>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col">
                        <Link to="/game/2">
                            <div className="zpe63ynxlf">
                                <img src={FeaturesGames1} alt="Electric Wilds" />
                                <div className="a9whvt4bco">
                                    <h4>Electric Wilds</h4>
                                    <span>
                                        <img src={star} alt="Star Rating" />
                                        <h6>4.9</h6>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col">
                        <Link to="/game/3">
                            <div className="zpe63ynxlf">
                                <img src={FeaturesGames2} alt="Mega Flip" />
                                <div className="a9whvt4bco">
                                    <h4>Mega Flip</h4>
                                    <span>
                                        <img src={star} alt="Star Rating" />
                                        <h6>4.9</h6>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col">
                        <Link to="/game/4">
                            <div className="zpe63ynxlf">
                                <img src={FeaturesGames3} alt="Royal Mint" />
                                <div className="a9whvt4bco">
                                    <h4>Royal Mint</h4>
                                    <span>
                                        <img src={star} alt="Star Rating" />
                                        <h6>4.9</h6>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col">
                        <Link to="/game/5">
                            <div className="zpe63ynxlf">
                                <img src={FeaturesGames4} alt="1000X BUSTA" />
                                <div className="a9whvt4bco">
                                    <h4>1000X BUSTA</h4>
                                    <span>
                                        <img src={star} alt="Star Rating" />
                                        <h6>4.9</h6>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="kf7yqp13dz">
                        <button className="gtdv5sfdj-btn">View All Games</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
