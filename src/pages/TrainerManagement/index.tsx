import { ColumnDef } from '@tanstack/react-table';
import { useMemo, useState } from 'react';

import TableActionForView from '@/components/TableActionForView';
import TableDataList from '@/components/TableDataList';
import { UserManagementResponseDto } from '@/interfaces/Response/UserManagementResponseDto';

import styles from './trainer-management.module.scss';
import SearchBox from '@/components/SearchBox/SearchBox';
import { useNavigate } from 'react-router-dom';

const TrainerManagement = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const navigate = useNavigate();

    const cols = useMemo<ColumnDef<UserManagementResponseDto>[]>(
        () => [
            { header: 'Tên', accessorKey: 'firstName' },
            { header: 'Họ', accessorKey: 'lastName' },
            { header: 'Email', accessorKey: 'email' },
            { header: 'Số điện thoại', accessorKey: 'phone' },
            { header: 'Ngày sinh', accessorKey: 'dob',
            cell: (value) => (
                new Date(value.getValue() as Date).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) 
            ),},
            { header: 'Địa chỉ', accessorKey: 'address' },
            { header: 'Số năm kinh nghiệm', accessorKey: 'yoe' },
            {
                header: 'Thao tác',
                cell: (x) => (
                    <TableActionForView
                        onViewClick={() => {                      
                            navigate('/persondetail', {
                                state: { 
                                    "personId": x.cell.row.original.id,
                                    "currentPage": "/trainer-management"
                                    }
                                } 
                            );
                            }}
                        onDeleteClick={handleDeleteClick}
                    />
                ),
            },
        ],
        [searchTerm],
    );

    const handleDeleteClick = () => {
        console.log('Delete clicked');
    };

    const handleChangeSearchBox = (x : any) => {
        console.log(x.target.value);
        setSearchTerm(x.target.value);
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <span>Huấn luyện viên</span>
                </div>
                <SearchBox 
                onChange={(x) => handleChangeSearchBox(x)} 
                value={searchTerm}/>
            </div>
            <div className={styles.table}>
                <TableDataList cols={cols} path={`/api/Auth/Trainers?query=${searchTerm}`} key={searchTerm} />
            </div>
        </div>
    );
};

export default TrainerManagement;
