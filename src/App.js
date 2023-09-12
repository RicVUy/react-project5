
import NavBar from "./components/NavBar";
import UserNamePassword from "./components/UserNamePassword";
import ShowAddTime from "./components/ShowAddTime";
import TimeInCapture from "./components/TimeInCapture";
import TimeOutCapture from "./components/TimeOutCapture";
function App() {
  return (
    <>
    <div className="App">
     <NavBar/>
     <UserNamePassword/>
    </div>
    <div className="show-add-time">
      <ShowAddTime/>
    </div>
    <div className="date-time-capture">
      <TimeInCapture/>
    </div>
    <div className="time-out-capture">
      <TimeOutCapture/>
    </div>
    </>
  );
}

export default App;
