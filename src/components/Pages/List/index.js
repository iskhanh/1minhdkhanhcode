import styles from './list.module.scss';
import classNames from 'classnames/bind';

import { getBySlug, getById } from '../../../assets/fakData';
import { Link, useParams } from 'react-router-dom';

const cx = classNames.bind(styles);
function ListProduct() {
    const param = useParams();
    const data = getBySlug(param.branch);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('cartegory_top')}>
                <p className={cx('title_cartegory')}>Trang chủ</p>
                <span className={cx('icon_span')}>&rarr;</span>
                <p className={cx('title_cartegory')}>Nữ</p>
                <span className={cx('icon_span')}>&rarr;</span>
                <p className={cx('title_cartegory')}>Áo thun</p>
            </div>
            <div className={cx('cartegory_content')}>
                <div className={cx('sidebar_cartegogy')}>
                    <div className={cx('option_cartegory_sidebar')}>
                        <h2 className={cx('title_option_item')}>Nữ</h2>
                        <ul className={cx('option_item_parent')}>
                            <li className={cx('option_item_child')}>Hàng nữ mới về</li>
                            <li className={cx('option_item_child')}>BEYOND TRENDY</li>
                            <li className={cx('option_item_child')}>JEANS FOR JOY</li>
                            <li className={cx('option_item_child')}>HƯỚNG DƯƠNG ĐÓN NẮNG</li>
                            <li className={cx('option_item_child')}>FLOURLIST 18</li>
                        </ul>
                    </div>
                    <div className={cx('option_cartegory_sidebar')}>
                        <h2 className={cx('title_option_item')}>Nữ</h2>
                        <ul className={cx('option_item_parent')}>
                            <li className={cx('option_item_child')}>Hàng nữ mới về</li>
                            <li className={cx('option_item_child')}>BEYOND TRENDY</li>
                            <li className={cx('option_item_child')}>JEANS FOR JOY</li>
                            <li className={cx('option_item_child')}>HƯỚNG DƯƠNG ĐÓN NẮNG</li>
                            <li className={cx('option_item_child')}>FLOURLIST 18</li>
                        </ul>
                    </div>
                    <div className={cx('option_cartegory_sidebar')}>
                        <h2 className={cx('title_option_item')}>Nữ</h2>
                        <ul className={cx('option_item_parent')}>
                            <li className={cx('option_item_child')}>Hàng nữ mới về</li>
                            <li className={cx('option_item_child')}>BEYOND TRENDY</li>
                            <li className={cx('option_item_child')}>JEANS FOR JOY</li>
                            <li className={cx('option_item_child')}>HƯỚNG DƯƠNG ĐÓN NẮNG</li>
                            <li className={cx('option_item_child')}>FLOURLIST 18</li>
                        </ul>
                    </div>
                </div>
                <div className={cx('wrap_item_cartegory')}>
                    <div className={cx('title_and_option_item')}>
                        <h2 className={cx('title_option_item')}>Hàng nữ mới về</h2>
                        <div className={cx('wrap_option_item')}>
                            <div className={cx('btn_option')}>
                                <select className={cx('select_option')}>
                                    <option>Sắp xếp</option>
                                    <option>Giá từ cao đến thấp</option>
                                    <option>Giá từ thấp đến cao</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product_item')}>
                        {data.map((infor, index) => (
                            <Link to={`/product/${infor.branch}/${infor.id}`} key={index} className={cx('product')}>
                                <div className={cx('wrap_img_product')}>
                                    <img className={cx('img_prd')} src={infor.img1} />
                                </div>
                                <div className={cx('infor_product')}>
                                    <h2 className={cx('descreption')}>{infor.name}</h2>
                                    <h2 className={cx('rice')}>{infor.rice.toLocaleString() + 'đ'}</h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ListProduct;
