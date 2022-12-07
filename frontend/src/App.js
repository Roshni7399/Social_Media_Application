import './App.css';
import IdleTimerContainer from './Components/IdleTimerContainer';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Signin from './pages/Auth/Signin';

function App() {
  return (
    <>
     {/* <IdleTimerContainer/> */}
     <div className="blur" style={{top:'-18%', right:'0'}} ></div>
     <div className="blur" style={{top:'36%', left:'-8rem'}}></div>
     {/* <Home/> */}
     <Profile/>
     {/* <Auth/> */}
     {/* <Signin/> */}
     
    </>
  );
}

export default App;
