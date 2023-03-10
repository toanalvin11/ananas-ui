import classNames from 'classnames/bind';

import styles from './DropdownCard.module.scss';

const cx = classNames.bind(styles);

function DropdownCard(props) {
    return (
        <div className={cx('wrapper')}>
            <img src={props.image} alt="" />
            <p>{props.title}</p>
        </div>
    );
}

export default DropdownCard;
