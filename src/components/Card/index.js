import classNames from 'classnames/bind';

import styles from './Card.module.scss';

const cx = classNames.bind(styles);

function Card(props) {
    return (
        <div key={props.index} className={cx('seller-card')}>
            <img src={props.image} alt="" />
            <div className={cx('seller-card-caption')}>
                <strong className={cx('seller-card__title')}>{props.title}</strong>
                <p className={cx('seller-card__color')}>{props.color}</p>
                <strong className={cx('seller-card__price')}>{props.price}</strong>
            </div>
        </div>
    );
}

export default Card;
