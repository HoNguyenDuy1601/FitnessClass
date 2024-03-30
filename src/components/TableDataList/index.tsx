import { ColumnDef } from '@tanstack/react-table';
import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';

import { PaginationRequest } from '@/interfaces/Request/PaginationRequestDto';
import { PaginationResponse } from '@/interfaces/Response/PaginationResponseDto';
import { executeGetWithPagination } from '@/utils/http-client';

import LoadingOverlay from '../Loading/LoadingOverlay';
import { Table } from '../Table';

interface TableDataListProps<T> {
    cols: ColumnDef<T>[];
    path: string;
    pageSize?: number;
    mockData?: T[];
}

const TableDataList = <T extends object>(props: TableDataListProps<T>) => {
    const { cols, path, pageSize = 10, mockData } = props;

    const [isLoading, setIsLoading] = useState(false);
    const [totalPage, setTotalPage] = useState(20);
    const [dataRendering, setDataRendering] = useState<T[]>([]);

    const fetchData = useCallback(async (pagination: PaginationRequest) => {
        setDataRendering(mockData ?? []);

        try {
            // setIsLoading(true);
            const { data }: { data: PaginationResponse<T> } = await executeGetWithPagination(path, {
                page: pagination.page,
                pageSize,
            });
            setDataRendering(data.rows);
            setTotalPage(data.totalPage);
        } catch (error) {
            toast.error((error as Error).message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    if (isLoading) {
        return <LoadingOverlay />;
    }

    return (
        <Table<T> data={dataRendering} columns={cols} pageSize={pageSize} pageCount={totalPage} fetchData={fetchData} />
    );
};

export default TableDataList;
