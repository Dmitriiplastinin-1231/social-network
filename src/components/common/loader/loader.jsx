import loader from './../../../assets/images/loader.svg';
import s from './loader.module.css'


let Loader = () => <div className={s.inner}><img className={s.loader} src={loader} alt="loader" /></div>

export default Loader;
