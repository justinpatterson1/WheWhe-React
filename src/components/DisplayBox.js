import React from 'react'
import MarkContext from '../context/MarkContext';
import { useContext } from 'react';
import Mark from "../components/Mark"
import CashContext from '../context/CashContext';

const DisplayBox = () => {
    const {mark} = useContext(MarkContext);
    const {cash} = useContext(CashContext);
    return (
        <div>
            <div id="display-box" className="grid col-1">
               <div>
               Numbers Selected:
                {
                  mark.map((mark)=>(<Mark key={mark.id} amount={mark.amount}/> ))
                }
               </div>
               
                <div id="total-div">
                    Total:${cash}
                </div>
            </div>
            
        </div>
    )
}

export default DisplayBox
