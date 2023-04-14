import classNames from 'classnames/bind';
import DropdownCard from './DropdownCard';
import { ListMenus } from '~/data/dataPageDropdownProduct';

import styles from './DropdownProduct.module.scss';

const cx = classNames.bind(styles);

function DropdownProduct() {
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
