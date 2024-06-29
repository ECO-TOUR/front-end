import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Login from './component/Login/Login.js';
import Agreement from './component/Agreement/Agreement.js'
import Home from './component/Main/Home.js';
import Mypage from './component/Mypage/Mypage.js';
import KeyWord from './Component/Onboarding/KeyWord';
import Mypage from './component/Mypage/Mypage.js';

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/agreement" element={<Agreement />} />
            <Route path="/key-word" element={<KeyWord />} />
            <Route path="/main" element={<Home />} />
            <Route path="/mypage" element={<Mypage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
