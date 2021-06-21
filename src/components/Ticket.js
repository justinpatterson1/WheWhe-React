import React,{useContext} from 'react'
import TicketContext from '../context/TicketContext'
import Mark from '../components/Mark';

const Ticket = () => {

    const{ticket,setTicket} = useContext(TicketContext);
    return (
        <div id="ticket" className={ticket.visible===false?"hide grid col-1":"grid col-1"}>
        <div >
            <div id="ticket-header"><h1>Ticket</h1></div>
            <div id="ticket-body" className="grid col-1">
                    <Mark/>
                <div>
                    <button onClick={()=>{
                        setTicket({visible:false});
                    }}>Close</button>
                </div>
            </div>

        </div>
        
    </div>
    )
}

export default Ticket
