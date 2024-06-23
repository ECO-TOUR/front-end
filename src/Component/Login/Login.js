import React from 'react';
import './Login.css';
import Ellipse41 from '../../assets/Ellipse 41.svg';
import Ellipse42 from '../../assets/Ellipse 42.svg';
import KakaoLoginBtn from '../../assets/kakao_login_medium_wide.svg';
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();

    const onclickLoginBtn = () => {
      //window.location.href = kakaoURL;
      navigate('/agreement');
    };

  return (
    <div className="container">
      <div className="login_txt">자연과<br/>함께하는 여행</div>
      <div className="logo">ECO TOUR</div>
      <img src={KakaoLoginBtn} alt="kakao_login_medium_wide" class="login_btn" onClick={onclickLoginBtn}/>
      <img src={Ellipse41} alt="Ellipse 41" className='e41'/>
      <img src={Ellipse42} alt="Ellipse 42" className='e42'/>
    </div>
  );
}

export default Login;
