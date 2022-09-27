import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg" aria-label="Tenth navbar example">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/" pathto='/' className="nav-link active" aria-current="page" href="#">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="movies" className="nav-link" href="#">Movies</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="users"className="nav-link">Users</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </div>
    );
};

export default Navbar;