import { ColumnDef } from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/Button';
import { Orders, TrainingPrograms } from '@/components/Icons';
import PackageType from '@/components/PackageType';
import TableDataList from '@/components/TableDataList';
import { EPackageType } from '@/constants/packages';

import styles from './orders.module.scss';
import SearchBox from '@/components/SearchBox/SearchBox';
import { executeDeleteWithBody } from '@/utils/http-client';
import toast from 'react-hot-toast';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { SelledPackageResponseDto } from '@/interfaces/Response/SelledPackageResponseDto';
import TableActionForView from '@/components/TableActionForView';
import { confirmAlert } from 'react-confirm-alert';

const Order = () => {
    let packageId = 0;
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [refreshTable, setRefreshTable] = useState(false);
    const options = {
        title: 'XÁC NHẬN',
        message: 'Bạn có muốn xóa đơn hàng?',
        buttons: [
          {
            label: 'Yes',
            onClick: async () => {
                try {
                    await executeDeleteWithBody(`/api/SelledPackage/${packageId}`);
                    toast.success('Delete SelledPackage successfully');
                    setRefreshTable(!refreshTable);
                } catch (error) {
                    toast.error('Delete SelledPackage Error!');
                } finally {
                    setSearchTerm("");
                    // setIsLoading(false);
                }
            }
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

    const cols = useMemo<ColumnDef<SelledPackageResponseDto>[]>(
        () => [
            { header: 'Gói tập', accessorKey: 'demoPackages.packageName' },
            { header: 'Khách hàng', accessorKey: 'customer.firstName',
              cell: (x) => (
                <div>{x.cell.row.original.customer.lastName + " " + x.cell.row.original.customer.firstName}</div>
            ),
            },
            { header: 'Nhân viên quản lý', accessorKey: 'staff.firstName',
            cell: (x) => (
                <div>{x.cell.row.original.staff.lastName + " " + x.cell.row.original.staff.firstName}</div>
            ),
            },
            { header: 'Số ngày tập', accessorKey: 'demoPackages.numberOfDays' },
            { header: 'Số buổi tập', accessorKey: 'demoPackages.numberOfSessions' },
            {
                header: 'Loại',
                accessorKey: 'demoPackages.type',
                cell: (value) => (
                    <PackageType text={value.getValue() as string} type={value.getValue() as EPackageType} />
                ),
            },
            { header: 'Cơ sở', accessorKey: 'demoPackages.branch.branchName' },
            {
                header: 'Thao tác',
                cell: (x) => (
                    <TableActionForView
                        onViewClick={()=>
                                {
                                // navigate('/package-detail', {
                                //     state: { 
                                //         "id": x.cell.row.original.id,
                                //         "packageName": x.cell.row.original.packageName,
                                //         "descriptions": x.cell.row.original.descriptions,
                                //         "numberOfDays": x.cell.row.original.numberOfDays,
                                //         "numberOfSessions": x.cell.row.original.numberOfSessions,
                                //         "packagePrice": x.cell.row.original.packagePrice,
                                //         "type": x.cell.row.original.type,
                                //         "branchId": x.cell.row.original.branch.id,
                                //         }
                                //       } 
                                //   );
                                }
                        }
                        onDeleteClick={() => handleDeleteClick(x.cell.row.original.id)}
                    />
                ),  
            },
        ],
        [searchTerm, refreshTable],
    );

    const handleDeleteClick = (id: number) => {
        packageId = id;
        confirmAlert(options);
    };
    const navigate = useNavigate();

    const handleChangeSearchBox = (x : any) => {
        console.log(x.target.value);
        setSearchTerm(x.target.value);
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <span>Đơn hàng</span>
                </div>
                <SearchBox 
                onChange={(x) => handleChangeSearchBox(x)} 
                value={searchTerm}/>
            </div>
            <div className={styles.table}>
                <TableDataList cols={cols} path={`/api/SelledPackage?query=${searchTerm}`} key={searchTerm} isRefresh={refreshTable}/>
            </div>
        </div>
    );
};

export default Order;
