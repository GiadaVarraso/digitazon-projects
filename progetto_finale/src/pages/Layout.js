import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className='flex'>
      <nav className="sidebar card">
        <ul className="menu">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Gym">Gym</Link>
          </li>
          <li>
            <Link to="/Corsi">Corsi</Link>
          </li>
          <li>
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