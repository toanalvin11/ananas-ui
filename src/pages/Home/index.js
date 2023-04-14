import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Collection from '~/components/Collection';
import Category from '~/components/Category';
import Card from '~/components/Card';
import Post from '~/components/Post';
import { ListBestSellers, ListPosts, ListCollections, ListCategories } from '~/data/dataPageHome';

const cx = classNames.bind(styles);

function Home() {
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
