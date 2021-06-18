import React from 'react';
import { useContext } from 'react';
import MarkContext from '../context/MarkContext';

const Mark = (props) => {
    const {mark} = useContext(MarkContext)
    return (
        <div>
            Mark:{props.amount}
        </div>
    )
}

Mark.setDefaultProps = {
    amount:0
}
export default Mark
