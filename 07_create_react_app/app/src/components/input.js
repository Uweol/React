import React from 'react';

const input = ({type, placeholder, onChange, value, ref, errorMessage}) => {
    return (
        <div>
           <input ref={ref} type="type" placeholder={placeholder} value={value} onChange={onChange}/>
           <div style={{color: 'red', fontSize: '12px', marginBottom: '10px'}}>{errorMessage}</div>
        </div>
    );
};

export default input;