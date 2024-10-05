
import './App.css';
import Nav from './Component/Nav';
import Writepost from './Component/Writpost';
import Signin from './Component/Signin';
import Cardlist from './Component/Cardlist';
import Login from './Component/Login';
import NavH from './Component/NavH';
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      

        <Routes > 
        < Route path='writepost' element={ <>  < Nav /> <Writepost/>  </>} /> 
        < Route path='/' element={  <>  < Nav /> <Cardlist/>  </>} /> 
        <Route path='signin' element={ <>  <NavH/> <Signin/> </>} />
        <Route path='login' element={ <> <NavH/> <Login/> </>}/>
        </Routes>
      
    </div>
  );
}

export default App;
