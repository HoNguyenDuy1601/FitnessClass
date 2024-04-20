export interface SellPackageScheduleRequestDto {
    day: number;
    time: number;
}

export interface SellPackageCustomerRequestDto {
    phone: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface CreateSellPackageRequestDto {
    demoPackageId: number;
    customerInfor: SellPackageCustomerRequestDto;
    schedules: SellPackageScheduleRequestDto[];
    startDate: string;
    endDate: string;
}

export const defaultCreateSellPackageRequest: CreateSellPackageRequestDto = {
    demoPackageId: 0,
    customerInfor: { phone: '', email: '', firstName: '', lastName: '' },
    schedules: [],
    startDate: '',
    endDate: '',
};
