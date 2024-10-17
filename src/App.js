import './App.css';
import Nav from './Component/Nav/Nav';
import Writepost from './Component/Post/Writpost';
import Cardlist from './Component/Home/Cardlist';
import Login from './Component/Log/Login';
import NavH from './Component/Nav/NavH';
import { Routes , Route } from 'react-router-dom';
import EditPost from './Component/Profile/EditPost'
import Slide from './Component/Home/Slide';
import Article from './Component/Article/Article';
import Signup from './Component/Log/Signup';
import Footer from './Component/Footer/Footer';
import Profile from './Component/Profile/Profile';
import Edit from './Component/Profile/EditProfile';
import AuthProvider from './Context/AuthContext';
import RequiredAuth from './Context/RequireAuth';
function App() {


  return (
    <div className="App">
      
      <AuthProvider>   
        <Routes > 

        <Route path='signin' element={ <>  <NavH/> <Signup/> </>} />
        <Route path='login' element={ <> <NavH/> <Login/> </>}/>

        <Route path='writepost' element={ <> <RequiredAuth>   < Nav /> <Writepost/>  </RequiredAuth>  </>} /> 
        <Route path='/' element={  <>  <RequiredAuth>   < Nav /> <Slide/> <Cardlist/>  <Footer/>  </RequiredAuth> </>} /> 
        <Route path='profile' element={<> <RequiredAuth>  <Nav/> <Profile/>  </RequiredAuth> </> }/>
        <Route path='/article/:id' element={<>
          <RequiredAuth>  <Nav/> <Article/>  </RequiredAuth>   </> }/> 
        <Route path='editprofile' element={ <> <RequiredAuth> <Nav/> <Edit/> </RequiredAuth> </>} />
        <Route path="/editpost/:id" element={<RequiredAuth>  <Nav/> <EditPost /> <Footer/> </RequiredAuth>} />

        </Routes>
        </AuthProvider>
    </div>
  );
}

export default App;







