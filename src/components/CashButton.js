import React,{useContext} from 'react'
import lotteryBall from "../images/lotteryBall.png"
import CashContext from '../context/CashContext'
import ScreenContext from '../context/ScreenContext'

const CashButton = () => {

    const{cash,setCash} = useContext(CashContext);
    

    const addCash = (val)=>
    {
        let cashAmount = parseInt(cash);
         cashAmount = cashAmount + parseInt(val);

         setCash(cashAmount);
         
    }

    return (
        <div id="cash">
            <div><img src={lotteryBall}/> </div>
                <div id="cash-div" className="grid col-2">
                    <button value='1' className="cashBtn" onClick={(event)=>{
                        addCash(parseInt(event.target.value))
                
                       
                    }}>$1</button>

                    <button value='5' className="cashBtn" onClick={(event)=>{

                        addCash(parseInt(event.target.value))
                        

                    }}>$5</button>

                    <button value='10' className="cashBtn" onClick={(event)=>{

                           addCash(parseInt(event.target.value))
                           

                    }}>$10</button>

                    <button value='20' className="cashBtn" onClick={(event)=>{

                           addCash(parseInt(event.target.value))
                           
                           
                    }}>$20</button>
                </div>
        </div>
    )
}

export default CashButton
