import React from 'react';
import './Login.css';
import Ellipse41 from '../../assets/Ellipse 41.svg';
import Ellipse42 from '../../assets/Ellipse 42.svg';


function Login() {
  return (
    <div className="container">
      <div className="login_txt">자연과<br/>함께하는 여행</div>
      <div className="logo">ECO TOUR</div>
      <img src={Ellipse41} alt="Ellipse 41" className='e41'/>
      <img src={Ellipse42} alt="Ellipse 42" className='e42'/>
    </div>
  );
}

export default Login;
