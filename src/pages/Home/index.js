import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Collection from '~/components/Collection';
import Category from '~/components/Category';
import Card from '~/components/Card';
import Post from '~/components/Post';

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

    const ListCollections = [
        {
            title: 'ALL BLACK IN BLACK',
            desc: 'Mặc dù được ứng dụng rất nhiều, nhưng sắc đen lúc nào cũng toát lên một vẻ huyền bí không nhàm chán',
            image: 'https://ananas.vn/wp-content/uploads/banner-phụ_2m-600x320.jpg',
        },
        {
            title: 'OUTLET SALE',
            desc: 'Danh mục những sản phẩm bán tại "giá tốt hơn" chỉ được bán kênh online - Online Only, chúng đã từng làm mưa làm gió một thời gian và hiện đang rơi vào tình trạng bể size, bể số.',
            image: 'https://ananas.vn/wp-content/uploads/Banner_Sale-off-1.jpg',
        },
    ];

    const ListCategories = [
        {
            image: 'https://ananas.vn/wp-content/uploads/catalogy-1.jpg',
            title: 'GIÀY NAM',
            alt: 'Giày Nam',
            ListItems: [
                {
                    item: 'New Arrivals',
                    link: '/#',
                },
                {
                    item: 'Best Seller',
                    link: '/#',
                },
                {
                    item: 'Sale-off',
                    link: '/#',
                },
            ],
        },
        {
            image: 'https://ananas.vn/wp-content/uploads/catalogy-2.jpg',
            title: 'GIÀY NỮ',
            alt: 'Giày Nữ',
            ListItems: [
                {
                    item: 'New Arrivals',
                    link: '/#',
                },
                {
                    item: 'Best Seller',
                    link: '/#',
                },
                {
                    item: 'Sale-off',
                    link: '/#',
                },
            ],
        },
        {
            image: 'https://ananas.vn/wp-content/uploads/catalogy-3.jpg',
            title: 'DÒNG SẢN PHẨM',
            alt: 'Dòng sản phẩm',
            ListItems: [
                {
                    item: 'Basas',
                    link: '/#',
                },
                {
                    item: 'Vintas',
                    link: '/#',
                },
                {
                    item: 'Urbas',
                    link: '/#',
                },
                {
                    item: 'Pattas',
                    link: '/#',
                },
            ],
        },
    ];

    return (
        <div>
            {/* {ListCategories.map((Categories, index) => console.log(Categories.ListItem))} */}
            <div className={cx('wrapper')}>
                {/* Banner thứ 1 */}
                <a href="/#">
                    <div>
                        <img src="https://ananas.vn/wp-content/uploads/LowHigh_Desktop-1920x1050.jpg" alt="Banner" />
                    </div>
                </a>

                {/* Collection */}
                <div className={cx('collection')}>
                    {ListCollections.map((Collections, index) => (
                        <Collection
                            key={index}
                            title={Collections.title}
                            image={Collections.image}
                            desc={Collections.desc}
                        />
                    ))}
                </div>

                {/* Category */}
                <div className={cx('category')}>
                    <h3>DANH MỤC MUA HÀNG</h3>
                    <div className={cx('category-content')}>
                        {ListCategories.map((Categories, index) => (
                            <Category
                                key={index}
                                image={Categories.image}
                                alt={Categories.alt}
                                title={Categories.title}
                                item={Categories.ListItems}
                            />
                        ))}
                    </div>
                </div>

                {/* Best seller */}
                <div className={cx('seller')}>
                    <h4>BEST SELLER</h4>
                    <div className={cx('seller-content')}>
                        {ListBestSellers.map((ListBestSeller, index) => (
                            <Card
                                key={index}
                                title={ListBestSeller.title}
                                color={ListBestSeller.color}
                                price={ListBestSeller.price}
                                image={ListBestSeller.image}
                            />
                        ))}
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
                        {ListPosts.map((ListPost, index) => (
                            <Post
                                key={index}
                                title={ListPost.title}
                                desc={ListPost.desc}
                                image={ListPost.image}
                                link={ListPost.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
