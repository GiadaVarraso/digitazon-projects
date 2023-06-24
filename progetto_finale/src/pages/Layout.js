import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className='flex'>
      <nav className="sidebar card">
        <ul className="menu">
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
            <Link to="/Gym">Gym</Link>
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