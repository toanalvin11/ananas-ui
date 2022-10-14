import classNames from 'classnames/bind';
import { MdLocationOn } from 'react-icons/md';
import { BsCartFill } from 'react-icons/bs';
import { IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import { FaHeart, FaUserAlt, FaBoxOpen } from 'react-icons/fa';
import { useState, useEffect } from 'react';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const slideHotNews = [
    {
        caption: 'FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !',
        link: '#',
    },
    {
        caption: 'HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH',
        link: '#',
    },
    {
        caption: 'BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN',
        link: '#',
    },
    {
        caption: 'BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE',
        link: '#',
    },
];

const slideShow = slideHotNews.forEach((slideHotNew, index) => <div key={index}>{slideHotNew.caption}</div>);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header__top')}>
                <ul>
                    <li>
                        <a href="#">
                            <FaBoxOpen />
                            &ensp; Tra cứu đơn hàng
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <MdLocationOn />
                            &ensp; Tìm cửa hàng
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaHeart />
                            &ensp; Yêu thích
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaUserAlt />
                            &ensp; Đăng nhập
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <BsCartFill />
                            &ensp; Giỏ hàng (0)
                        </a>
                    </li>
                </ul>
            </div>
            <div className={cx('header-middle')}>
                <a className={cx('header-middle__logo')}>
                    <img src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Header.svg" />
                </a>
                <div className={cx('header-middle__navbar')}>
                    <ul>
                        <li>
                            <a href="#">
                                Sản phẩm <IoIosArrowDown className={cx('arrow')} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Nam <IoIosArrowDown className={cx('arrow')} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Nữ
                                <IoIosArrowDown className={cx('arrow')} />
                            </a>
                        </li>
                        <li>
                            <a href="#">Sale off</a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/DiscoverYOU.svg"
                                    alt=""
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={cx('header-middle__search')}>
                    <button>
                        <FiSearch />
                    </button>
                    <input type="text" className={cx('search')} placeholder="Tìm kiếm" />
                </div>
            </div>
            <div className={cx('header__bottom')}>
                <IoIosArrowBack />
                <a href="#">{slideShow}Free Ship</a>

                <IoIosArrowForward />
            </div>
        </header>
    );
}

export default Header;
