import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/idex";
import Menu from "./components/menu";
import Home from "./pages/Home/idex";
import Inscription from "./pages/Inscription/idex";
import {Shorts} from "./pages/Shorts/idex";
import { UserStorage } from "./context/userContext";
import Login from "./pages/login/login";
import CreateAccount from "./pages/createAccount/createAccount";
import 'react-toastify/dist/ReactToastify.css';
import { Toastify } from "./components/toast/toast";
import Chanel from "./pages/chanel";
import CreateVideo from "./pages/gerenciador de videos";
import { VideoStorage } from "./context/videoContext";
import SearchPage from "./pages/search";

function App() {

  return (
      <UserStorage>
          <VideoStorage>
            <BrowserRouter>
              <div className="App" style={{width: '100%', display: 'flex'}}>  
                  {/* <Header />
                    <div style={{ width: '100%', display: 'flex' }}>
                        <Menu />
                      <div style={{width: '100%', padding: '50px 70px', boxSizing: 'border-box'}}> */}
                        <Routes>
                          <Route path="/" element={<Home />}/>
                          <Route path="/shorts" element={<Shorts />}/>
                          <Route path="/inscrições" element={<Inscription />}/>  
                          <Route path="/login" element={<Login />}/>                
                          <Route path="/createAccount" element={<CreateAccount />}/>
                          <Route path="/channel" element={<Chanel />} />
                          <Route path="/createVideo" element={< CreateVideo/>} />                        
                          <Route path="/search" element={< SearchPage/>} />                        
                        </Routes>
                      {/* </div> */}
                    {/* </div> */}
                  <Toastify />
              </div>
            </BrowserRouter>
          </VideoStorage>
      </UserStorage>
  );
}

export default App;
