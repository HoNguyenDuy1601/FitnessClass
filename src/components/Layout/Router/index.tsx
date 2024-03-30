import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import Loading from '@/components/Loading';
import { PageWithoutLayout } from '@/routes/ExceptionRoutes';

import Layout from '..';
import { router } from './Routes';

const AppRouter = () => {
    const pathname = window.location.pathname;
    const acceptedRoutes = router.routes.map((route) => route.path);

    const LayoutFragment =
        !acceptedRoutes.includes(pathname) || PageWithoutLayout.includes(pathname) ? React.Fragment : Layout;

    return (
        <Suspense fallback={<Loading />}>
            <LayoutFragment>
                <RouterProvider router={router} />
            </LayoutFragment>
        </Suspense>
    );
};

export default AppRouter;
