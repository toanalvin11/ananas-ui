import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div>
            <div className={cx('wrapper')}>
                {/* Banner */}
                <a href="/#">
                    <div>
                        <img src="https://ananas.vn/wp-content/uploads/LowHigh_Desktop-1920x1050.jpg" alt="Banner" />
                    </div>
                </a>

                {/* Collection */}
                <div className={cx('collection')}>
                    <div className={cx('collection-advertisement')}>
                        <div className={cx('collection-img')}>
                            <img src="https://ananas.vn/wp-content/uploads/banner-phụ_2m-600x320.jpg" alt="" />
                        </div>
                        <div className={cx('collection-content')}>
                            <h3>
                                <a href="/#">ALL BLACK IN BLACK</a>
                            </h3>
                            <p>
                                Mặc dù được ứng dụng rất nhiều, nhưng sắc đen lúc nào cũng toát lên một vẻ huyền bí
                                không nhàm chán
                            </p>
                        </div>
                    </div>
                    <div className={cx('collection-advertisement')}>
                        <div className={cx('collection-img')}>
                            <img src="https://ananas.vn/wp-content/uploads/Banner_Sale-off-1.jpg" alt="" />
                        </div>
                        <div className={cx('collection-content')}>
                            <h3>
                                <a href="/#">OUTLET SALE</a>
                            </h3>
                            <p>
                                Danh mục những sản phẩm bán tại "giá tốt hơn" chỉ được bán kênh online - Online Only,
                                chúng đã từng làm mưa làm gió một thời gian và hiện đang rơi vào tình trạng bể size, bể
                                số.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Category */}
                <div className={cx('category')}>
                    <h3>DANH MỤC MUA HÀNG</h3>
                    <div className={cx('category-content')}>
                        <div className={cx('category-card')}>
                            <div className={cx('category-img')}></div>
                            <img src="https://ananas.vn/wp-content/uploads/catalogy-1.jpg" alt="Giày Nam" />
                            <div className={cx('category-items')}>
                                <p>GIÀY NAM</p>
                                <ul>
                                    <a href="/#">
                                        <li>New Arrivals</li>
                                    </a>
                                    <a href="/#">
                                        <li>Best Seller</li>
                                    </a>
                                    <a href="/#">
                                        <li>Sale-off</li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('category-card')}>
                            <div className={cx('category-img')}></div>
                            <img src="https://ananas.vn/wp-content/uploads/catalogy-2.jpg" alt="Giày Nữ" />
                            <div className={cx('category-items')}>
                                <p>GIÀY NỮ</p>
                                <ul>
                                    <a href="/#">
                                        <li>New Arrivals</li>
                                    </a>
                                    <a href="/#">
                                        <li>Best Seller</li>
                                    </a>
                                    <a href="/#">
                                        <li>Sale-off</li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('category-card')}>
                            <div className={cx('category-img')}></div>
                            <img src="https://ananas.vn/wp-content/uploads/catalogy-3.jpg" alt="Dòng sản phẩm" />
                            <div className={cx('category-items')}>
                                <p>DÒNG SẢN PHẨM</p>
                                <ul>
                                    <a href="/#">
                                        <li>Basas</li>
                                    </a>
                                    <a href="/#">
                                        <li>Vintas</li>
                                    </a>
                                    <a href="/#">
                                        <li>Urbas</li>
                                    </a>
                                    <a href="/#">
                                        <li>Pattas</li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
