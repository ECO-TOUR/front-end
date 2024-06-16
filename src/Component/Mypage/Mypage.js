import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const NameTag = (props) => {
    return (
        <div className='container' style={{ border: '1px solid black', height: '60px'}}>
            <div className='row'>
                <div className='col-4'>
                    사진
                </div>
                <div className='col-8'>
                    <div>{props.name ? props.name : '000'}님 안녕하세요!</div>
                    <div>내 정보 수정</div>
                </div>
            </div>
        </div>
    )
}

const PostList = () => {
    return (
        <div className='container' style={{ border: '1px solid black', height: '60px' }}>
            <div className='row'>
                <div className='col-8'>
                    내가쓴 글
                </div>
                <div className='col-4'> 더 보기</div>
            </div>
        </div>
    )
}

const Settings = () => {
    return (
        <div className='container' style={{ border: '1px solid black', height: '100px' }}>
            <div className='row'>설정</div>
            <div className='row'>
                <div>알림</div>
                <div>다크모드</div>
            </div>
        </div>
    )
}

const ServiceManage = () => {
    return (
        <div className='container' style={{ border: '1px solid black', height: '150px' }}>
            <div className='row'>서비스 관리</div>
            <div className='row'>
                <div>공지사항</div>
                <div>문의</div>
                <div>로그아웃</div>
                <div>회원탈퇴</div>
            </div>
        </div>
    )
}

const Mypage = () => {
    return (
        <div>
            <h1>Mypage</h1>
            <NameTag />
            <PostList />
            <Settings />
            <ServiceManage />
        </div>
    )
}

export default Mypage