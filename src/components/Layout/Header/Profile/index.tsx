import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DefaultAvatar from '~/images/default-avatar.png';

import styles from './profile.module.scss';

const Profile = () => {
    return (
        <div className={styles.container}>
            <img src={DefaultAvatar} alt="Avatar" />
            <div className={styles.info}>
                <div className={styles.content}>
                    <h3>Ho Duy</h3>
                    <span>Admin</span>
                </div>
            </div>
            <div className={styles.down}>
                <FontAwesomeIcon icon={faAngleDown} />
            </div>
        </div>
    );
};

export default Profile;
