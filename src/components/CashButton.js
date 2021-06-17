import React from 'react'
import lotteryBall from "../images/lotteryBall.png"

const CashButton = () => {
    return (
        <div id="cash">
            <div><img src={lotteryBall}/> </div>
                <div id="cash-div" className="grid col-2">
                    <button className="cashBtn">$1</button>
                    <button className="cashBtn">$5</button>
                    <button className="cashBtn">$10</button>
                    <button className="cashBtn">$20</button>
                </div>
        </div>
    )
}

export default CashButton
