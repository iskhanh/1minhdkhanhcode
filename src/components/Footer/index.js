import styles from './footer.module.scss';
import classNames from 'classnames/bind';
import appstore from '../../assets/img/appstore.png';
import googleplay from '../../assets/img/googleplay.png';
import imgfooter from '../../assets/img/imgfooter.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import FooterFixed from './FooterFixed';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrap')}>
            <h2 className={cx('title')}>Tải ứng dụng</h2>
            <div className={cx('wrap_img_donw')}>
                <img className={cx('img_donw')} src={appstore} />
                <img className={cx('img_donw')} src={googleplay} />
            </div>
            <h2 className={cx('title')}>Nhận tin tức mới nhất từ cửa hàng</h2>
            <input className={cx('input')} placeholder="nhập email của bạn" />
            <div className={cx('item_footer_img')}>
                <img src={imgfooter} />
            </div>
            <div className={cx('option_footer')}>
                <div className={cx('item_footer')}>
                    <h3 className={cx('title_item_footer')}>Liên hệ</h3>
                </div>
                <div className={cx('item_footer')}>
                    <h3 className={cx('title_item_footer')}>Tuyển dụng</h3>
                </div>
                <div className={cx('item_footer')}>
                    <h3 className={cx('title_item_footer')}>Giới thiệu</h3>
                </div>
                <div className={cx('item_footer', 'notborder')}>
                    <FontAwesomeIcon className={cx('iconfooter')} icon={faFacebook} />
                    <FontAwesomeIcon className={cx('iconfooter')} icon={faYoutube} />
                    <FontAwesomeIcon className={cx('iconfooter')} icon={faTwitter} />
                </div>
            </div>
            <div className={cx('text_footer')}>
                <p className={cx('text_footer_item')}>Công ty Cổ phần Dự Kim với số đăng ký kinh doanh: 0105777650</p>
                <p className={cx('text_footer_item')}>
                    Địa chỉ đăng ký: Tổ dân phố Tháp, P.Đại Mỗ, Q.Nam Từ Liêm, TP.Hà Nội, Việt Nam
                </p>
                <p className={cx('text_footer_item')}> Đặt hàng online tại : 0243 205 2222</p>
            </div>
            <FooterFixed />
        </div>
    );
}
export default Footer;
