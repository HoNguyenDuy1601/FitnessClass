import profile from '~/images/profile.png';

import styles from './profile.module.scss';
import Dropdown from '@/components/Dropdown';



const Profile = () => {
    return (
        <div className={styles.container}>
            <img src={profile} alt="Avatar" />
            <div className={styles.info}>
                <div className={styles.content}>
                    <Dropdown userName="Nguyen Nam" userRole="Admin" />
                </div>
            </div>
        </div>
    );
};

export default Profile;
