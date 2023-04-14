import { useState } from 'react';
import classNames from 'classnames/bind';
import { MdLocationOn } from 'react-icons/md';
import { BsCartFill } from 'react-icons/bs';
import { IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import { FaHeart, FaUserAlt, FaBoxOpen } from 'react-icons/fa';
import Tippy from '@tippyjs/react/headless'; //framework xài cho tìm kiếm

import { Wrapper as DropdownWrapper } from '~/components/Dropdown';
import styles from './Header.module.scss';
import SearchResult from '~/components/SearchResult';
import DropdownProduct from '~/components/Dropdown/DropdownProduct';

const cx = classNames.bind(styles);

const slideHotNews = [
    {
        caption: 'FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !',
        link: '/#',
    },
    {
        caption: 'HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH',
        link: '/#',
    },
    {
        caption: 'BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN',
        link: '/#',
    },
    {
        caption: 'BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE',
        link: '/#',
    },
];

function Header() {
    const [slide, setSlide] = useState(0);
    // const [searchResult, setSearchResult] = useState([]);

    function renderHotNew() {
        const item = slideHotNews[slide];
        return <p>{item.caption}</p>;
    }

    function handleSlide(value) {
        if (slide === slideHotNews.length - 1 && value === 1) setSlide(0);
        else if (slide === 0 && value === -1) setSlide(slideHotNews.length - 1);
        else {
            setSlide(slide + value);
        }
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('header__top')}>
                <ul>
                    <li>
                        <a href="/#">
                            <span>
                                <FaBoxOpen />
                                &ensp;Tra cứu đơn hàng
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            <span>
                                <MdLocationOn />
                                &ensp; Tìm cửa hàng
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            <span>
                                <FaHeart />
                                &ensp; Yêu thích
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            <span>
                                <FaUserAlt />
                                &ensp; Đăng nhập
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            <span>
                                <BsCartFill />
                                &ensp; Giỏ hàng (0)
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={cx('header-middle')}>
                <a href="/#" className={cx('header-middle__logo')}>
                    <img
                        src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Header.svg"
                        alt=""
                    />
                </a>
                <div className={cx('header-middle__navbar')}>
                    <ul>
                        <li className={cx('header-middle_category')}>
                            <Tippy
                                placement="bottom"
                                interactive
                                render={(attrs) => (
                                    <div className={cx('dropdown-products')} tabIndex="-1" {...attrs}>
                                        <DropdownWrapper>
                                            <DropdownProduct />
                                        </DropdownWrapper>
                                    </div>
                                )}
                            >
                                <a href="/#">
                                    <span className={cx('dropdown-title')}>
                                        Sản phẩm <IoIosArrowDown className={cx('arrow')} />
                                    </span>
                                </a>
                            </Tippy>
                        </li>

                        <li>
                            <a href="/#">
                                <span className={cx('dropdown-title')}>
                                    Nam <IoIosArrowDown className={cx('arrow')} />
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <span className={cx('dropdown-title')}>
                                    Nữ <IoIosArrowDown className={cx('arrow')} />
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <span className={cx('dropdown-title')}>Sale off</span>
                            </a>
                        </li>
                        <li>
                            <a className={cx('image-DiscoverYOU')} href="/#">
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
                    <Tippy
                        // visible={searchResult.length > 0}
                        placement="bottom"
                        interactive
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <DropdownWrapper>
                                    <h4>Kết quả</h4>
                                    <SearchResult />
                                    <SearchResult />
                                    <SearchResult />
                                </DropdownWrapper>
                            </div>
                        )}
                    >
                        <input type="text" className={cx('search')} placeholder="Tìm kiếm" />
                    </Tippy>
                </div>
            </div>
            <div className={cx('header__bottom')}>
                <IoIosArrowBack onClick={() => handleSlide(-1)} className={cx('header__bottom-icon')} />
                <a href="/#">{renderHotNew()}</a>

                <IoIosArrowForward onClick={() => handleSlide(1)} className={cx('header__bottom-icon')} />
            </div>
        </header>
    );
}

export default Header;
