import '../css/App.css';
import MarkButtons from "../components/MarkButtons";
import CashButtons from "../components/CashButton";
import DisplayBox from "../components/DisplayBox";
import Header from "../components/Header";


function App() {
  return (
    <div id="body">
        <Header/>
        <div className="grid col-3">
              <CashButtons/>
              <MarkButtons/>
              <DisplayBox/>
        </div>
    </div>
  );
}

export default App;
