import { ColumnDef } from '@tanstack/react-table';
import { useMemo, useState } from 'react';

import TableActionForView from '@/components/TableActionForView';
import TableDataList from '@/components/TableDataList';
import { CustomerManagementResponseDto } from '@/interfaces/Response/UserManagementResponseDto';
import 'font-awesome/css/font-awesome.min.css';
import 'reactjs-popup/dist/index.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import styles from './customer-management.module.scss';
import SearchBox from '@/components/SearchBox/SearchBox';
import { useNavigate } from 'react-router-dom';


const CustomerManagement = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const options = {
        title: 'Xác nhận',
        message: 'Bạn có muốn xóa khách hàng?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {}
          },
          {
            label: 'No',
            onClick: () => {}
          }
        ],
        closeOnEscape: true,
        closeOnClickOutside: true,
        keyCodeForClose: [8, 32],
        overlayClassName: "overlay-custom-class-name"
      };
    const navigate = useNavigate();

    const cols = useMemo<ColumnDef<CustomerManagementResponseDto>[]>(
        () => [
            { header: 'Tên', accessorKey: 'firstName' },
            { header: 'Họ', accessorKey: 'lastName' },
            { header: 'Số điện thoại', accessorKey: 'phone' },
            { header: 'Email', accessorKey: 'email' },
            { header: 'Địa chỉ', accessorKey: 'address' },
            { header: 'Ngày sinh', accessorKey: 'dob',
                cell: (value) => (
                    new Date(value.getValue() as Date).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) 
            ),
            },
                        { header: 'Chiều cao', accessorKey: 'height' },
            { header: 'Cân nặng', accessorKey: 'weight' },
            {
                header: 'Thao tác',
                cell: (x) => (
                    <TableActionForView
                        onViewClick={() => {                      
                        navigate('/persondetail', {
                            state: { 
                                "personId": x.cell.row.original.id,
                                "currentPage": "/customer-management"
                                }
                            } 
                        );
                        }}
                        onDeleteClick={handleDeleteClick}
                    />
                ),
            },
        ],
        [],
    );

    const handleDeleteClick = () => {
        confirmAlert(options);
    };

    const handleChangeSearchBox = (x : any) => {
        console.log(x.target.value);
        setSearchTerm(x.target.value);
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <span>Khách hàng</span>
                </div>
                <SearchBox 
                onChange={(x) => handleChangeSearchBox(x)} 
                value={searchTerm}/>
            </div>
            <div className={styles.table}>
                <TableDataList cols={cols} path={`/api/Auth/customers?query=${searchTerm}`} key={searchTerm} />
            </div>
        </div>
    );
};

export default CustomerManagement;
