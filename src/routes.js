import React from "react";
import HomePage from '../src/pages/HomePage/HomePage';
import ContactPage from '../src/pages/ContactPage/ContactPage';
import MotorListPage from '../src/pages/MotorPage/MotorPage';
import ServicePage from '../src/pages/ServicePage/ServicePage';

const routes = [
    {
        path: '/Home',
        exact : false,
        main: ()=> <HomePage/>
    },
    {
        path: '/Motor-List',
        exact : true,
        main:() => <MotorListPage />
    },
    {
        path: '/Contact',
        exact : false,
        main:() => <ContactPage />
    },
    {
        path: '/Service',
        exact : false,
        main:() => <ServicePage />
    },
    {
        path: '/',
        exact : true,
        main:() => <HomePage />
    },  
];

export default routes;