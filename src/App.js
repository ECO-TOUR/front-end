import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Login from './Component/Login/Login';
import Agreement from './Component/Agreement/Agreement'
import Home from './Component/Main/Home';
// import Mypage from './component/Mypage/Mypage.js';

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/agreement" element={<Agreement />} />
            <Route path="/main" element={<Home />} />
            {/* <Route path="/mypage" element={<Mypage />} /> */}
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
