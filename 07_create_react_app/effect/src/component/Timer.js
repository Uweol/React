import React, { useEffect } from 'react';

const Timer = () => {
    useEffect (() => {
        const timer = setInterval(() => {
            console.log('타이머가 움직이는 중...')
        },1000);
        // 카운터가 언마운트될 때 꼭 아래의 형식으로 써 줘야함.
        return () => {
            clearInterval(timer);
            console.log('타이머 종료')
        }
    })
    return (
        <div>
            <span>타이머(콘솔에서 확인합니다.)</span>
        </div>
    );
};

export default Timer;