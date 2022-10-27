import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    const ListBestSellers = [
        {
            title: 'Basas Mono Black - Low Top',
            color: 'All Black',
            price: '420.000',
            image: 'https://ananas.vn/wp-content/uploads/stu_basas_A61013_1-500x500.jpg',
        },
        {
            title: 'Urbas SC - Mule',
            color: 'Aloe Wash',
            price: '580.000',
            image: 'https://ananas.vn/wp-content/uploads/Pro_AV00198_1-500x500.jpg',
        },
        {
            title: 'Urbas SC - High Top',
            color: 'Dusty Blue',
            price: '650.000',
            image: 'https://ananas.vn/wp-content/uploads/Pro_AV00191_1-500x500.jpg',
        },
    ];

    const ListPosts = [
        {
            title: 'URBAS CORLURAY PACK',
            desc: ' Urbas Corluray Pack đem đến lựa chọn “làm mới mình” với sự kết hợp 5 gam màu mang sắc thu; phù hợp với những người trẻ năng động, mong muốn thể hiện cá tính riêng biệt khó trùng lặp.',
            image: 'https://ananas.vn/wp-content/uploads/Corluray_bannerweb_desktop1920x1050.jpg',
            link: '/#',
        },
        {
            title: 'VINTAS SAIGON 1980s',
            desc: ' Với bộ 5 sản phẩm, Vintas Saigon 1980s Pack đem đến một sự lựa chọn “cũ kỹ thú vị” cho những người trẻ sống giữa thời hiện đại nhưng lại yêu nét bình dị của Sài Gòn ngày xưa ... ',
            image: 'https://ananas.vn/wp-content/uploads/Blog-1980s_0.jpg',
            link: '/#',
        },
        {
            title: 'SNEAKER FEST VIETNAM VÀ SỰ KẾT HỢP',
            desc: ' Việc sử dụng dáng giày Vulcanized High Top của Ananas trong thiết kế và cảm hứng bắt nguồn từ linh vật Peeping - đại diện cho tinh thần xuyên suốt 6 năm qua Sneaker Fest Vietnam, chúng tôi tự tin đây sẽ là sản phẩm đáng mong chờ cho mọi “đầu giày” vào mùa hè năm nay... ',
            image: 'https://ananas.vn/wp-content/uploads/peeping_pattas_banner.jpg',
            link: '/#',
        },
        {
            title: ' "GIẢI PHẪU" GIÀY VULCANIZED ',
            desc: ' Trong phạm vi bài viết ngắn, hãy cùng nhau tìm hiểu cấu tạo giày Vulcanized Sneaker - loại sản phẩm mà Ananas đã chọn làm "cốt lõi" để theo đuổi trong suốt hành trình của mình... ',
            image: 'https://ananas.vn/wp-content/uploads/shoes-anatomy.jpg',
            link: '/#',
        },
    ];
    return (
        <div>
            <div className={cx('wrapper')}>
                {/* Banner thứ 1 */}
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

                {/* Best seller */}
                <div className={cx('seller')}>
                    <h4>BEST SELLER</h4>
                    <div className={cx('seller-content')}>
                        {ListBestSellers.map((ListBestSeller) => {
                            return (
                                <div className={cx('seller-card')}>
                                    <img src={ListBestSeller.image} alt="" />
                                    <div className={cx('seller-card-caption')}>
                                        <strong className={cx('seller-card__title')}>{ListBestSeller.title}</strong>
                                        <p className={cx('seller-card__color')}>{ListBestSeller.color}</p>
                                        <strong className={cx('seller-card__price')}>{ListBestSeller.price}</strong>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Banner thứ 2 */}
                <a href="/#">
                    <div>
                        <img src="https://ananas.vn/wp-content/uploads/Banner_Clothing.jpg" alt="Banner 1" />
                    </div>
                </a>

                {/* Posts */}
                <div className={cx('posts')}>
                    <h4>TIN TỨC & BÀI VIẾT</h4>
                    <div className={cx('posts-content')}>
                        {ListPosts.map((ListPost) => {
                            return (
                                <div className={cx('posts-card')}>
                                    <img src={ListPost.image} alt="" />
                                    <div className={cx('posts-card-caption')}>
                                        <a href={ListPost.link}>
                                            <strong className={cx('posts-card-title')}>{ListPost.title}</strong>
                                        </a>
                                        <p className={cx('posts-card-desc')}>{ListPost.desc}</p>
                                        <a href="/#">Đọc thêm</a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
