import clsx from 'clsx';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAsync } from 'react-use';

import Button from '@/components/Button';
import { TrainingPrograms } from '@/components/Icons';
import Input from '@/components/Input';
import Loader from '@/components/Loading/Loader';
import Select, { Option } from '@/components/Select';
import Textarea from '@/components/Textarea';
import { CreatePackageRequestDto, defaultRequest } from '@/interfaces/Request/CreatePackageRequestDto';
import { BaseResponseDto } from '@/interfaces/Response/BaseResponseDto';
import { BranchResponseDto } from '@/interfaces/Response/BranchResponseDto';
import { executeGetWithPagination, executePostWithBody } from '@/utils/http-client';

import { useNavigate } from 'react-router-dom';
import styles from './create.module.scss';

const CreatePackage = () => {
    const [requestDto, setRequestDto] = useState<CreatePackageRequestDto>(defaultRequest);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { loading, value } = useAsync(async () => {
        try {
            const { data }: { data: BaseResponseDto<BranchResponseDto[]> } = await executeGetWithPagination(
                '/api/Branch',
                { pageIndex: 1, pageSize: 1000000 },
            );
            return data.data;
        } catch (error) {
            console.error(error);
        }
    });

    const options: Option[] = value ? value.map((branch) => ({ label: branch.branchName, value: branch.id })) : [];

    const handleInputChange = (key: keyof CreatePackageRequestDto, value: string | number) => {
        setRequestDto((prev) => ({ ...prev, [key]: value }));
    };

    const handleCreateClick = async () => {
        try {
            setIsLoading(true);
            await executePostWithBody('/api/DemoPackage', requestDto);
            toast.success('Create package successfully');
        } catch (error) {
            toast.error('Create Package Error!');
        } finally {
            setIsLoading(false);
            navigate('/packages');
        }
    };
    const navigate = useNavigate();

    const handleCancelClick = () => {
        navigate('/packages');
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <TrainingPrograms />
                <span>Gói tập </span>
            </div>
            {loading ? (
                <Loader />
            ) : (
                <div className={styles.form}>
                    <div className={styles.inputs}>
                        <div className={styles['group-1']}>
                            <Input
                                label="Gói tập"
                                className={styles.input}
                                handleChange={(_, value) => handleInputChange('packageName', String(value))}
                            />
                            <Select
                                    className={styles.input}
                                    label="Cơ sở"
                                    options={options}
                                    onChange={(value) => handleInputChange('branchId', Number(value))} defaultValue={0}                            />
                            <Textarea
                                label="Mô tả"
                                className={styles.input}
                                handleChange={(_, value) => handleInputChange('descriptions', String(value))}
                            />
                        </div>
                        <div className={styles['group-2']}>
                            <Input
                                label="Giá"
                                className={styles.input}
                                fixedplaceholder="đ"
                                handleChange={(_, value) => handleInputChange('packagePrice', String(value))}
                                type="number"
                            />
                            <Input
                                label="Số buổi"
                                className={styles.input}
                                fixedplaceholder="buổi"
                                handleChange={(_, value) => handleInputChange('numberOfSessions', String(value))}
                                type="number"
                            />
                            <Input
                                label="Số ngày dự kiến hoàn thành"
                                className={styles.input}
                                fixedplaceholder="ngày"
                                handleChange={(_, value) => handleInputChange('numberOfDays', String(value))}
                                type="number"
                            />
                            <Input
                                label="Loại gói tập"
                                className={styles.input}
                                handleChange={(_, value) => handleInputChange('type', String(value))}
                            />
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <div className={styles.group}>
                            <Button content={<span>Hủy</span>} className={clsx(styles.button, styles.cancel)} onClick={handleCancelClick}/>
                            <Button
                                content={<span>Tạo gói tập</span>}
                                className={styles.button}
                                onClick={handleCreateClick}
                                loading={isLoading}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreatePackage;
