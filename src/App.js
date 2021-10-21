import logo from './logo.svg';
import './App.css';
import MobileNav from './components/mobileNav/Mobilenav';
import HomePage from './components/Homepage/Homepage';


function App() {
  return (
    
     
    <div className="App">
      <div className="page-container">
      <HomePage/>
      <MobileNav/>
      </div>
  
   
    </div>
  );
}

export default App;
