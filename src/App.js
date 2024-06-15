import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './Component/Main/Home';
import Nametag from './Component/Mypage/nametag.js';
import Mypage from './Component/Mypage/Mypage.js';
function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mypage" element={<Mypage />} />
          </Routes>
          <Nametag />
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
