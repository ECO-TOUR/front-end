import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      Main페이지
      <br/>
      <Link to="/mypage">Go To Mypage</Link>
    </div>
  );
}

export default Home;
