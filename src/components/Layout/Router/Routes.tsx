import { lazy } from 'react';

import {
    Customer,
    Dashboard as DashboardIcon,
    Logout as LogoutIcon,
    Profile as ProfileIcon,
    Settings as SettingsIcon,
    Staff,
    Trainer,
    TrainingProgram,
} from '@/components/Icons';
import { AppRouter, RouterGroup } from '@/constants/routes';

// const Error = lazy(() => import('@/pages/Error'));
const Home = lazy(() => import('@/pages/index'));
const Login = lazy(() => import('@/pages/Login'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const TrainingPrograms = lazy(() => import('@/pages/TrainingPrograms'));
const CustomerManagement = lazy(() => import('@/pages/CustomerManagement'));
const TrainerManagement = lazy(() => import('@/pages/CustomerManagement'));
const StaffManagement = lazy(() => import('@/pages/StaffManagement'));
const CustomerDetail = lazy(() => import('@/pages/Customer'));
const TrainerDetail = lazy(() => import('@/pages/Trainer'));
const StaffDetail = lazy(() => import('@/pages/Staff'));
const Profile = lazy(() => import('@/pages/Profile'));
const Settings = lazy(() => import('@/pages/Settings'));
const Logout = lazy(() => import('@/pages/Logout'));

export const routes: AppRouter[] = [
    // { path: '/', element: <Home />, errorElement: <Error />, hidden: true, group: RouterGroup.management },
    { path: '/', element: <Home />, hidden: true, group: RouterGroup.management },
    { path: '/login', element: <Login />, hidden: true, group: RouterGroup.management },
    {
        path: '/dashboard',
        element: <Dashboard />,
        label: 'Dashboard',
        icon: <DashboardIcon />,
        group: RouterGroup.management,
    },
    {
        path: '/training-programs',
        element: <TrainingPrograms />,
        label: 'Training program',
        icon: <TrainingProgram />,
        group: RouterGroup.management,
    },
    {
        path: '/customer-management',
        element: <CustomerManagement />,
        label: 'Customers',
        icon: <Customer />,
        group: RouterGroup.management,
    },
    {
        path: '/trainer-management',
        element: <TrainerManagement />,
        label: 'Trainers',
        icon: <Trainer />,
        group: RouterGroup.management,
    },
    {
        path: '/staff-management',
        element: <StaffManagement />,
        label: 'Staffs',
        icon: <Staff />,
        group: RouterGroup.management,
    },
    { path: '/customer', element: <CustomerDetail />, hidden: true, group: RouterGroup.management },
    { path: '/trainer', element: <TrainerDetail />, hidden: true, group: RouterGroup.management },
    { path: '/staff', element: <StaffDetail />, hidden: true, group: RouterGroup.management },
    { path: '/profile', element: <Profile />, group: RouterGroup.management, icon: <ProfileIcon />, label: ' Profile' },
    { path: '/setting', element: <Settings />, group: RouterGroup.account, icon: <SettingsIcon />, label: 'Settings' },
    { path: '/logout', element: <Logout />, group: RouterGroup.account, icon: <LogoutIcon />, label: 'Logout' },
];
