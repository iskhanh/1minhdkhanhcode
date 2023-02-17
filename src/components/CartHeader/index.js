import styles from './cartHeader.module.scss';
import classNames from 'classnames/bind';
import { CreateContextProvider, showCart } from '../Contextt';
import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import prd1 from '../../assets/img/prd1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import ProductCart from './ProductCart';
const cx = classNames.bind(styles);

function CartHeader() {
    const context = useContext(showCart);
    const list = useSelector((state) => state.cart);
    const rice = list.totalRice;

    const dispatch = useDispatch();

    return (
        <div className={cx('wrapper', context.show ? 'show' : '')}>
            <div className={cx('header')}>
                <h2>Giỏ hàng</h2>
                <div className={cx('total_item')}>{list.totalItem}</div>
                <div
                    className={cx('close')}
                    onClick={() => {
                        context.handleHide();
                    }}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
            <ProductCart />
            <div className={cx('footer')}>
                <div className={cx('total')}>
                    <span className={cx('total_title')}>Tổng cộng:</span>
                    <h2 className={cx('total_rice')}>{rice.toLocaleString()}</h2>
                </div>
                <Link className={cx('see_cart')} to={'/cart'}>
                    <h2>Xem giỏ hàng</h2>
                </Link>
                <div className={cx('log_in')}>
                    <h2>Đăng nhập</h2>
                </div>
            </div>
        </div>
    );
}
export default CartHeader;
