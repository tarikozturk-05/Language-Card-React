
import './App.css';
import Card from './components/Card/Card';
import items from './helper/data';
import logo from './assets/react.svg'

function App() {
  return (
    
       <div >
        <img  className='logo' src={logo} alt="" />
      <Card items={items} />
       </div>  

    
    
    
    
    
    
    
  )
}

export default App;
