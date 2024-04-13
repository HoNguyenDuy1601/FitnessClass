import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { LoginRequestDto } from '@/interfaces/Request/LoginRequestDto';

import styles from './form.module.scss';

interface LoginFormProps {
    handleLogin: (request: LoginRequestDto) => void;
}

const LoginForm: FC<LoginFormProps> = (props) => {
    const { handleLogin } = props;

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<LoginRequestDto>();

    const onSubmit = (data: LoginRequestDto) => {
        handleLogin(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.inputs}>
                <Input
                    className={styles.input}
                    label="Phone"
                    placeholder="Phone"
                    {...register('phone', { required: 'Username is required' })}
                    error={errors.phone}
                />
                <Input
                    className={styles.input}
                    type="password"
                    label="Password"
                    placeholder="Password"
                    {...register('password', { required: 'Password is required' })}
                    error={errors.password}
                />
            </div>
            <div className={styles.submit}>
                <Button content="Sign in" className={styles.button} type="submit" />
                <div className={styles.register}>
                    <span className={styles.text}>{`Don't have an account?`}</span>
                    <Link to={''} className={styles.link}>
                        Create Account
                    </Link>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
