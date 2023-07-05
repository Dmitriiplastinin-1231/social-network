import { NavLink } from 'react-router-dom';
import './Header.css';

function Header(props){
  const logout = () => {
    props.logout();
  }
  return(
    <header className='header'>
      <div className='container'>
        <div className='header__inner'>
          <div className="logo">
            Net<span> S</span>
          </div>
          <div className="auth">
            {props.isAuth
              ?(<div className='auth__inner'>
                <div className="auth__name">{props.login}</div>
                <ul className="auth__menu">
                  <li className="auth__menu-item">
                    <button className="auth__menu-button" onClick={logout}>выйти</button>
                  </li>
                </ul>
              </div>)
              :<NavLink className='auth__link' to='/login'>login in</NavLink>}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;