import React, { Fragment, Suspense, lazy } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
import Registration from '../components/Registration/Registration';

const RegistrationPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader />}>
                <Registration />
            </Suspense>
        </Fragment>
    );
};

export default RegistrationPage;