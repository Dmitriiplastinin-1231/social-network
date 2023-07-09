import Aside from './Aside/Aside';
import LoginPage from './Login/LoginPage';
import RegisterPage from './Register/Register';
import './PageWrapper.css';
import ProfilePageContainer from './ProfilePage/ProfilePageContainer';
import DialogsContainer from './Dialogs/DialogsContainer';
import {Navigate, Route, Routes} from 'react-router-dom';
import UsersContainer from './Users/UsersContainer';
import NewsContainer from './News.jsx/NewsContainer';


function PageWrapper(props) {
	return(
		<main className="main">
		  <div className='container'>
		    <section className='page-main'>
		      <Aside />
		      <div className='page-main__inner'>
				<Routes>
					<Route path='/' element={
						<Navigate to='/profile' />
					}/>
					<Route path="/messages/:userId?" element={
						<DialogsContainer />}
					 />
					<Route path={'/profile/:userId?' } element={
						<ProfilePageContainer />}
					/>
					<Route path="/Users/*" element={
						<UsersContainer />}
					/>
					<Route path='/login' element={
						<LoginPage />
					} />
					<Route path='/register' element={
						<RegisterPage />
					} />
					<Route path='/news' element={
						<NewsContainer />
					} />
				</Routes>
		      </div>
		    </section>
		  </div>
		</main>
	)
}

export default PageWrapper;