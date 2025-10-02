import React, { useState } from 'react'
import star from '../assets/images/star.png'
import refresh from '../assets/images/refresh.svg'
import fullscreen from '../assets/images/fullscreen.svg'
import report from '../assets/images/report.svg'
import gameimg from '../assets/images/gameimg.png'

function Game() {
  const [showGame, setShowGame] = useState(false);

  return (
    <section className='stylishBox1-sec'>
      <div className="container">
        <div className='fjggjdfbnc'>
          <h1 className='gtdv5sfdj-h2'>Electric Wilds</h1>
          <span>TM</span>
        </div>
        <div className='uhuyfbnx gtdv5sfdj-div'>
          <div className='uhuyfbnx-header'>
            <div className='staybgf'>
              <span>Rate this game: </span>
              <img src={star} alt="" />
              <span>(0)</span>
            </div>
            <div className='staybgfsf'>
              <button className='gtdv5sfdj-btn'><img src={refresh} alt="" />Refresh</button>
              <button className='gtdv5sfdj-btn'><img src={fullscreen} alt="" />Fullscreen</button>
              <button className='gtdv5sfdj-btn'><img src={report} alt="" />Report</button>
            </div>
          </div>
          <div className="gametgd mt-4">
            {!showGame ? (
              <img
                src={gameimg}
                alt="Electric Wilds Game"
                onClick={() => setShowGame(true)}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <iframe
                src="https://d2drhksbtcqozo.cloudfront.net/casino/games-mt/megaflip/index.html?gameid=megaflip&jurisdiction=MT&channel=web&moneymode=fun&partnerid=1"
                width="100%"
                height="600"
                padding="0px 20px"
                frameBorder="0"
                allowFullScreen
                title="Electric Wilds Game"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Game
