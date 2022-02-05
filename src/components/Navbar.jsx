import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { MdDarkMode } from 'react-icons/md';
import Popular from './Popular';
import TopRated from './TopRated';
import Home from './Home';
// SLUG
// const navRoutes = [
//   { title: 'Ana Sayfa', path: '/', element: <Home />, isNav: true },
//   { title: 'Top Rated', path: 'toprated', element: <TopRated />, isNav: true },
//   { title: 'Popular', path: 'popular', element: <Popular /> },
// ];
function Navbar(props) {
  return (
    <>
      <div className="container">
        <header className="p-3 mb-3 border-bottom">
          <div className="container">
            <div className="d-flex flex-wrap align-items-start justify-content-start justify-content-lg-start">
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <Link
                  to=""
                  className="nav-link px-2 link-dark justify-content-start"
                >
                  {' '}
                  UP School
                </Link>
                <Link to="popular" className="nav-link px-2 link-dark">
                  {' '}
                  Popular
                </Link>
                <Link to="toprated" className="nav-link px-2 link-dark">
                  Top Rated
                </Link>
                <Link
                  to="login"
                  className="d-block link-dark text-decoration-none dropdown-toggle justify-content-end"
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
              </ul>
            </div>
          </div>
        </header>
        {/* <div className="d-flex align-items-center justify-content-center ">
          <form className="col-8 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </div> */}
      </div>
    </>
  );
}

export default Navbar;
