import Header from "./Components/Header/Header1";
import './App.css'
import Sidebar from "./Components/sidebar/Sidebar";
function App() {
  return (
    <div className="App">

      <Header />
      <div className="main">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
