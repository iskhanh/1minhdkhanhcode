import classNames from 'classnames/bind';
import styles from './home.module.scss';
import img1 from '../../../assets/img/slider1.jpg';
import img2 from '../../../assets/img/slider2.jpg';
import img3 from '../../../assets/img/slider3.jpg';
import img4 from '../../../assets/img/slider4.jpg';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);
function Home() {
    const [time, setTime] = useState(0);
    const imgSlider = [img1, img2, img3, img4];
    useEffect(() => {
        setTimeout(() => setTime(time - 1), 3000);
    }, [time]);
    if (time < -3) {
        setTime(0);
    }

    return (
        <div className={cx('wrap')} style={{ left: time * 100 + '%' }}>
            {imgSlider.map((im, index) => {
                return <img key={index} src={im} className={cx('img_slider')} style={{ left: index * 100 + '%' }} />;
            })}
        </div>
    );
}
export default Home;
