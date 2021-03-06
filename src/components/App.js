import '../css/App.css';
import MarkButtons from "../components/MarkButtons";
import CashButtons from "../components/CashButton";
import DisplayBox from "../components/DisplayBox";
import Header from "../components/Header";
import MarkContext from '../context/MarkContext';
import ButtonsContext from '../context/ButtonsContext';
import ScreenContext from '../context/ScreenContext';
import CashContext from '../context/CashContext';
import TicketContext from '../context/TicketContext';
import ModalContext from '../context/ModalContext';
import ReceivedCashContext from '../context/ReceivedCashContext';
import ChangeContext from '../context/ChangeContext'
import Modal from '../components/Modal';
import Ticket from '../components/Ticket'
import{useState} from 'react';


function App() {

  const [receivedCash,setReceivedCash] = useState(0);
  const [change,setChange] = useState(0);
  const [register,setRegister] = useState({visible:false});
  const [screen,setScreen] = useState({visible:false});
  const [ticket,setTicket] = useState({visible:false});
  const [cash,setCash] = useState(0);
  const [mark, setMark] = useState([]);
  const [buttons,setButtons]=useState([
    {
      id:1,
      value:1,
      enabled:true,
      color:""
    },
    {
      id:2,
      value:2,
      enabled:true,
      color:""
    },
    {
      id:3,
      value:3,
      enabled:true,
      color:""
    },
    {
      id:4,
      value:4,
      enabled:true,
      color:""
    },
    {
      id:5,
      value:5,
      enabled:true,
      color:""
    },
    {
      id:6,
      value:6,
      enabled:true,
      color:""
    },
    {
      id:7,
      value:7,
      enabled:true,
      color:""
    },
    {
      id:8,
      value:8,
      enabled:true,
      color:""
    },
    {
      id:9,
      value:9,
      enabled:true,
      color:""
    },
    {
      id:10,
      value:10,
      enabled:true,
      color:""
    },
    {
      id:11,
      value:11,
      enabled:true,
      color:""
    },
    {
      id:12,
      value:12,
      enabled:true,
      color:""
    },
    {
      id:13,
      value:13,
      enabled:true,
      color:""
    },
    {
      id:14,
      value:14,
      enabled:true,
      color:""
    },
    {
      id:15,
      value:15,
      enabled:true,
      color:""
    },
    {
      id:16,
      value:16,
      enabled:true,
      color:""
    },
    {
      id:17,
      value:17,
      enabled:true,
      color:""
    },
    {
      id:18,
      value:18,
      enabled:true,
      color:""
    },
    {
      id:19,
      value:19,
      enabled:true,
      color:""
    },
    {
      id:20,
      value:20,
      enabled:true,
      color:""
    }

  ])

 
  return (
    <div id="body">
      <MarkContext.Provider value={{mark,setMark}}>
        <ModalContext.Provider value={{register,setRegister}}>
         <CashContext.Provider value={{cash,setCash}}>
         <ButtonsContext.Provider value={{buttons,setButtons}}>
           <ReceivedCashContext.Provider value={{receivedCash,setReceivedCash}}>
              <ChangeContext.Provider value={{change,setChange}}>
          
           <TicketContext.Provider value={{ticket,setTicket}}>
                <Ticket/>
                <Modal/>
            </TicketContext.Provider>
                <Header/>
                <div id="front" className="grid col-3">
                  
                      <ScreenContext.Provider value={{screen,setScreen}}>
                            <CashButtons/>

                              
                      
                                          <MarkButtons/>
                                
                              

                      </ScreenContext.Provider>

                      <DisplayBox/>

                
                  
                </div>
                </ChangeContext.Provider>
                </ReceivedCashContext.Provider>
                </ButtonsContext.Provider>
                </CashContext.Provider>
            </ModalContext.Provider>
        </MarkContext.Provider>
    </div>
  );
}

export default App;
