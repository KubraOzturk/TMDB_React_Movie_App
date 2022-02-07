import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { MdDarkMode } from 'react-icons/md';
import {SiThemoviedatabase} from "react-icons/si";
import {BiCameraMovie, BiMoviePlay} from "react-icons/bi";

function Navbar(props) {
  return (
    <> <div className='container-fluid text-light' style={{backgroundColor:"#1e272e"}}>
      <div className="container  text-light">
        <header className="p-3 mb-3 border-bottom">
          <div className="container">
            <div className="d-flex flex-wrap align-items-start justify-content-between">
              <div className="d-flex link-light text-light">
                <Link
                  to=""
                  className="nav-link px-2 justify-content-start link-light"
                >
                  {' '}
                  {/* <SiThemoviedatabase/> */}
                  <BiMoviePlay/>
                  {' '}
                  Home
                </Link>
                <Link to="popular" className="nav-link px-2 link-light">
                  {' '}
                  Popular
                </Link>
                <Link to="toprated" className="nav-link px-2 link-light">
                  Top Rated
                </Link>
                </div>
                <div>
                <Link
                  to="login"
                  className="d-block link-dark text-decoration-none dropdown-toggle justify-content-end text-end"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/KubraOzturk.png"
                    alt="mdo"
                    width="30"
                    height="30"
                    className="rounded-circle"
                  />
                </Link>
                </div>
            </div>
          </div>
        </header>
      </div>
      </div>
    </>
  );
}

export default Navbar;
