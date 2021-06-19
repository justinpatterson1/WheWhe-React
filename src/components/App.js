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
