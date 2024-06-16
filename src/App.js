import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Login from './component/Login/Login';
import Agreement from './component/Agreement/Agreement'
import Home from './component/Main/Home';
// import Mypage from './component/Mypage/Mypage.js';

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>EAD
            <Route path="/" element={<Login />} />
            <Route path="/agreement" element={<Agreement />} />
            {/* <Route path="/mypage" element={<Mypage />} /> */}
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
