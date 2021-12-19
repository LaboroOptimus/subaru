import React from 'react';
import { Breadcrumbs } from '../components/breadcrumbs/Breadcrumbs';
import { TopMenu } from '../components/main/TopMenu';

const Products = () => {
    return (
        <>
            <TopMenu />
            <Breadcrumbs path='Home / Products' />
        </>
    )
};

export default Products