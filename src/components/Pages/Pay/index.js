import styles from './pay.module.scss';
import classNames from 'classnames/bind';
import { useContext, useState } from 'react';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { showCart } from '../../Contextt';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Pay() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [commune, setCommune] = useState('');
    const [address, setAddress] = useState('');
    const [errorName, setErrorName] = useState(true);
    const [errorPhone, setErrorPhone] = useState(true);
    const [errorCity, setErrorCity] = useState(true);
    const [errorDistrict, setErrorDistrict] = useState(true);
    const [errorComune, setErrorComune] = useState(true);
    const [errorAddress, setErrorAddress] = useState(true);
    const [show, setShow] = useState(false);
    const payMethod = [
        {
            id: 1,
            title: 'Thanh toán bằng thẻ tín dụng',
        },
        {
            id: 2,
            title: 'Thanh toán bằng ATM',
        },
        {
            id: 3,
            title: 'Thanh toán bằng Momo',
        },
        {
            id: 4,
            title: 'Thanh toán khi nhận hàng',
        },
    ];
    const context = useContext(showCart);
    const [checked, setChecked] = useState(2);

    const handleRequiredName = () => {
        if (!name.trim()) {
            setErrorName(true);
        } else {
            setErrorName(false);
        }
    };
    const handlePhone = () => {
        if (!phone.trim()) {
            setErrorPhone(true);
        } else {
            setErrorPhone(false);
        }
    };
    const handleCity = () => {
        if (!city.trim()) {
            setErrorCity(true);
        } else {
            setErrorCity(false);
        }
    };
    const handleDistrict = () => {
        if (!district.trim()) {
            setErrorDistrict(true);
        } else {
            setErrorDistrict(false);
        }
    };
    const handleComune = () => {
        if (!commune.trim()) {
            setErrorComune(true);
        } else {
            setErrorComune(false);
        }
    };
    const handleAddress = () => {
        if (!address.trim()) {
            setErrorAddress(true);
        } else {
            setErrorAddress(false);
        }
    };
    const handleSubmit = () => {
        handleRequiredName();
        handlePhone();
        handleCity();
        handleDistrict();
        handleComune();
        handleAddress();
    };
    const submit = () => {
        if (errorName || errorPhone || errorCity || errorDistrict || errorComune || errorAddress) {
            handleSubmit();
            setShow(false);
        } else {
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 3000);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx(show ? 'wrapper_overlay' : 'hidepay')}>
                <div className={cx('children_overlay')}>
                    <FontAwesomeIcon className={cx('exit')} icon={faXmark} onClick={() => setShow(false)} />
                    <FontAwesomeIcon className={cx('icon')} icon={faBagShopping} />
                    <p className={cx('text')}>Đặt hàng thành công!</p>
                </div>
            </div>
            <div className={cx('form_validate')}>
                <h2 className={cx('title_form')}>Địa chỉ giao hàng</h2>
                <form className={cx('form')} onSubmit={handleSubmit}>
                    <div className={cx('form_group')}>
                        <input
                            className={cx('input_form')}
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                setErrorName(false);
                            }}
                            onBlur={handleRequiredName}
                            placeholder="Họ tên"
                        />
                        {errorName && <span className={cx('err_message')}>Vui lòng nhập tên đầy đủ.</span>}
                    </div>
                    <div className={cx('form_group')}>
                        <input
                            className={cx('input_form')}
                            value={phone}
                            onBlur={handlePhone}
                            onChange={(e) => {
                                setPhone(e.target.value);
                                setErrorPhone(false);
                            }}
                            placeholder="Số điện thoại"
                        />
                        {errorPhone && <span className={cx('err_message')}>Vui lòng nhập trường này.</span>}
                    </div>
                    <div className={cx('form_group')}>
                        <input
                            className={cx('input_form')}
                            value={city}
                            onChange={(e) => {
                                setCity(e.target.value);
                                setErrorCity(false);
                            }}
                            placeholder="Tỉnh/Thành Phố"
                            onBlur={handleCity}
                        />
                        {errorCity && <span className={cx('err_message')}>Vui lòng nhập trường này.</span>}
                    </div>

                    <div className={cx('form_group')}>
                        <input
                            className={cx('input_form')}
                            value={district}
                            onChange={(e) => {
                                setDistrict(e.target.value);
                                setErrorDistrict(false);
                            }}
                            placeholder="Huyện/Quận"
                            onBlur={handleDistrict}
                        />
                        {errorDistrict && <span className={cx('err_message')}>Vui lòng nhập trường này.</span>}
                    </div>
                    <div className={cx('form_group')}>
                        <input
                            className={cx('input_form')}
                            value={commune}
                            onBlur={handleComune}
                            onChange={(e) => {
                                setCommune(e.target.value);
                                setErrorComune(false);
                            }}
                            placeholder="Xã/Phường/Thị Trấn"
                        />
                        {errorComune && <span className={cx('err_message')}>Vui lòng nhập trường này.</span>}
                    </div>

                    <div className={cx('form_group')}>
                        <input
                            className={cx('input_form')}
                            value={address}
                            onChange={(e) => {
                                setAddress(e.target.value);
                                setErrorAddress(false);
                            }}
                            placeholder="Địa chỉ"
                            onBlur={handleAddress}
                        />
                        {errorAddress && <span className={cx('err_message')}>Vui lòng nhập trường này.</span>}
                    </div>
                </form>
                <h2 className={cx('title_form')}>Phương thức thanh toán</h2>
                <div className={cx('method_pay')}>
                    <p className={cx('text_method')}>
                        Mọi giao dịch đều được bảo mật và mã hóa. Thông tin thẻ tín dụng sẽ không bao giờ được lưu lại.
                    </p>

                    {payMethod.map((data, index) => {
                        return (
                            <div className={cx('group_item')} key={data.id}>
                                <input
                                    type={'radio'}
                                    checked={checked === data.id}
                                    onChange={() => setChecked(data.id)}
                                />
                                <p className={cx('text_method')}>{data.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={cx('pay_action')}>
                <div className={cx('children')}>
                    <h2 className={cx('title_form')}>Tóm tắt đơn hàng</h2>
                    <div className={cx('group_infor')}>
                        <p className={cx('text')}>Tổng tiền hàng</p>
                        <p className={cx('numb')}>7.210.000đ</p>
                    </div>
                    <div className={cx('group_infor')}>
                        <p className={cx('text')}>Tạm tính</p>
                        <p className={cx('numb')}>7.210.000đ</p>
                    </div>
                    <div className={cx('group_infor')}>
                        <p className={cx('text')}>Phí vận chuyển</p>
                        <p className={cx('numb')}>0đ</p>
                    </div>
                    <div className={cx('group_infor')}>
                        <p className={cx('text')}>Tiền thanh toán</p>
                        <p className={cx('numb')}>7.210.000đ</p>
                    </div>
                    <button className={cx('submit')} type="submit" onClick={submit}>
                        Thanh toán
                    </button>
                    <Link to={'/'} className={cx('btn_pay_1')}>
                        Tiếp tục mua sắm
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Pay;
