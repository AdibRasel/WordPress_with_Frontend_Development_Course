import * as React from 'react';
import Logo from "../assets/Logo.jpg";

const menuItems = [
  { name: "Home", url: "#home" },
  { name: "Course Module", url: "#course-module" },
  { name: "Project", url: "#project" },
  { name: "Enroll Now", url: "#EnrollNow" },
  { name: "Contact Us", url: "#contact" },
];

const Menu = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="NavBarFixed">
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
              {menuItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  <a
                    className={`nav-link custom-link ${activeIndex === index ? 'active' : ''}`}
                    href={item.url}
                    onClick={() => handleClick(index)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Menu;
