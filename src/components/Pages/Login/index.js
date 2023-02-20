import styles from './login.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import fb from '../../../assets/img/fb.png';
import google from '../../../assets/img/google.png';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Login() {
    const [name, setName] = useState('');
    const [errName, setErrNaerrName] = useState(false);
    const [checkName, setCheckName] = useState(false);
    const [checkSubmit, setCheckSubmit] = useState(false);
    const [password, setPassword] = useState('');
    const [errPw, setErrPw] = useState(false);
    const navigate = useNavigate();

    const handleBlurname = () => {
        if (name.trim()) {
            setErrNaerrName(false);
        } else {
            setErrNaerrName(true);
        }
    };
    const handleBlurPassword = () => {
        if (password.trim()) {
            setErrPw(false);
        } else {
            setErrPw(true);
        }
    };
    const dataName = localStorage.getItem('nameUser');
    const dataPass = localStorage.getItem('passUser');
    console.log(name, password, dataName, dataPass);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleBlurname();
        handleBlurPassword();
        if (!(errName, errPw, checkName)) {
            if (dataName === name && dataPass === password) {
                localStorage.setItem('dataUser', name);
                navigate(-1);
            } else {
                setCheckSubmit(true);
            }
        }
    };
    return (
        <div className={cx('wrap')}>
            <div className={cx('children')}>
                <div className={cx('header')}>
                    <div className={cx('btn_back')} onClick={() => navigate(-1)}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    <h2 className={cx('title')}>Sign in</h2>
                </div>
                <div className={cx('login_option')}>
                    <div className={cx('with_google')}>
                        <img className={cx('logo')} src={google} />
                        <span className={cx('logo_name')}>Google</span>
                    </div>
                    <div className={cx('with_fb')}>
                        <img className={cx('logo')} src={fb} />
                        <span className={cx('logo_name')}>Facebook</span>
                    </div>
                </div>
                <form className={cx('form')} onSubmit={handleSubmit}>
                    <div className={cx('form_group')}>
                        <label className={cx('label')}>User name</label>
                        <input
                            className={cx('input')}
                            value={name}
                            placeholder="Enter Your name"
                            onBlur={handleBlurname}
                            onChange={(e) => {
                                setName(e.target.value);
                                setErrNaerrName(false);
                                setCheckName(false);
                            }}
                        />
                        {(errName && <span className={cx('text_err')}>Requied</span>) ||
                            (checkName && <span className={cx('text_err')}>Not name</span>) ||
                            (checkSubmit && <span className={cx('text_err')}>Wrong username or pasword</span>)}
                    </div>
                    <div className={cx('form_group')}>
                        <label className={cx('label')}>PassWord</label>
                        <input
                            className={cx('input')}
                            placeholder="Enter Your PassWord"
                            type="password"
                            value={password}
                            onBlur={handleBlurPassword}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setErrPw(false);
                            }}
                        />
                        {errPw && <span className={cx('text_err')}>Requied</span>}
                    </div>
                    <button className={cx('submit')} type="submit">
                        Continue
                    </button>
                </form>
                <div className={cx('footer')}>
                    <p>Do not have account?</p>
                    <Link to={'/signup'} className={cx('signup')}>
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Login;
