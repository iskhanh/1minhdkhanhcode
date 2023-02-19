import { faCartShopping, faLocationDot, faMoneyCheckDollar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../store/cartSlice';
import { Link } from 'react-router-dom';
import ProductCart from '../../CartHeader/ProductCart';

const cx = classNames.bind(styles);

function Cart() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.cart);
    const local = localStorage.getItem('data2');
    const productInfor = JSON.parse(local);
    const isList = productInfor.length > 0;
    console.log(isList);

    return (
        <div className={cx('wrap_cart')}>
            <div className={cx('wrap_cart_top')}>
                <div className={cx('cart_top')}>
                    <div className={cx('cart_top_item')}>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                    <div className={cx('cart_top_item')}>
                        <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div className={cx('cart_top_item')}>
                        <FontAwesomeIcon icon={faMoneyCheckDollar} />
                    </div>
                </div>
            </div>
            <div className={cx('cart_content')}>
                <div className={cx('cart_content-prd')}>
                    <h2 className={cx('numb_prd')}>Bạn có {productInfor.length} sản phẩm</h2>
                    {isList && (
                        <table className={cx('table')}>
                            <tbody>
                                <tr className={cx('tr')}>
                                    <th>Sản phẩm</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Màu</th>
                                    <th>Size</th>
                                    <th>Số lượng</th>
                                    <th>Thành tiền</th>
                                    <th>Xóa</th>
                                </tr>
                                {productInfor &&
                                    productInfor.reverse().map((e, index) => {
                                        return (
                                            <tr className={cx('tr')} key={index}>
                                                <td>
                                                    <img className={cx('img_pay_prd')} src={e.img1} />
                                                </td>
                                                <td>{e.name}</td>
                                                <td>
                                                    <p>{e.colorOption}</p>
                                                </td>
                                                <td>{e.sizeOption}</td>
                                                <td>
                                                    <p>1</p>
                                                </td>
                                                <td>
                                                    <p>{e.rice.toLocaleString().replace(/,/g, '.') + 'đ'}</p>
                                                </td>
                                                <td>
                                                    <FontAwesomeIcon
                                                        className={cx('span_pay')}
                                                        icon={faTrash}
                                                        onClick={() => {
                                                            dispatch(removeItem(e));
                                                        }}
                                                    />
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    )}
                </div>
                <div className={cx('cart_content-pay')}>
                    <div className={cx('cart_content_pay-item')}>
                        <h2 className={cx('total_rice_cart_title')}>Tổng tiền giỏ hàng</h2>
                        <div className={cx('wrap_chitiet_prd_pay')}>
                            <div className={cx('chitiet_pay')}>
                                <h2 className={cx('title_rice_pay')}>Tổng sản phẩm</h2>
                                <p className={cx('number_rice_pay')}>{data.totalItem}</p>
                            </div>
                            <div className={cx('chitiet_pay')}>
                                <h2 className={cx('title_rice_pay')}>Tổng tiền hàng</h2>
                                <p className={cx('number_rice_pay')}>
                                    {data.totalRice.toLocaleString().replace(/,/g, '.') + 'đ'}
                                </p>
                            </div>
                            <div className={cx('chitiet_pay')}>
                                <h2 className={cx('title_rice_pay')}>Thành tiền</h2>
                                <p className={cx('number_rice_pay')}>
                                    {data.totalRice.toLocaleString().replace(/,/g, '.') + 'đ'}
                                </p>
                            </div>
                        </div>
                        <div className={cx('wrap_chitiet_prd_pay')}>
                            <div className={cx('chitiet_pay')}>
                                <h2 className={cx('title_rice_pay')}>Tạm tính</h2>
                                <p className={cx('number_rice_pay')}>
                                    {data.totalRice.toLocaleString().replace(/,/g, '.') + 'đ'}
                                </p>
                            </div>
                        </div>
                        <p className={cx('chuthich')}>
                            Bạn sẽ được miễn phí ship khi tổng đơn hàng có giá trị trên 2.000.000 đồng
                        </p>

                        <div className={cx('wrap_btn_pay')}>
                            <Link to={'/'} className={cx('btn_pay_1')}>
                                Tiếp tục mua sắm
                            </Link>
                            <Link to={'/pay'} className={cx('btn_pay_2')}>
                                Thanh toán
                            </Link>
                        </div>
                        <p className={cx('chuthich')}>
                            Hãy{' '}
                            <a className={cx('font_text_link')} href="">
                                đăng nhập
                            </a>{' '}
                            tài khoản của bạn để được tích điểm thành viên
                        </p>
                    </div>
                </div>
                <div className={cx('cart_mobile')}>
                    <ProductCart />
                    <div className={cx('total_rice_moblie')}>
                        <p>Tổng:</p>
                        <h2>1.900.000đ</h2>
                    </div>
                    <div className={cx('wrap_pay_mobile')}>
                        <Link to={'/pay'} className={cx('btn_pay_2')}>
                            Thanh toán
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
