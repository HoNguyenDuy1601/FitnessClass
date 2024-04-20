import clsx from 'clsx';

import Button from '@/components/Button';
import { TrainingPrograms } from '@/components/Icons';
import Input from '@/components/Input';
import useQueryParams from '@/hooks/useQueryParams';

import styles from './create.module.scss';

const CreateSellPackage = () => {
    const id = useQueryParams('id');

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <TrainingPrograms />
                <span>Selled Package</span>
            </div>
            <div className={styles.form}>
                <div className={styles.inputs}>
                    <div className={styles['group-1']}>
                        <Input
                            label="ID gói tập"
                            className={styles.input}
                            handleChange={() => {}}
                            defaultValue={id || ''}
                            disabled
                        />
                        <Input label="Start Date" className={styles.input} handleChange={() => {}} type="date" />
                        <Input label="End Date" className={styles.input} handleChange={() => {}} type="date" />
                    </div>
                    <div className={styles['group-2']}>
                        <Input label="First name" className={styles.input} handleChange={() => {}} />
                        <Input label="Last name" className={styles.input} handleChange={() => {}} />
                        <Input label="Email" className={styles.input} handleChange={() => {}} disabled />
                        <Input label="Phone" className={styles.input} handleChange={() => {}} disabled />
                    </div>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.group}>
                        <div />
                        <Button content={<span>Trở về</span>} className={clsx(styles.button, styles.cancel)} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateSellPackage;
