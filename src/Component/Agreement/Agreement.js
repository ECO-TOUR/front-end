import React from 'react';
import './Agreement.css';


function Agreement() {

  return (
    <div className="container">
      <div class="agreement_title">약관을 동의해주세요</div>
      <div class="agree_box">
        <div class="agreement_wrap">
          <div class="agree_btn"></div>
          <div class="agree_text">이용약관 동의 (필수)</div>
        </div>
        <div class="agree_line"></div>
        <div class="agreement_wrap">
          <div class="agree_btn"></div>
          <div class="agree_text">개인정보 수집 및 이용동의 (필수)</div>
        </div>
      </div>
    </div>
  );
}

export default Agreement;
