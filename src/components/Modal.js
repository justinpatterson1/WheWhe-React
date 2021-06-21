import React,{useContext,useState} from 'react'
import ModalContext from '../context/ModalContext'
import CashContext from '../context/CashContext'
import TicketContext from '../context/TicketContext'

const Modal = () => {

    const {register,setRegister} = useContext(ModalContext);
    const {setTicket} = useContext(TicketContext);
    const {cash} = useContext(CashContext)
    const [receivedCash,setReceivedCash] = useState(0);
    const [change,setChange] = useState(0);
    const [currentCash,setCurrentCash] = useState(0);



    const addCash = (val)=>
    {
        if(receivedCash == 0)
        {
            setReceivedCash(val);
            
        }
        else{
            let cashAmount = receivedCash;
            cashAmount = cashAmount + val;
            setReceivedCash(parseInt(cashAmount));
            changeReturn();
        }
        changeReturn();
      
    }


    const cents = ()=>
    {   
        let cash = receivedCash + "."
        setReceivedCash(cash)
    }


    const changeReturn = ()=>
    {
        let returnAmt = receivedCash - cash;
        setChange(returnAmt);
        
    }



    return (
        <div id="modal" className={register.visible===false?"hide grid col-1" : "grid col-1"}>
        <div id="register-body">
            <div id="register-heading">
                <h1>Cashier</h1>
            </div>
            <div id="register-main">
                <div className="grid col-2">
                    <div>
                        <h3>Enter Amount Received</h3>
                        <div>Total:${cash}.00</div>
                        <div>Received:${receivedCash}</div>
                        <div>Change:${change}</div>
                        <div className="register-action-btn">
                            <button onClick={()=>{
                                setTicket({visible:true});
                                setRegister({visible:false})
                            }}>Confirm</button>


                            <button onClick={()=>{
                                setRegister({visible:false})
                            }}>Close</button>

                        </div>
                    </div>
                    <div className="grid col-3">
                        <button value='1' className="register-btn" onClick={(event)=>{
                            setReceivedCash(event.target.value);
                            addCash(event.target.value);
                            
                            
                        }}>1</button>

                        <button value='2' className="register-btn" onClick={(event)=>{
                            setReceivedCash(event.target.value);
                            addCash(event.target.value);
                            
                            
                        }}>2</button>

                        <button value='3' className="register-btn" onClick={(event)=>{
                            setReceivedCash(event.target.value);
                            addCash(event.target.value);
                            
                            
                        }}>3</button>

                        <button value='4' className="register-btn" onClick={(event)=>{
                            setReceivedCash(event.target.value);
                            addCash(event.target.value);
                        
                            
                        }}>4</button>

                        <button value='5' className="register-btn" onClick={(event)=>{
                            setReceivedCash(event.target.value);
                            addCash(event.target.value);
                            
                            
                        }}>5</button>

                        <button value='6' className="register-btn" onClick={(event)=>{
                            setReceivedCash(event.target.value);
                            addCash(event.target.value);
                        
                        }}>6</button>

                        <button value='7' className="register-btn" onClick={(event)=>{
                            setReceivedCash(event.target.value);
                            addCash(event.target.value);
                            
                        }}>7</button>

                        <button value='8' className="register-btn" onClick={(event)=>{
                            setReceivedCash(event.target.value);
                            addCash(event.target.value);
                            
                        }}>8</button>

                        <button value='9' className="register-btn" onClick={(event)=>{
                            setReceivedCash(event.target.value);
                            addCash(event.target.value);
                    
                        }}>9</button>

                        <button value='.' className="register-btn" onClick={()=>{
                            cents();
                        }}>.</button>

                        <button value='0' className="register-btn" onClick={(event)=>{
                            setReceivedCash(event.target.value);
                            addCash(event.target.value);
                            
                        }}>0</button>

                        <button className="register-btn" onClick={()=>{
                            setReceivedCash(0);
                            setChange(0);
                        }}>C</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Modal
