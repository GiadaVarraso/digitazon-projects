import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [cssClass, setCssClass] = useState('show');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setCssClass((prev) => prev == 'hideMenu' ? 'show' : 'hideMenu');
  };

  return (
    <div className='flex'>
      <nav className="menu">
        <div className="checkboxMenu">
          <input type="checkbox" id="hamburger-checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}></input>
          <label htmlFor="hamburger-checkbox" id="hamburger-button">&#9776;</label>
        </div>
        <ul className={`menuList ${cssClass}`}>
          <li>
            <i className="fa-solid fa-house white" />
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <i className="fa-solid fa-people-group" />
            <Link to="/About">About</Link>
          </li>
          <li>
            <i className="fa-solid fa-dumbbell" />
            <Link to="/Gym">Servizi</Link>
          </li>
          <li>
            <i className="fa-solid fa-calendar-days" />
            <Link to="/Corsi">Corsi</Link>
          </li>
          <li>
            <i className="fa-solid fa-clipboard-list" />
            <Link to="/Prenotazioni">Prenotazioni</Link>
          </li>
        </ul>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  )
};

export default Layout;