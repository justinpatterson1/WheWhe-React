import React,{useContext} from 'react';
import MarkContext from '../context/MarkContext';
import Buttons from '../components/Buttons';
import ButtonsContext from '../context/ButtonsContext'


const MarkButtons = () => {
    const {buttons} = useContext(ButtonsContext);
    const{mark,setMark} = useContext(MarkContext);

  

  console.log(mark)
   

    return (
        <div id="mark-div">
                  <div id="button-div" class="grid col-4">
                   {/* <button disabled={disablebutton()} value={1} onClick={(event)=>{setMark([...mark,event.target.value])}}>1</button>
                    <button disabled={disablebutton()} value={2} onClick={(event)=>{setMark([...mark,event.target.value])}}>2</button>
                    <button disabled={disablebutton()} value={3} onClick={(event)=>{setMark([...mark,event.target.value])}}>3</button>
                    <button disabled={disablebutton()} value={4} onClick={(event)=>{setMark([...mark,event.target.value])}}>4</button>
                    <button disabled={disablebutton()} value={5} onClick={(event)=>{setMark([...mark,event.target.value])}}>5</button>
                    <button disabled={disablebutton()} value={6} onClick={(event)=>{setMark([...mark,event.target.value])}}>6</button>
                    <button disabled={disablebutton()} value={7} onClick={(event)=>{setMark([...mark,event.target.value])}}>7</button>
                    <button disabled={disablebutton()} value={8} onClick={(event)=>{setMark([...mark,event.target.value])}}>8</button>
                    <button disabled={disablebutton()} value={9} onClick={(event)=>{setMark([...mark,event.target.value])}}>9</button>
                    <button disabled={disablebutton()} value={10} onClick={(event)=>{setMark([...mark,event.target.value])}}>10</button>
                    <button disabled={disablebutton()} value={11} onClick={(event)=>{setMark([...mark,event.target.value])}}>11</button>
                    <button disabled={disablebutton()} value={12} onClick={(event)=>{setMark([...mark,event.target.value])}}>12</button>
                    <button disabled={disablebutton()} value={13} onClick={(event)=>{setMark([...mark,event.target.value])}}>13</button>
                    <button disabled={disablebutton()} value={14} onClick={(event)=>{setMark([...mark,event.target.value])}}>14</button>
                    <button disabled={disablebutton()} value={15} onClick={(event)=>{setMark([...mark,event.target.value])}}>15</button>
                    <button disabled={disablebutton()} value={16} onClick={(event)=>{setMark([...mark,event.target.value])}}>16</button>
                    <button disabled={disablebutton()} value={17} onClick={(event)=>{setMark([...mark,event.target.value])}}>17</button>
                    <button disabled={disablebutton()} value={18} onClick={(event)=>{setMark([...mark,event.target.value])}}>18</button>
                    <button disabled={disablebutton()} value={19} onClick={(event)=>{setMark([...mark,event.target.value])}}>19</button>
    <button disabled={disablebutton()} value={20} onClick={(event)=>{setMark([...mark,event.target.value])}}>20</button>*/}
                    {
                       buttons.map((button)=>(<Buttons key={button.id} id={button.id} num={button.value} borderColor={button.color}/>)) 
                    }
                </div>
                <div class="grid col-2">
                    <button class="actionBtn">CASH</button>
                    <button class="actionBtn">CLEAR</button>
                </div>
        </div>
    )
}

export default MarkButtons
