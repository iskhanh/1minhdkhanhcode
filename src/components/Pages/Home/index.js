import classNames from 'classnames/bind';
import styles from './home.module.scss';
import img1 from '../../../assets/img/slider1.jpg';
import img2 from '../../../assets/img/slider2.jpg';
import img3 from '../../../assets/img/slider3.jpg';
import img4 from '../../../assets/img/slider4.jpg';

import { useEffect, useState } from 'react';
import { getByHot } from '../../../assets/fakData';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Home() {
    const saleProduct = getByHot('sale');
    const newProduct = getByHot('new');
    const [time, setTime] = useState(0);
    const imgSlider = [img1, img2, img3, img4];
    useEffect(() => {
        setTimeout(() => setTime(time - 1), 3000);
    }, [time]);
    if (time < -3) {
        setTime(0);
    }

    return (
        <div className={cx('home_wrap')}>
            <div className={cx('wrap')} style={{ left: time * 100 + '%' }}>
                {imgSlider.map((im, index) => {
                    return (
                        <img key={index} src={im} className={cx('img_slider')} style={{ left: index * 100 + '%' }} />
                    );
                })}
            </div>
            <div className={cx('wrap_content')}>
                <div className={cx('content_item')}>
                    <h2 className={cx('title')}>SALE ALL 50%</h2>
                    <div className={cx('wrap_product')}>
                        {saleProduct &&
                            saleProduct.map((e) => {
                                return (
                                    <Link
                                        className={cx('product')}
                                        key={e.id}
                                        to={`/product/${e.branch}/${e.id}`}
                                        onClick={() => {
                                            window.scrollTo({
                                                top: 0,
                                                behavior: 'auto',
                                            });
                                        }}
                                    >
                                        <div
                                            className={cx('img_product')}
                                            style={{ backgroundImage: `url(${e.img1})` }}
                                        ></div>
                                        <p className={cx('name_product')}>{e.name}</p>
                                        <h2 className={cx('rice_product')}>
                                            {e.rice.toLocaleString().replace(/,/g, '.') + 'đ'}
                                        </h2>
                                    </Link>
                                );
                            })}
                    </div>
                </div>

                <div className={cx('content_item')}>
                    <h2 className={cx('title')}>Hàng mới về</h2>
                    <div className={cx('wrap_product')}>
                        {newProduct &&
                            newProduct.map((e) => {
                                return (
                                    <Link
                                        className={cx('product')}
                                        key={e.id}
                                        to={`/product/${e.branch}/${e.id}`}
                                        onClick={() => {
                                            window.scrollTo({
                                                top: 0,
                                                behavior: 'auto',
                                            });
                                        }}
                                    >
                                        <div
                                            className={cx('img_product')}
                                            style={{ backgroundImage: `url(${e.img1})` }}
                                        ></div>
                                        <p className={cx('name_product')}>{e.name}</p>
                                        <h2 className={cx('rice_product')}>
                                            {e.rice.toLocaleString().replace(/,/g, '.') + 'đ'}
                                        </h2>
                                    </Link>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
