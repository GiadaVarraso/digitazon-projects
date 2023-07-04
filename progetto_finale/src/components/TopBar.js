import logo from '../imgs/logo.jpeg';

const TopBar = () => {
  return (
    <div className='top-bar flex'>
      <div>
        <a href='/Home'>
          <img className='logo' src={logo} alt='Logo Palestra AskiiSport'></img>
        </a>
      </div>
      <div>
        <h1>Team & Club Askii Sport Italia</h1>
      </div>
    </div>
  );
};

export default TopBar;
