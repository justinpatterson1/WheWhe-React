import React from 'react'
import MarkContext from '../context/MarkContext';
import { useContext } from 'react';
import Mark from "../components/Mark"

const DisplayBox = () => {
    const {mark} = useContext(MarkContext);
    return (
        <div>
            <div id="display-box" className="grid col-1">
                Numbers Selected:
                {
                  mark.map((mark)=>(<Mark key={mark.id} amount={mark.amount}/> ))
                }
                <div id="total-div">
                    Total:
                </div>
            </div>
            
        </div>
    )
}

export default DisplayBox
