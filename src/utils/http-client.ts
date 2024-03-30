import { API } from '@/configs/axios';
import { PaginationRequest } from '@/interfaces/Request/PaginationRequestDto';

export const executeGetWithPagination = async <T extends object>(
    path: string,
    pagination: PaginationRequest,
    requestParams?: T,
) => {
    return await API.get(path, { params: { ...pagination, ...requestParams } });
};
