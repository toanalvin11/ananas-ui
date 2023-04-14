import classNames from 'classnames/bind';
import DropdownCard from './DropdownCard';

import styles from './DropdownProduct.module.scss';

const cx = classNames.bind(styles);

function DropdownProduct() {
    const ListMenus = [
        {
            image: 'https://ananas.vn/wp-content/uploads/Menu_Nam.jpg',
            title: 'Cho nam',
        },
        {
            image: 'https://ananas.vn/wp-content/uploads/Menu_Nu.jpg',
            title: 'Cho nữ',
        },
        {
            image: 'https://ananas.vn/wp-content/uploads/Menu_Sale-off.jpg',
            title: 'Outlet Sale',
        },
        {
            image: 'https://ananas.vn/wp-content/uploads/Menu_Phu-kien.jpg',
            title: 'Thời trang & phụ kiện',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('top')}>
                <a href="/#">
                    {ListMenus.map((Menu, index) => (
                        <DropdownCard key={index} image={Menu.image} title={Menu.title} />
                    ))}
                </a>
            </div>
            <div className={cx('bottom')}>
                <a href="/#">
                    Mọi người thường gọi chúng tôi là <span className={cx('bottom-highlight')}> Dứa </span> !
                </a>
            </div>
        </div>
    );
}

export default DropdownProduct;
