import clsx from 'clsx';
import { FC } from 'react';

import styles from './header.module.scss';

interface HeaderProps {
    className?: string;
}

const Header: FC<HeaderProps> = (props) => {
    const { className } = props;

    return <div className={clsx(styles.container, className)}>Header</div>;
};

export default Header;
