import styles from './cartHeader.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeItem } from '../store/cartSlice';

const cx = classNames.bind(styles);
function ProductCart() {
    const list = useSelector((state) => state.cart);
    const productInfor = list.items;
    console.log(productInfor);

    const dispatch = useDispatch();
    return (
        <div className={cx('container')}>
            {productInfor &&
                productInfor.map((data, index) => {
                    return (
                        <div key={index} className={cx('product')}>
                            <FontAwesomeIcon
                                className={cx('remove')}
                                icon={faTrash}
                                onClick={() => {
                                    dispatch(removeItem(data));
                                }}
                            />
                            <div className={cx('wrap_img')}>
                                <img className={cx('img')} src={data.img1} />
                            </div>
                            <div className={cx('infor')}>
                                <h2 className={cx('name_prd')}>{data.name}</h2>
                                <p className={cx('color')}>Màu sắc: {data.colorOption}</p>{' '}
                                <p className={cx('color')}>size: {data.sizeOption}</p>
                            </div>
                            <h2 className={cx('rice')}>{data.rice.toLocaleString().replace(/,/g, '.') + 'đ'}</h2>
                        </div>
                    );
                })}
        </div>
    );
}

export default ProductCart;
