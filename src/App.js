import Header from "./Components/Header/Header1";
import './App.css'
import Sidebar from "./Components/sidebar/Sidebar";
import Feed from "./Components/feed/Feed";
import RightBar from "./rightBar/RightBar";
function App() {
  return (
    <div className="App">

      <Header />
      <div className="main">
        <Sidebar />
        <Feed />
        <RightBar />
      </div>
    </div>
  );
}

export default App;
