import React,{useContext} from 'react'
import TicketContext from '../context/TicketContext'
import MarkContext from '../context/MarkContext';
import CashContext from '../context/CashContext';
import ButtonsContext from '../context/ButtonsContext';
import ReceivedCashContext from '../context/ReceivedCashContext';
import ChangeContext from '../context/ChangeContext';
import Mark from '../components/Mark';

const Ticket = () => {

    const{ticket,setTicket} = useContext(TicketContext);
    const{buttons,setButtons} = useContext(ButtonsContext);
    const{mark,setMark} = useContext(MarkContext);
    const {cash,setCash} = useContext(CashContext);
    const {receivedCash,setReceivedCash} = useContext(ReceivedCashContext);
    const {change,setChange} = useContext(ChangeContext)


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
        <div id="ticket" className={ticket.visible===false?"hide grid col-1":"grid col-1"}>
        <div >
            <div id="ticket-header"><h1>Ticket</h1></div>
            <div id="ticket-body" className="grid col-1">
                  <div>
                        {
                            mark.map((mark)=>(<Mark key={mark.id} amount={mark.amount}/>)) 
                        }
                      <div id="total-div" >
                          Total:${cash}<br/>
                          Received Cash:${receivedCash}<br/>
                          Change:${change}
                    </div> 
                    </div> 
                   
                <div>
                    <button id="close-tic" onClick={()=>{
                        setTicket({visible:false});
                        totalReset();
                        setReceivedCash(0);
                        setChange(0);
                    }}>Close</button>

                    {/*<button className="hide" id="print-tic" onClick={()=>{
                        window.print();
                    }}>Print</button>*/}
                </div>
            </div>

        </div>
        
    </div>
    )
}

export default Ticket
