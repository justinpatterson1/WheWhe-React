import React from 'react'
import MarkContext from '../context/MarkContext';
import { useContext } from 'react';
import Mark from "../components/Mark"

const DisplayBox = () => {
    const {mark} = useContext(MarkContext);
    return (
        <div>
            <div id="display-box">
                Numbers Selected:
                {
                  mark.map((mark)=>(<Mark key={mark.id} amount={mark.amount}/> ))
                }
            </div>
        </div>
    )
}

export default DisplayBox
