import { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';

import Status, { StatusType } from '@/components/Status';
import TableAction from '@/components/TableAction';
import TableDataList from '@/components/TableDataList';
import {
    TrainerManagementStatus,
    UserManagementResponseDto,
} from '@/interfaces/Response/UserManagementResponseDto';
import { users } from '@/mocks/users';

import styles from './customer-management.module.scss';

const CustomerManagement = () => {
    const cols = useMemo<ColumnDef<UserManagementResponseDto>[]>(
        () => [
            { header: 'ID', accessorKey: 'id' },
            { header: 'FirstName', accessorKey: 'firstName' },
            { header: 'LastName', accessorKey: 'lastName' },
            { header: 'Phone', accessorKey: 'phone' },
            { header: 'Email', accessorKey: 'email' },
            { header: 'Address', accessorKey: 'address' },
            { header: 'Date of Birth', accessorKey: 'dob' },
            {
                header: 'Status',
                accessorKey: 'status',
                cell: (value) => (
                    <div className={styles.status}>
                        <Status type={getStatusType(value.row.original.status)} text={value.getValue() as string} />
                    </div>
                ),
            },
            {
                header: 'Action',
                cell: () => (
                    <TableAction
                        onViewClick={handleViewClick}
                        onEditClick={handleEditClick}
                        onDeleteClick={handleDeleteClick}
                    />
                ),
            },
        ],
        [],
    );

    const handleViewClick = () => {
        console.log('View clicked');
    };

    const handleEditClick = () => {
        console.log('Edit clicked');
    };

    const handleDeleteClick = () => {
        console.log('Delete clicked');
    };

    const getStatusType = (status: TrainerManagementStatus): StatusType => {
        console.log(status);

        return 'success';
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span>Customer management</span>
            </div>
            <div className={styles.table}>
                <TableDataList cols={cols} path="/example" mockData={users} />
            </div>
        </div>
    );
};

export default CustomerManagement;
