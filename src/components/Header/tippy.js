import styles from './header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAfrica, faGear, faQuestion, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function TippyUser() {
    const navigate = useNavigate();

    const removeLocal = () => {
        const local = localStorage.getItem('dataUser');
        if (local) {
            localStorage.removeItem('dataUser');
            navigate(0);
        }
    };
    return (
        <div className={cx('tippy_option_wrap')}>
            <div className={cx('option_tippy')}>
                <FontAwesomeIcon className={cx('icon_tippy')} icon={faUser} />
                View Profile
            </div>
            <div className={cx('option')}>
                <FontAwesomeIcon className={cx('icon_tippy')} icon={faEarthAfrica} />
                English
            </div>
            <div className={cx('option')}>
                <FontAwesomeIcon className={cx('icon_tippy')} icon={faGear} />
                Setting
            </div>
            <div className={cx('option')}>
                <FontAwesomeIcon className={cx('icon_tippy')} icon={faQuestion} />
                Feedback and Help
            </div>
            <div className={cx('option', 'border')} onClick={removeLocal}>
                <FontAwesomeIcon className={cx('icon_tippy')} icon={faRightFromBracket} />
                Log out
            </div>
        </div>
    );
}
export default TippyUser;
