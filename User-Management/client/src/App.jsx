import React, { Fragment } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import Page404 from './pages/Page404';
import CreatePage from './pages/CreatePage';

import { getToken } from './helper/SessionHelper';

const App = () => {

  if (getToken()) {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<DashboardPage />} />
            <Route exact path="/create-new" element={<CreatePage />}/>

            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>

      </Fragment>
    );

  }
  else {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegistrationPage />} />

            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
       
      </Fragment>
    );
  }

  // return (
  //   <Fragment>
  //     <BrowserRouter>
  //       <Routes>
  //         <Route exact path="/" element={<RegistrationPage />} />
  //         <Route exact path="/register" element={<RegistrationPage />} />
  //         <Route exact path="/login" element={<LoginPage />} />
  //         <Route exact path="/dashboard" element={<DashboardPage />} />
  //         <Route path="*" element={<Page404 />} />
  //       </Routes>
  //     </BrowserRouter>

  //   </Fragment>
  // );



};

export default App;
