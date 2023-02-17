import styles from './seach.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { showCart } from '../../../../Contextt';
const cx = classNames.bind(styles);

function Seach() {
    const context = useContext(showCart);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('wrap_input')}>
                    <FontAwesomeIcon className={cx('icon_seach')} icon={faSearch} />
                    <input placeholder="Tìm kiếm sản phẩm" className={cx('input')} />
                </div>
                <div className={cx('seach_action')}>Tìm kiếm</div>
            </div>
            <div className={cx('body')}>
                <h2 className={cx('title_body')}>Tìm kiếm nhiều nhất</h2>
                <div className={cx('content')}>
                    <div className={cx('item')} onClick={() => context.handleHideSeachMobile()}>
                        Áo sơ mi nữ
                    </div>
                    <div className={cx('item')}>Quần jeans nam</div>
                    <div className={cx('item')}>Áo len cổ lọ</div>
                    <div className={cx('item')}>Áo 2 dây</div>
                    <div className={cx('item')}>Đầm</div>
                    <div className={cx('item')}>Quần vải nam</div>
                    <div className={cx('item')}>Áo khoác có mũ</div>
                    <div className={cx('item')}>Váy</div>
                </div>
            </div>
        </div>
    );
}

export default Seach;
