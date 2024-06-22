import React, { useState } from 'react';
import './Agreement.css';
import Agreement_Arrow from '../../assets/agreement_arrow.svg';
import Agreement_Check from '../../assets/agree_check.svg';

function Agreement() {

  const [isAllClicked, setIsAllClicked] = useState(false);

  const allCheckBtnClick = () => {
    setIsAllClicked(!isAllClicked);
  };

  return (
    <div className="container">
      <div class="agreement_title">약관을 동의해주세요</div>
      <div class="agree_box">
        <div class="agreement_wrap">
          <div className={`agree_btn ${isAllClicked ? 'clicked' : ''}`} onClick={allCheckBtnClick}>
            <img src={Agreement_Check} className='agree_check'></img>
          </div>
          <div class="agree_text">약관 전체 동의</div>
        </div>
        <div class="agree_line"></div>
        <div>
          <div class="agreement_wrap">
            <div class="agree_btn"></div>
            <div class="agree_text">이용약관 동의 (필수)</div>
            <img src={Agreement_Arrow} className='agree_arrow'/>
          </div>
          <div class="agreement_wrap">
            <div class="agree_btn"></div>
            <div class="agree_text">개인정보 수집 및 이용동의 (필수)</div>
            <img src={Agreement_Arrow} className='agree_arrow'/>
          </div>
          <div class="agreement_wrap">
            <div class="agree_btn"></div>
            <div class="agree_text">만 14세 이상입니다 (필수)</div>
            <img src={Agreement_Arrow} className='agree_arrow'/>
          </div>
        </div>
        <div id="signUp_btn"><div id="signUp_btn_text">회원가입 완료하기</div></div>
      </div>
    </div>
  );
}

export default Agreement;
