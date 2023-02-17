import classNames from 'classnames/bind';
import styles from './product.module.scss';

import img1 from '../../../assets/img/prd1.jpg';
import img2 from '../../../assets/img/prd2.jpg';
import img3 from '../../../assets/img/prd3.jpg';
import img4 from '../../../assets/img/prd4.jpg';
import img5 from '../../../assets/img/prd5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBagShopping,
    faChevronDown,
    faChevronUp,
    faComment,
    faEnvelope,
    faPhone,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { getById } from '../../../assets/fakData';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

function Product() {
    const [showSucess, setShowSucess] = useState(false);

    const param = useParams();
    const navigate = useNavigate();
    const numb = Number(param.id);
    const [sizeOption, setSizeOption] = useState(null);
    const [colorOption, setColorOption] = useState(null);
    const data = getById(numb);
    const size = [
        {
            id: 1,
            size: 'S',
        },
        {
            id: 2,
            size: 'M',
        },
        {
            id: 3,
            size: 'L',
        },
        {
            id: 4,
            size: 'XL',
        },
        {
            id: 5,
            size: 'XXL',
        },
    ];
    const color = [
        {
            id: 1,
            color: 'Đen',
        },
        {
            id: 2,
            color: 'Trắng',
        },
        {
            id: 3,
            color: 'Đỏ',
        },
        {
            id: 4,
            color: 'Vàng',
        },
        {
            id: 5,
            color: 'Xanh',
        },
    ];

    const [imgBig, setImgBig] = useState(data[0].img1);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    let send = data[0];

    const handledp = () => {
        if (colorOption && sizeOption) {
            const result = { ...send, colorOption, sizeOption };
            dispatch(addItem(result));
            setShowSucess(true);
            setTimeout(() => setShowSucess(false), 2000);
        } else {
            toast('Vui lòng chọn mã màu và size!', { autoClose: 3000 });
        }
    };
    const handlebuy = () => {
        if (colorOption && sizeOption) {
            const result = { ...send, colorOption, sizeOption };
            dispatch(addItem(result));
            navigate('/cart');
        } else {
            toast('Vui lòng chọn mã màu và size!', { autoClose: 3000 });
        }
    };
    return (
        <div className={cx('wrap')}>
            <div className={cx(showSucess ? 'wrapper_overlay' : 'hidepay')}>
                <div className={cx('children_overlay')}>
                    <FontAwesomeIcon className={cx('exit')} icon={faXmark} onClick={() => setShowSucess(false)} />
                    <FontAwesomeIcon className={cx('icon')} icon={faBagShopping} />
                    <p className={cx('text')}>Sản phẩm đã được thêm vào giỏ!</p>
                </div>
            </div>
            <div className={cx('cartegory_top')}>
                <p className={cx('title_cartegory')}>Trang chủ</p>
                <span className={cx('icon_span')}>&rarr;</span>
                <p className={cx('title_cartegory')}>Nữ</p>
                <span className={cx('icon_span')}>&rarr;</span>
                <p className={cx('title_cartegory')}>Hàng mới về</p>
            </div>
            <div className={cx('product_infor')}>
                <div className={cx('wrap_prd_infor_img')}>
                    <div className={cx('img_big')}>
                        <img className={cx('prd_infor-img_big')} src={imgBig} />
                    </div>
                    <div className={cx('img_small')}>
                        <img
                            className={cx('prd_infor-img_small')}
                            src={data[0].img1}
                            onClick={() => setImgBig(data[0].img1)}
                        />
                        <img
                            className={cx('prd_infor-img_small')}
                            src={data[0].img2}
                            onClick={() => setImgBig(data[0].img2)}
                        />
                        <img
                            className={cx('prd_infor-img_small')}
                            src={data[0].img3}
                            onClick={() => setImgBig(data[0].img3)}
                        />
                    </div>
                </div>
                <div className={cx('wrap_prd_infor-text')}>
                    <h2 className={cx('title_infor_text')}>{data[0].name}</h2>
                    <h2 className={cx('title_infor_text')}>{data[0].rice.toLocaleString()}đ</h2>
                    <p className={cx('color_text')}>
                        <b>Màu sắc</b>:
                    </p>
                    <div className={cx('wrap_size')}>
                        {color.map((e) => {
                            return (
                                <div
                                    key={e.id}
                                    className={cx('size', e.color === colorOption ? 'active_size' : '')}
                                    onClick={() => setColorOption(e.color)}
                                >
                                    {e.color}
                                </div>
                            );
                        })}
                    </div>
                    {!colorOption && <p className={cx('error')}>Vui lòng chọn màu</p>}

                    <p className={cx('title_text2')}>Size:</p>
                    <div className={cx('wrap_size')}>
                        {size.map((e) => {
                            return (
                                <div
                                    key={e.id}
                                    className={cx('size', e.size === sizeOption ? 'active_size' : '')}
                                    onClick={() => setSizeOption(e.size)}
                                >
                                    {e.size}
                                </div>
                            );
                        })}
                    </div>
                    {!sizeOption && <p className={cx('error')}>Vui lòng chọn size</p>}

                    <div className={cx('wrap_btn_action')}>
                        <button className={cx('wrap_muahang')}>
                            <p className={cx('text_in_box')} onClick={handlebuy}>
                                Mua hàng
                            </p>
                        </button>
                        <button className={cx('wrap_timcuahang')} onClick={handledp}>
                            <p className={cx('text_in_box')}>Thêm vào giỏ hàng</p>
                        </button>
                        <ToastContainer className={cx('toast')} />
                    </div>
                    <div className={cx('wrap_lienhe')}>
                        <div className={cx('item_lienhe')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <p className={cx('icon_item_lienhe')}>Hotline</p>
                        </div>
                        <div className={cx('item_lienhe')}>
                            <FontAwesomeIcon icon={faComment} />
                            <p className={cx('icon_item_lienhe')}>Chat</p>
                        </div>
                        <div className={cx('item_lienhe')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p className={cx('icon_item_lienhe')}>Mail</p>
                        </div>
                    </div>
                    <div className={cx('introduction')}>
                        <div className={cx('wrap_title_introduct')}>
                            <div className={cx('wrap_title_introduct_option')}>
                                <div className={cx('title_introduct')}>
                                    <h2>Chi tiết</h2>
                                </div>
                                <div className={cx('title_introduct')}>
                                    <h2>Bảo quản</h2>
                                </div>
                                <div className={cx('title_introduct')}>
                                    <h2>Tham khảo size</h2>
                                </div>
                            </div>
                            <div className={cx('line')}></div>
                        </div>
                        <div className={cx('wrap_seemore')}>
                            <div className={cx('wrap_content_introduct', show ? 'show' : '')}>
                                <p className={cx('text_content_intro')}>
                                    - Áo thun dài tay, dáng ôm, kiểu trễ vai may nhún 1 bên <br /> <br />
                                    - Chất liệu thun mềm mịn, co giãn nhẹ <br /> <br />
                                    - Mix cùng nhiều kiểu quần, chân váy. Phù hợp diện đi chơi
                                    <br /> <br />
                                    Lưu ý: Màu sắc sản phẩm thực tế sẽ có sự chênh lệch nhỏ so với ảnh do điều kiện ánh
                                    sáng khi chụp và màu sắc hiển thị qua mản hình máy tính/ điện thoại.
                                    <br /> <br />
                                    Thông tin mẫu: <br /> <br />
                                    Chiều cao: 167 cm
                                    <br /> <br />
                                    Cân nặng: 50 kg
                                    <br /> <br />
                                    Số đo 3 vòng:83-65-93 cm <br /> <br />
                                    Mẫu mặc size M
                                </p>
                            </div>
                            <div className={cx('wrap_icon_seemore')} onClick={() => setShow(!show)}>
                                {!show && <FontAwesomeIcon icon={faChevronDown} />}
                                {show && <FontAwesomeIcon icon={faChevronUp} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('wrap_product_same')}>
                <h2 className={cx('title_infor_text')}>Sản phẩm liên quan</h2>
                <div className={cx('product_same')}>
                    <div className={cx('item_prd_same')}>
                        <div className={cx('wrap_img_prd_same')}>
                            <img className={cx('img_prd_same')} src={img1} />
                        </div>
                        <div className={cx('infor_same')}>
                            <p className={cx('text_infor_same')}>Đaamd tweed ôm đính hoa</p>
                            <h2 className={cx('rice_same')}>590.000đ</h2>
                        </div>
                    </div>
                    <div className={cx('item_prd_same')}>
                        <div className={cx('wrap_img_prd_same')}>
                            <img className={cx('img_prd_same')} src={img1} />
                        </div>
                        <div className={cx('infor_same')}>
                            <p className={cx('text_infor_same')}>Đaamd tweed ôm đính hoa</p>
                            <h2 className={cx('rice_same')}>590.000đ</h2>
                        </div>
                    </div>
                    <div className={cx('item_prd_same')}>
                        <div className={cx('wrap_img_prd_same')}>
                            <img className={cx('img_prd_same')} src={img1} />
                        </div>
                        <div className={cx('infor_same')}>
                            <p className={cx('text_infor_same')}>Đaamd tweed ôm đính hoa</p>
                            <h2 className={cx('rice_same')}>590.000đ</h2>
                        </div>
                    </div>
                    <div className={cx('item_prd_same')}>
                        <div className={cx('wrap_img_prd_same')}>
                            <img className={cx('img_prd_same')} src={img1} />
                        </div>
                        <div className={cx('infor_same')}>
                            <p className={cx('text_infor_same')}>Đaamd tweed ôm đính hoa</p>
                            <h2 className={cx('rice_same')}>590.000đ</h2>
                        </div>
                    </div>
                    <div className={cx('item_prd_same')}>
                        <div className={cx('wrap_img_prd_same')}>
                            <img className={cx('img_prd_same')} src={img1} />
                        </div>
                        <div className={cx('infor_same')}>
                            <p className={cx('text_infor_same')}>Đaamd tweed ôm đính hoa</p>
                            <h2 className={cx('rice_same')}>590.000đ</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
