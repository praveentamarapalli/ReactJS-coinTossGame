// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    isHeads: true,
    tossCount: 0,
    headCount: 0,
    tailCount: 0,
  }

  onClickToss = () => {
    const {isHeads, tossCount, headCount, tailCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        tossCount: prevState.tossCount + 1,
        headCount: prevState.headCount + 1,
        isHeads: true,
      }))
    }
    if (tossResult !== 0) {
      this.setState(prevState => ({
        tossCount: prevState.tossCount + 1,
        tailCount: prevState.tailCount + 1,
        isHeads: false,
      }))
    }
  }

  render() {
    const {isHeads, tossCount, headCount, tailCount} = this.state
    const heads = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    const tails = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    const imgUrl = isHeads ? heads : tails
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="hading">Coin Toss Game</h1>
          <p className="guess-text">Heads (or) Tails</p>
          <img src={imgUrl} alt="toss result" className="coin-img" />
          <br />
          <button
            type="button"
            className="toss-button"
            onClick={this.onClickToss}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total: {tossCount}</p>
            <p className="result">Heads: {headCount}</p>
            <p className="result">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
