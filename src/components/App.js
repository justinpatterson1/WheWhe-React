import '../css/App.css';
import MarkButtons from "../components/MarkButtons";
import CashButtons from "../components/CashButton";
import DisplayBox from "../components/DisplayBox";
import Header from "../components/Header";
import MarkContext from '../context/MarkContext';
import ButtonsContext from '../context/ButtonsContext';
import{useState} from 'react';


function App() {

  const [mark, setMark] = useState([]);
  const [buttons,setButtons]=useState([
    {
      id:1,
      value:1,
      enabled:true
    },
    {
      id:2,
      value:2,
      enabled:true
    },
    {
      id:3,
      value:3,
      enabled:true
    },
    {
      id:4,
      value:4,
      enabled:true
    },
    {
      id:5,
      value:5,
      enabled:true
    },
    {
      id:6,
      value:6,
      enabled:true
    },
    {
      id:7,
      value:7,
      enabled:true
    },
    {
      id:8,
      value:8,
      enabled:true
    },
    {
      id:9,
      value:9,
      enabled:true
    },
    {
      id:10,
      value:10,
      enabled:true
    },
    {
      id:11,
      value:11,
      enabled:true
    },
    {
      id:12,
      value:12,
      enabled:true
    },
    {
      id:13,
      value:13,
      enabled:true
    },
    {
      id:14,
      value:14,
      enabled:true
    },
    {
      id:15,
      value:15,
      enabled:true
    },
    {
      id:16,
      value:16,
      enabled:true
    },
    {
      id:17,
      value:17,
      enabled:true
    },
    {
      id:18,
      value:18,
      enabled:true
    },
    {
      id:19,
      value:19,
      enabled:true
    },
    {
      id:20,
      value:20,
      enabled:true
    }

  ])
  return (
    <div id="body">
      <MarkContext.Provider value={{mark,setMark}}>

      
        <Header/>
        <div className="grid col-3">
              <CashButtons/>
          <ButtonsContext.Provider value={{buttons,setButtons}}>
              <MarkButtons/>
          </ButtonsContext.Provider>
              
              <DisplayBox/>
        </div>
        </MarkContext.Provider>
    </div>
  );
}

export default App;
