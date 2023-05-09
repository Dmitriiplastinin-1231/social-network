import { NavLink } from 'react-router-dom';
import './Aside.css';

function Aside(){
  return(
		<aside className="sitebar">
		  <nav className='navigation'>
		    <ul className='navigation__list'>
		      <li className='navigation__list-item'><NavLink className='navigation__link' to='/profile'>Profile</NavLink></li>
		      <li className='navigation__list-item'><NavLink className='navigation__link' to='/news'>News</NavLink></li>
		      <li className='navigation__list-item'><NavLink className='navigation__link' to='/messages'>Messages</NavLink></li>
		      <li className='navigation__list-item'><NavLink className='navigation__link' to='/music'>Music</NavLink></li>
			  <li className='navigation__list-item'><NavLink className='navigation__link' to='/Users'>Users</NavLink></li>
		    </ul>
		  </nav>
		</aside>
  );
}

export default Aside;