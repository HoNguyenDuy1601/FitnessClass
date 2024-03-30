import LoginForm from './Form';
import styles from './login.module.scss';

const LoginContainer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.heading}>
                    <h1 className={styles.title}>Login to Account</h1>
                    <p className={styles.desc}>Please enter you email and password to continue</p>
                </div>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginContainer;
