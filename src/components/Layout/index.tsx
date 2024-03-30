import { FC, ReactNode } from 'react';

import Header from './Header';
import styles from './layout.module.scss';
import Sidebar from './Sidebar';

interface LayoutProps {
    children: ReactNode | ReactNode[];
}

const Layout: FC<LayoutProps> = (props) => {
    const { children } = props;

    return (
        <div className={styles.container}>
            <Sidebar className={styles.sidebar} />
            <div className={styles['main-viewport']}>
                <Header className={styles.header} />
                <div className={styles.children}>{children}</div>
            </div>
        </div>
    );
};

export default Layout;
