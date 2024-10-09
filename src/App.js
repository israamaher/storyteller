
import './App.css';
import Nav from './Component/Nav/Nav';
import Writepost from './Component/Post/Writpost';
import Signin from './Component/Log/Signin';
import Cardlist from './Component/Home/Cardlist';
import Login from './Component/Log/Login';
import NavH from './Component/Nav/NavH';
import { Routes , Route } from 'react-router-dom';
import Cardprofile from './Component/Profile/CardProfile';
import Slide from './Component/Home/Slide';
import Artical from './Component/Artical/Artical';

function App() {
  return (
    <div className="App">
      

        <Routes > 
        < Route path='writepost' element={ <>  < Nav /> <Writepost/>  </>} /> 
        < Route path='/' element={  <>  < Nav /> <Slide/> <Cardlist/>  </>} /> 
        <Route path='signin' element={ <>  <NavH/> <Signin/> </>} />
        <Route path='login' element={ <> <NavH/> <Login/> </>}/>
        <Route path='profile' element={<> <Nav/> <Cardprofile/>  </> }/>
        <Route path='profile' element={<> <Nav/> <Artical/>  </> }/>
        </Routes>
      
    </div>
  );
}

export default App;
