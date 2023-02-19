import { faQuestion, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './footerfixed.module.scss';
import Seach from './Seach';

import { showCart } from '../../Contextt';
import { useContext, useState } from 'react';
const cx = classNames.bind(styles);

function FooterFixed() {
    const context = useContext(showCart);
    const [show, setShow] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('item')} onClick={() => context.handleShowSeachMobile()}>
                <div>
                    <FontAwesomeIcon icon={faSearch} />
                    <p>Tìm kiếm</p>
                </div>
            </div>
            <div className={cx('item')}>
                <div>
                    {' '}
                    <FontAwesomeIcon icon={faUser} />
                    <p>Đăng nhập</p>
                </div>
            </div>
            <div className={cx('item')}>
                <div>
                    <FontAwesomeIcon icon={faQuestion} />
                    <p>Trợ giúp</p>
                </div>
            </div>
            {context.showSeachMobile && <Seach />}
        </div>
    );
}

export default FooterFixed;
