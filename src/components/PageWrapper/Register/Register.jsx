import s from './LoginPage.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLength30, required } from '../../../utilities/validation/validation';
import { FormInput } from '../../common/FormsControl/FormsControl';
import { connect } from 'react-redux';
import { login } from '../../../redux-toolkit/slices/authSlice';
import { Navigate } from 'react-router-dom';

const LoginForm = (props) => {
    return(
        <form className={`${s.form} ${props.error && s.form__error}`} onSubmit={ props.handleSubmit } action="#">
            <label className={s.label}>
                User name or email adress *
                <Field className={s.input} type="text" component={FormInput} name='email' validate={[required, maxLength30]} />
            </label>
            <label className={s.label}>
                Password *
                <Field className={s.input} type="text" component={FormInput} name='password' validate={[required]} />
            </label>
            <div className={s.error__output}>
                {props.error}
            </div>
            <button className={s.button} type='submit'>Login</button>
            <div className={s.form__bottom_inner}>
                <label className={`${s.label} ${s.checkbox__label}`}>
                    <Field className={s.checkbox__input} type="checkbox" component="input" name='rememberMe' />
                    <span className={s.checkbox__span}></span>
                    Remember me
                </label>
                <a className={s.form__link} href="https://social-network.samuraijs.com/signUp">You can register here</a>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);




const LoginPage = (props) => {
    const onSubmit = ({email, password, rememberMe}) => {
        props.login(email, password, rememberMe)
    }
    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }
    return (
        <section className={s.loginPage}>
            <h1 className={s.title}>Log in</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </section>
    )
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

const LoginPageContainer = connect(mapStateToProps, { login })(LoginPage)

export default LoginPageContainer;