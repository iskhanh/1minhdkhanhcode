import styles from './seach.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { showCart } from '../../../Contextt';
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
                <div className={cx('seach_action')} onClick={() => context.handleHideSeachMobile()}>
                    Tìm kiếm
                </div>
            </div>
            <div className={cx('body')}>
                <h2 className={cx('title_body')}>Tìm kiếm nhiều nhất</h2>
                <div className={cx('content')}>
                    <div className={cx('item')} onClick={() => context.handleHideSeachMobile()}>
                        Áo sơ mi nữ
                    </div>
                    <div className={cx('item')} onClick={() => context.handleHideSeachMobile()}>
                        Quần jeans nam
                    </div>
                    <div className={cx('item')} onClick={() => context.handleHideSeachMobile()}>
                        Áo len cổ lọ
                    </div>
                    <div className={cx('item')} onClick={() => context.handleHideSeachMobile()}>
                        Áo 2 dây
                    </div>
                    <div className={cx('item')} onClick={() => context.handleHideSeachMobile()}>
                        Đầm
                    </div>
                    <div className={cx('item')} onClick={() => context.handleHideSeachMobile()}>
                        Quần vải nam
                    </div>
                    <div className={cx('item')} onClick={() => context.handleHideSeachMobile()}>
                        Áo khoác có mũ
                    </div>
                    <div className={cx('item')} onClick={() => context.handleHideSeachMobile()}>
                        Váy
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Seach;
