import classNames from 'classnames/bind';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsInstagram, BsYoutube } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('findstore')}>
                <img src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Store.svg" alt="" />
                <a href="/#">
                    <button>Tìm cửa hàng</button>
                </a>
            </div>
            <div className={cx('right')}>
                <div className={cx('right-top')}>
                    <div className={cx('product')}>
                        <h4>Sản phẩm</h4>
                        <ul className={cx('hover')}>
                            <li>
                                <a href="/#">Giày Nam</a>
                            </li>
                            <li>
                                <a href="/#">Giày Nữ</a>
                            </li>
                            <li>
                                <a href="/#">Thời trang & phụ kiện</a>
                            </li>
                            <li>
                                <a href="/#">Sale-off</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('company')}>
                        <h4>Về công ty</h4>
                        <ul className={cx('hover')}>
                            <li>
                                <a href="/#">Tuyển dụng</a>
                            </li>
                            <li>
                                <a href="/#">Liên hệ nhượng quyền</a>
                            </li>
                            <li>
                                <a href="/#">Về Ananas</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('support')}>
                        <h4>Hỗ trợ</h4>
                        <ul className={cx('hover')}>
                            <li>
                                <a href="/#">FAQs</a>
                            </li>
                            <li>
                                <a href="/#">Bảo mật thông tin</a>
                            </li>
                            <li>
                                <a href="/#">Chính sách chung</a>
                            </li>
                            <li>
                                <a href="/#">Tra cứu đơn hàng</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('contact')}>
                        <h4>Liên hệ</h4>
                        <ul className={cx('hover')}>
                            <li>
                                <a href="/#">Email góp ý</a>
                            </li>
                        </ul>
                        <span>Hotline: 0963 429 749</span>
                    </div>
                </div>
                <div className={cx('right-middle')}>
                    <div>
                        <h4>Ananas Social</h4>
                        <ul>
                            <li>
                                <a href="/#">
                                    <FaFacebookSquare className={cx('icon__right')} />
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                    <BsInstagram className={cx('icon__right')} />
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                    <BsYoutube className={cx('icon__right')} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>Đăng ký nhận mail</h4>
                        <input type="text" className={cx('right__middle-input')} />
                        <button>
                            <AiOutlineArrowRight />
                        </button>
                    </div>
                    <div className={cx('right__middle-img')}>
                        <a href="/#">
                            <img
                                src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Footer.svg"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
                <div className={cx('right-bottom')}>
                    <div>
                        <a href="http://online.gov.vn/Home/WebDetails/61921?AspxAutoDetectCookieSupport=1">
                            <img
                                src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/icon_bocongthuong.png"
                                alt=""
                            />
                        </a>
                    </div>
                    <span>Copyright © 2022 Ananas. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
