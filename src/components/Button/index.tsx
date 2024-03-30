import clsx from 'clsx';
import { FC, HTMLProps } from 'react';

import styles from './button.module.scss';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    className?: string;
    content: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button: FC<ButtonProps> = (props) => {
    const { className, content } = props;

    return (
        <button {...props} className={clsx(styles.button, className)}>
            {content}
        </button>
    );
};

export default Button;
