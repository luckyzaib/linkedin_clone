import Header from "./Components/Header/Header1";
import './App.css'
import Sidebar from "./Components/sidebar/Sidebar";
import Feed from "./Components/feed/Feed";
function App() {
  return (
    <div className="App">

      <Header />
      <div className="main">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
