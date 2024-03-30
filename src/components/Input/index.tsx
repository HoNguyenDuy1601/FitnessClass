import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLInputTypeAttribute, HTMLProps, useId } from 'react';
import { FieldError } from 'react-hook-form';

import styles from './input.module.scss';

interface IInputProps extends HTMLProps<HTMLInputElement> {
    label?: string;
    type?: HTMLInputTypeAttribute;
    className?: string;
    error?: FieldError;
    required?: boolean;
    handleChange?: (name: string, value: unknown) => void;
}

const Input = (props: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { className, label, type, required, error, name, handleChange } = props;

    const id = useId();

    const hasError = () => {
        return error && error.message && error.message.length > 0;
    };

    return (
        <div className={clsx(styles.container, className)}>
            <label htmlFor={id} className={styles.label}>
                {label}
                {required && <span className={styles.required}>*</span>}
            </label>
            <input
                ref={ref}
                {...props}
                id={id}
                className={clsx(styles.input, {
                    [styles.required]: error?.type === 'required',
                    [styles.disabled]: props.disabled,
                })}
                type={type}
                onChange={(e) => handleChange && name && handleChange(name, e.target.value)}
            />
            {hasError() && <span className={styles.error}>{error?.message}</span>}
        </div>
    );
};

export default forwardRef(Input);
