import s from './Register.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLength30, required, confirmPassword } from '../../../utilities/validation/validation';
import { FormInput } from '../../common/FormsControl/FormsControl';
import { connect } from 'react-redux';
import { register } from '../../../redux-toolkit/slices/authSlice';
import { Navigate, Link } from 'react-router-dom';
import React from 'react';

const RegisterForm = (props) => {
    return(
        <form className={`${s.form} ${props.error && s.form__error}`} onSubmit={props.handleSubmit} action="#">
            <label className={s.label}>
                Your name *
                <Field className={s.input} type="text" component={FormInput} name='name' validate={[required, maxLength30]} />
            </label>
            <label className={s.label}>
                Email adress *
                <Field className={s.input} type="text" component={FormInput} name='email' validate={[required, maxLength30]} />
            </label>
            <label className={s.label}>
                Password *
                <Field className={s.input} type="text" component={FormInput} name='password' validate={[required]} />
            </label>
            <label className={s.label}>
                Confirm the password *
                <Field className={s.input} type="text" component={FormInput} name='passwordConfirm' validate={[required, confirmPassword]} />
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
                <Link className={s.form__link} to="/login">You can login here</Link>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'register'})(RegisterForm);




const RegisterPage = (props) => {
    React.useEffect(() => {document.title = 'Регистрация'}, []);


    const onSubmit = ({name, email, password, rememberMe}) => {
        props.register(name, email, password, rememberMe)
    }
    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }
    return (
        <section className={s.loginPage}>
            <h1 className={s.title}>Register</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </section>
    )
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

const RegisterPageContainer = connect(mapStateToProps, { register })(RegisterPage)

export default RegisterPageContainer;