import { UserAccountStatus } from '@/constants/users';

export interface UserProfileResponseDto {
    role: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dob: string;
    address: string;
    userName: string;
    password: string;
    status: UserAccountStatus;
}
