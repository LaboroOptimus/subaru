import React from 'react';
import cn from 'classnames'
import { Col, Row } from 'antd';
import logo from '../images/logo.png'
import './index.scss'

const TopMenu = () => {
    return (
        <Row className={cn('wrapper', 'top-menu')}>
            <Col span={12}>
                <img src={logo} className='logo' />
                <span>Shop Subaru Parts, Subaru Accessories and Subaru Gear with Subaru Parts Online.</span>
            </Col>
            <Col span={12} className="top-menu-items">
                <a href='/'>Home</a>
                <a href='/'>Accessories</a>
                <a href='/'>Subaru Gear</a>
                <a href='/'>Find a Retailer</a>
            </Col>
        </Row>
    )
}

export { TopMenu }