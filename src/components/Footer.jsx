import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className=" text-center text-lg-start align-items-center fixed-bottom">
    
      <div className="d-flex justify-content-between p-3">
       
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-circle-left"></i> back
        </button>
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © <a className="text-body" href="https://krimsonsquad.tech/">Krimsonsquad.tech</a> 2024
        </div>
        {/* Forward Button - Right Side */}
        <button className="btn btn-secondary" onClick={() => navigate(1)}>
          <i className="fa-solid fa-circle-right"></i> forward
        </button>
      </div>

    </footer>
  );
}
