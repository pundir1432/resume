import React, { useEffect, useState } from 'react';
import './Section.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`container-fluid header-bg ${scrolled ? 'scrolled' : ''}`}>
        <div className="row">
          <div className="col-12 border-0">
            <nav className={`navbar navbar-expand-lg ${scrolled ? 'bg-white' : 'header-bg'} fixed-top border-none`}>
              <div className="container-fluid">
                <button
                  className="navbar-toggler border-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse p" id="navbarSupportedContent">
                  <ul className="navbar-nav ps-5 mt-4 me-auto mb-2 mb-lg-0">
                    <li className="nav-item ps-5">
                      <a className="nav-link active ps-5" aria-current="page" href="#">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active ps-5" aria-current="page" href="#">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active ps-5" aria-current="page" href="#">
                        Skills
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active ps-5" aria-current="page" href="#">
                        Works
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active ps-5" aria-current="page" href="#">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
