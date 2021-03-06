import React from 'react';
import { Button, Divider } from 'antd';
import './MyPage.css';

function MyPageMenu(props) {
    
    const welcome = () => {
        return (
        <div>
            <span style={{ fontSize: '20px' }}><strong>{localStorage.getItem('userName')}</strong>님, 환영합니다.</span>
            <Button
                type="primary"
                style={{ marginLeft: '1.5%', backgroundColor: "#1f294f", borderColor: "#1f294f" }}
                href="/mypage/edit">
            개인 정보 수정
            </Button>
            <Divider />
        </div>
        )
    }
    
    if(props.title) {
        return (
            <div>
                {welcome()}
                <div className="mylist" style={{ marginTop: '1%' }}>
                    <div>
                        <a href="/mypage/opinion">
                            <span style={{ fontSize: '21px', color: '#b3b3b3' }}>작성한 의견</span>
                        </a>
                        <h2 style={{ display: 'inline', marginLeft: '1%', marginRight: '1%' }}> | </h2>
                        <a href="/mypage/title">
                            <span style={{ fontSize: '21px', color: '#1f294f', fontWeight: '750' }}>작성한 주제</span>
                        </a>
    
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                {welcome()}
                <div className="mylist" style={{ marginTop: '1%' }}>
                    <div>
                        <a href="/mypage">
                            <span style={{ fontSize: '21px', color: '#1f294f', fontWeight: '750' }}>작성한 의견</span>
                        </a>
                        <h2 style={{ display: 'inline', marginLeft: '1%', marginRight: '1%' }}> | </h2>
                        <a href="/mypage/title">
                            <span style={{ fontSize: '21px', color: '#b3b3b3' }}>작성한 주제</span>
                        </a>
    
                    </div>
                </div>
            </div>
        )
    }
    
}

export default MyPageMenu
