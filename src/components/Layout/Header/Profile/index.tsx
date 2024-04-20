import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAsync, useToggle } from 'react-use';

import { API } from '@/configs/axios';
import { BaseResponseDto } from '@/interfaces/Response/BaseResponseDto';
import { LoginResponseDto } from '@/interfaces/Response/LoginResponseDto';
import profile from '~/images/profile.png';

import Dropdown from '../Dropdown';
import styles from './profile.module.scss';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [isShowDropDown, toggleShowDropdown] = useToggle(false);

    const { value } = useAsync(async () => API.get('/info'));
    const { data: userInfo } = value?.data as BaseResponseDto<LoginResponseDto>;
    const navigate = useNavigate();

    const handleClickInfo = () => {
        navigate("/loginuserdetail");
        toggleShowDropdown();
    };
    const handleClickLogout = () => {
        navigate("/logout");
        toggleShowDropdown();
    };
    return (
        <div className={styles.container}>
            <img src={profile} alt="Avatar" />
            <div className={styles.info}>
                <div className={styles.content}>
                    <h3>{`${userInfo.lastName} ${userInfo.firstName}`}</h3>
                    {/* <span>Admin</span> */}
                </div>
            </div>
            <button className={styles.down} onClick={toggleShowDropdown}>
                <FontAwesomeIcon icon={faAngleDown} />
            </button>
            <Dropdown isShow={isShowDropDown} clickInfo={handleClickInfo} clickLogout={handleClickLogout}/>
        </div>
    );
};

export default Profile;