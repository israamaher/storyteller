import './App.css';
import Nav from './Component/Nav/Nav';
import Writepost from './Component/Post/Writpost';
import Cardlist from './Component/Home/Cardlist';
import Login from './Component/Log/Login';
import NavH from './Component/Nav/NavH';
import { Routes , Route } from 'react-router-dom';

import Slide from './Component/Home/Slide';
import Artical from './Component/Artical/Artical';
import Signup from './Component/Log/Signup';
import Footer from './Component/Footer/Footer';
import Profile from './Component/Profile/Profile';
function App() {


  return (
    <div className="App">
      

        <Routes > 
        < Route path='writepost' element={ <>  < Nav /> <Writepost/>  </>} /> 
        < Route path='/' element={  <>  < Nav /> <Slide/> <Cardlist/>  <Footer/> </>} /> 
        <Route path='signin' element={ <>  <NavH/> <Signup/> </>} />
        <Route path='login' element={ <> <NavH/> <Login/> </>}/>
        <Route path='profile' element={<> <Nav/> <Profile/>  </> }/>
        <Route path='profile' element={<> <Nav/> <Artical/>  </> }/>
        </Routes>
      
    </div>
  );
}

export default App;







