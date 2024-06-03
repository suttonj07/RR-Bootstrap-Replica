import './App.css';
import NavBar from './components/NavBar'
import Addresses from './components/Addresses'
import Stores from './components/Stores'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Addresses />
      <Stores />
    </div>
  );
}

export default App;
