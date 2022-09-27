import React from 'react';

const spinner = () => {
    return (
        <div className="d-flex justify-content-center mb-3">
            <div className="spinner-border text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default spinner;