import * as React from 'react';
import Logo from "../assets/Logo.jpg";

export interface IMenuProps {}

export default class Menu extends React.Component<IMenuProps> {
  public render() {
    return (
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src={Logo}
              alt="Logo"
              className="logo-img"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3">
              {["Home", "Course Module", "Project", "Contact Us", "About Us"].map((item, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link custom-link" href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Custom Styles */}
        <style>{`
          .custom-navbar {
            background-color: white;
            padding: 10px 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.06);
          }

          .logo-img {
            height: 40px;
            width: auto;
          }

          .custom-link {
            color: #1777F0;
            font-weight: 500;
            position: relative;
            transition: all 0.3s ease;
          }

          .custom-link:hover {
            color: #125dc2;
          }

          .custom-link::after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: #1777F0;
            transition: width 0.3s;
            position: absolute;
            bottom: -4px;
            left: 0;
          }

          .custom-link:hover::after {
            width: 100%;
          }

          .nav-link {
            cursor: pointer;
          }

          @media (max-width: 991px) {
            .navbar-nav {
              gap: 0.5rem;
            }
          }
        `}</style>
      </nav>
    );
  }
}
