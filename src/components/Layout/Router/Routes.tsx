import { lazy } from 'react';

import {
    Customer,
    Dashboard as DashboardIcon,
    Logout as LogoutIcon,
    Orders as OrdersIcon,
    Package,
    Profile as ProfileIcon,
    Settings as SettingsIcon,
    Staff,
    Trainer
} from '@/components/Icons';
import { AppRouter, RouterGroup } from '@/constants/routes';
import DetailPackage from '@/pages/Packages/Detail';
import DetailPersonInfo from '@/pages/PersonInformation';
import CurrentLoginUserInfo from '@/pages/CurrentLoginUser';
import LoginUserInfo from '@/pages/LoginUserInfo';

const Error = lazy(() => import('@/pages/Error'));
const Home = lazy(() => import('@/pages/index'));
const Login = lazy(() => import('@/pages/SignIn'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Packages = lazy(() => import('@/pages/Packages'));
const CreatePackage = lazy(() => import('@/pages/Packages/Create'));
const CustomerManagement = lazy(() => import('@/pages/CustomerManagement'));
const TrainerManagement = lazy(() => import('@/pages/TrainerManagement'));
const StaffManagement = lazy(() => import('@/pages/StaffManagement'));
const CustomerDetail = lazy(() => import('@/pages/Customer'));
const TrainerDetail = lazy(() => import('@/pages/Trainer'));
const StaffDetail = lazy(() => import('@/pages/Staff'));
const TrainingProgramDetail = lazy(() => import('@/pages/TrainingProgramDetail'));
const Profile = lazy(() => import('@/pages/Profile'));
const Settings = lazy(() => import('@/pages/Settings'));
const Logout = lazy(() => import('@/pages/Logout'));
const Orders = lazy(() => import('@/pages/Orders'));
const CreateSellPackage = lazy(() => import('@/pages/SellPackage/Create'));
const ViewSellPackage = lazy(() => import('@/pages/SellPackage/Detail'));
const EditSellPackage = lazy(() => import('@/pages/SellPackage/Edit'));
const Task = lazy(() => import('@/pages/Task'));
const TaskView = lazy(() => import('@/pages/Task/Detail'));
const TaskCreate = lazy(() => import('@/pages/Task/Create'));


export const routes: AppRouter[] = [
    { path: '/', element: <Home />, errorElement: <Error />, hidden: true, group: RouterGroup.management },
    { path: '/sign-in', element: <Login />, hidden: true, group: RouterGroup.management },
    {
        path: '/dashboard',
        element: <Dashboard />,
        label: 'Tổng quan',
        icon: <DashboardIcon />,
        group: RouterGroup.management,
    },
    {
        path: '/packages',
        element: <Packages />,
        label: 'Gói tập',
        icon: <Package />,
        group: RouterGroup.management,
    },
    {
        path: '/package-create',
        element: <CreatePackage />,
        group: RouterGroup.management,
        hidden: true,
    },
    {
        path: '/package-detail',
        element: <DetailPackage />,
        group: RouterGroup.management,
        hidden: true,
    },
    {
        path: '/sell-package/create',
        element: <CreateSellPackage />,
        group: RouterGroup.management,
        hidden: true,
    },
    {
        path: '/sell-package/view',
        element: <ViewSellPackage />,
        group: RouterGroup.management,
        hidden: true,
    },
    {
        path: '/sell-package/edit',
        element: <EditSellPackage />,
        group: RouterGroup.management,
        hidden: true,
    },
    {
        path: '/customer-management',
        element: <CustomerManagement />,
        label: 'Khách hàng',
        icon: <Customer />,
        group: RouterGroup.management,
    },
    {
        path: '/staff-management',
        element: <StaffManagement />,
        label: 'Nhân viên',
        icon: <Staff />,
        group: RouterGroup.management,
    },
    {
        path: '/trainer-management',
        element: <TrainerManagement />,
        label: 'Huấn luyện viên',
        icon: <Trainer />,
        group: RouterGroup.management,
    },
    {
        path: '/sell-packages',
        element: <Orders />,
        label: 'Tư vấn',
        icon: <OrdersIcon />,
        group: RouterGroup.management,
    },
    {
        path: '/training-program',
        element: <TrainingProgramDetail />,
        group: RouterGroup.management,
        hidden: true,
    },
    { path: '/customer', element: <CustomerDetail />, hidden: true, group: RouterGroup.management },
    { path: '/trainer', element: <TrainerDetail />, hidden: true, group: RouterGroup.management },
    { path: '/staff', element: <StaffDetail />, hidden: true, group: RouterGroup.management },
    { path: '/persondetail', element: <DetailPersonInfo />, hidden: true, group: RouterGroup.management },
    { path: '/currentLoginUserInfo', element: <CurrentLoginUserInfo />, hidden: true, group: RouterGroup.management },
    { path: '/loginuserdetail', element: <LoginUserInfo />, hidden: true, group: RouterGroup.management },
    {
        path: '/profile',
        element: <Profile />,
        group: RouterGroup.management,
        icon: <ProfileIcon />,
        label: ' Profile',
        hidden: true,
    },
    {
        path: '/setting',
        element: <Settings />,
        group: RouterGroup.account,
        icon: <SettingsIcon />,
        label: 'Settings',
        hidden: true,
    },
    {
        path: '/tasks/',
        element: <Task />,
        label: 'Nhiệm vụ',
        group: RouterGroup.management,
        icon: <DashboardIcon />,
    },
    {
        path: '/tasks/view',
        element: <TaskView />,
        group: RouterGroup.management,
        hidden: true,
    },
    {
        path: '/tasks/create',
        element: <TaskCreate />,
        group: RouterGroup.management,
        hidden: true,
    },
    { path: '/logout', element: <Logout />, group: RouterGroup.account, icon: <LogoutIcon />, label: 'Logout' },
];
