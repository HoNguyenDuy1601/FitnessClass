import clsx from 'clsx';
import { FC } from 'react';

import styles from './sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props;

    return <div className={clsx(styles.container, className)}>Sidebar</div>;
};

export default Sidebar;
