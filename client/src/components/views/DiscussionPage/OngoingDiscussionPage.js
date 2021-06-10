import React from 'react';
import { Typography } from 'antd';
const { Title } = Typography;

function OngoingDiscussionPage() {

     return (
        <div style={{ textAlign: 'center', marginTop: '100px', marginBottom: '50px' }}>
            <Title level={3} style={{ width: '100%' }}> 현재 진행중인 토론
            </Title>
            <div className="ongoing-discussion-lists" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', width: '100%', minWidth: '60%', paddingLeft: '100px', paddingRight: '100px'}}>
                <div className="ongoing-discussion" style={{ display: 'flex', alignItems: 'center', width: '200px', height:'150px', background: '#F0F0F0', padding: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem', marginBottom: '1rem', marginLeft: '0.5rem', marginRight: '0.5rem'}}>
                    <h3><strong> 안락사, 허용해야 한다 </strong></h3>
                    <br />
                    <p>2021-05-22 | 16개의 의견 </p>
                </div>
            </div>
        </div>
    )
}

export default OngoingDiscussionPage
