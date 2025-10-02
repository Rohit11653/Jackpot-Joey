import React, { useEffect, useState } from 'react'
import star from '../assets/images/star.png'
import refresh from '../assets/images/refresh.svg'
import fullscreen from '../assets/images/fullscreen.svg'
import report from '../assets/images/report.svg'
import gameimg from '../assets/images/gameimg.png'
import { useParams } from 'react-router-dom'

function Game() {
  const { id } = useParams()
  const [showGame, setShowGame] = useState(false);
  const [iframePath, setIframePath] = useState("");
  
  const gameIframeLinks = [
    {
      id: 1,
      url: "https://d2drhksbtcqozo.cloudfront.net/casino/games-mt/marchinglegions/index.html?gameid=marchinglegions&jurisdiction=MT&channel=web&moneymode=fun&partnerid=1"
    },
    {
      id: 2,
      url: "https://d2drhksbtcqozo.cloudfront.net/casino/games-mt/electricwilds/index.html?gameid=electricwilds&jurisdiction=MT&channel=web&moneymode=fun&partnerid=1"
    },
    {
      id: 3,
      url: "https://d2drhksbtcqozo.cloudfront.net/casino/games-mt/megaflip/index.html?gameid=megaflip&jurisdiction=MT&channel=web&moneymode=fun&partnerid=1"
    },
    {
      id: 4,
      url: "https://d2drhksbtcqozo.cloudfront.net/casino/games-mt/royalmint/index.html?gameid=royalmint&jurisdiction=MT&channel=web&moneymode=fun&partnerid=1"
    },
    {
      id: 5,
      url: "https://d2drhksbtcqozo.cloudfront.net/casino/games-mt/1000xbusta/index.html?gameid=1000xbusta&jurisdiction=MT&channel=web&moneymode=fun&partnerid=1"
    }
  ];
  useEffect(() => {
    if (!id) return
    const game = gameIframeLinks?.find(game => game?.id == id)
    console.log("game", game)
    setIframePath(game.url)
  }, [id])
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
            {showGame ? (
              <img
                src={gameimg}
                alt="Electric Wilds Game"
                onClick={() => setShowGame(true)}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <iframe
                src={iframePath}
                 width="100%"
                height="640"
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
