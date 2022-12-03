import classNames from 'classnames/bind';

import styles from './Category.module.scss';

const cx = classNames.bind(styles);

function Category(props) {
    return (
        <div className={cx('category-card')}>
            <div className={cx('category-img')}></div>
            <img src={props.image} alt={props.alt} />
            <div className={cx('category-items')}>
                <p>{props.title}</p>
                <ul>
                    {props.item.map((value) => (
                        <a href={value.link}>
                            <li>{value.item}</li>
                        </a>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Category;
