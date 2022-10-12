import classNames from 'classnames/bind';
import { MdLocationOn } from 'react-icons/md';
import { BsCartFill } from 'react-icons/bs';
import { FaHeart, FaUserAlt, FaBoxOpen } from 'react-icons/fa';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-top')}>
                <ul>
                    <li>
                        <FaBoxOpen />
                        Tra cứu đơn hàng
                    </li>
                    <li>
                        <MdLocationOn />
                        Tìm cửa hàng
                    </li>
                    <li>
                        <FaHeart />
                        Yêu thích
                    </li>
                    <li>
                        <FaUserAlt />
                        Đăng nhập
                    </li>
                    <li>
                        <BsCartFill />
                        Giỏ hàng (0)
                    </li>
                </ul>
            </div>
            <div className={cx('header-middle')}>header-middle</div>
            <div className={cx('header-bottom')}>header-bottom</div>
        </header>
    );
}

export default Header;
