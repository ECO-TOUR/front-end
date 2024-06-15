import React from 'react'


const NameTag = (props) => {
    return (
        <div className='container'>
            <div className='row' style={{ border: '1px solid black' }}>
                <div className='col-4'>
                    사진
                </div>
                <div className='col-8'>
                    <div>{props.name ? props.name : '000'}님 안녕하세요!</div>
                    <div>내 정보 수정</div>
                </div>
            </div>
            <div className='row' style={{ border: '1px solid black' }}>
                <div className='col-8'>
                    내가 쓴 글
                </div>
                <div className='col-4'> 더 보기</div>
            </div>
        </div>
    )
}

const PostList = () => {
    return (
        <div className='container' style={{ border: '1px solid black' }}>
            <div className='row'>
                <div className='col-8'>
                    내가쓴 글
                </div>
                <div className='col-4'> 더 보기</div>
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
        </div>
    )
}

export default Mypage