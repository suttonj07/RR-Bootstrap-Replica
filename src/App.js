import './App.css';
import NavBar from './components/NavBar'
import Addresses from './components/Addresses'
import StoreListings from './components/StoreListings'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Addresses />
      <StoreListings />
    </div>
  );
}

export default App;
