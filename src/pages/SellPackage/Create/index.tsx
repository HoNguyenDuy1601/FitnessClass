import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import { FC, useState } from 'react';
import toast from 'react-hot-toast';

import Button from '@/components/Button';
import { TrainingPrograms } from '@/components/Icons';
import Input from '@/components/Input';
import Select from '@/components/Select';
import { dayOptions, timeOptions } from '@/constants/packages';
import useQueryParams from '@/hooks/useQueryParams';
import {
    CreateSellPackageRequestDto,
    defaultCreateSellPackageRequest,
    SellPackageCustomerRequestDto,
    SellPackageScheduleRequestDto,
} from '@/interfaces/Request/CreateSellPackageRequestDto';
import { executePostWithBody } from '@/utils/http-client';

import styles from './create.module.scss';

const CreateSellPackage = () => {
    const id = useQueryParams('id');

    const [isLoading, setIsLoading] = useState(false);
    const [requestDto, setRequestDto] = useState<CreateSellPackageRequestDto>({
        ..._.cloneDeep(defaultCreateSellPackageRequest),
        demoPackageId: Number(id),
    });

    const handleDateChange = (key: keyof CreateSellPackageRequestDto, value: string) => {
        const localDateTime = new Date(value);
        const isoDateTime = localDateTime.toISOString();
        setRequestDto((prev) => ({ ...prev, [key]: isoDateTime }));
    };

    const handleCustomerChange = (key: keyof SellPackageCustomerRequestDto, value: string) => {
        setRequestDto((prev) => ({ ...prev, customerInfor: { ...prev.customerInfor, [key]: value } }));
    };

    const handleAddSchedule = (schedule: SellPackageScheduleRequestDto) => {
        setRequestDto((prev) => ({ ...prev, schedules: [...prev.schedules, schedule] }));
    };

    const handleRemoveSchedule = (schedule: SellPackageScheduleRequestDto) => {
        setRequestDto((prev) => ({
            ...prev,
            schedules: [...prev.schedules.filter((value) => !_.isEqual(value, schedule))],
        }));
    };

    const handleCreateClick = async () => {
        try {
            setIsLoading(true);
            await executePostWithBody('/api/SelledPackage', requestDto);
            toast.success('Create sell package successfully');
        } catch (error) {
            toast.error('Create sell package error!!!');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

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
                        <Input
                            label="Start Date"
                            className={styles.input}
                            handleChange={(_, value) => handleDateChange('startDate', String(value))}
                            type="datetime-local"
                        />
                        <Input
                            label="End Date"
                            className={styles.input}
                            handleChange={(_, value) => handleDateChange('endDate', String(value))}
                            type="datetime-local"
                        />
                        <ScheduleInputs
                            schedules={requestDto.schedules}
                            handleAddClick={handleAddSchedule}
                            handleRemoveSchedule={handleRemoveSchedule}
                        />
                    </div>
                    <div className={styles['group-2']}>
                        <Input
                            label="First name"
                            className={styles.input}
                            handleChange={(_, value) => handleCustomerChange('firstName', String(value))}
                        />
                        <Input
                            label="Last name"
                            className={styles.input}
                            handleChange={(_, value) => handleCustomerChange('lastName', String(value))}
                        />
                        <Input
                            label="Email"
                            className={styles.input}
                            handleChange={(_, value) => handleCustomerChange('email', String(value))}
                        />
                        <Input
                            label="Phone"
                            className={styles.input}
                            handleChange={(_, value) => handleCustomerChange('phone', String(value))}
                        />
                    </div>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.group}>
                        <Button
                            content={<span>Tạo</span>}
                            className={styles.button}
                            onClick={handleCreateClick}
                            loading={isLoading}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

interface ScheduleInputsProps {
    schedules: SellPackageScheduleRequestDto[];
    handleAddClick: (schedule: SellPackageScheduleRequestDto) => void;
    handleRemoveSchedule: (schedule: SellPackageScheduleRequestDto) => void;
}

const ScheduleInputs: FC<ScheduleInputsProps> = ({ schedules, handleAddClick, handleRemoveSchedule }) => {
    const [schedule, setSchedule] = useState<SellPackageScheduleRequestDto>({ day: 0, time: 0 });

    const handleInputChange = (key: keyof SellPackageScheduleRequestDto, value: number) => {
        setSchedule((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <div className={styles.schedules}>
            <label htmlFor="id" className={styles.label}>
                Schedules
            </label>
            <div className={styles.box}>
                <Button
                    content={<FontAwesomeIcon icon={faPlus} />}
                    className={styles.button}
                    onClick={() => handleAddClick(schedule)}
                />
                <div className={styles.inputs}>
                    <Select options={timeOptions} onChange={(value) => handleInputChange('time', Number(value))} />
                    <Select options={dayOptions} onChange={(value) => handleInputChange('day', Number(value))} />
                </div>
            </div>
            <div className={styles['schedules-added']}>
                {schedules.map(({ time, day }, index) => (
                    <div key={index} className={styles.schedule}>
                        <div className={styles.value}>
                            <span>Time: {time}</span>
                            <span>|</span>
                            <span>Day: {day}</span>
                        </div>
                        <button className={styles.remove} onClick={() => handleRemoveSchedule({ time, day })}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CreateSellPackage;
