import React,{useContext} from 'react';
import MarkContext from '../context/MarkContext';
import Buttons from '../components/Buttons';
import ButtonsContext from '../context/ButtonsContext'
import ScreenContext from '../context/ScreenContext';
import CashContext from '../context/CashContext';
import ModalContext from '../context/ModalContext';




const MarkButtons = () => {
    const {screen,setScreen} = useContext(ScreenContext);
    const {buttons,setButtons} = useContext(ButtonsContext);
    const{mark,setMark} = useContext(MarkContext);
    const {cash,setCash} = useContext(CashContext);
    const {setRegister} = useContext(ModalContext)
    
    
    const totalReset = ()=>
    {
        setMark([]);
        setCash(0);
        buttonReset();
    }

    const buttonReset = ()=>
    {
       const allButtons = [...buttons];

       allButtons.forEach((btn)=>{
           btn.enabled = true;
           btn.color = "";
       })

       setButtons(allButtons);
    }
  
   

    return (
        <div id="mark-div">
                  <div id="btn-screen"  className={screen.visible == true?' ':'hide'}></div>
                  <div id="button-div" className="grid col-4">
                   
                    {
                       buttons.map((button)=>(<Buttons key={button.id} id={button.id} num={button.value} borderColor={button.color}/>)) 
                    }
                </div>
                <div className="grid col-2">
                    <button className="actionBtn" onClick={()=>{
                        if(mark.length != 5)
                        {
                            alert("You need to add 5 marks")
                           
                        }

                        if(cash === 0)
                        {
                            alert("Please select how much you money you want on the ticket")
                        }

                        if(mark.length ===5 && cash > 0)
                        {
                            setRegister({visible:true})
                        }
                       
                        
                      
                    }}>CASH</button>

                    <button className="actionBtn" onClick={()=>{
                        totalReset()
                    }}>CLEAR</button>
                </div>
        </div>
    )
}

export default MarkButtons
