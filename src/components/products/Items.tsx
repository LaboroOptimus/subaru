import React from 'react';
import cn from 'classnames'
import { Link } from 'react-router-dom';
import { Col, Row, Form, Input, Button, Select } from 'antd';
import item from './item.jpeg'
import './index.scss';

const data = [
    {
        id: 0,
        title: 'Rockford Fosgate Audio Upgrade',
        part: 'H630SXC001',
        price: 428,
        image: item,
    },
    {
        id: 1,
        title: 'Rockford Fosgate Audio Upgrade',
        part: 'H630SXC001',
        price: 428,
        image: item,
    },
    {
        id: 2,
        title: 'Rockford Fosgate Audio Upgrade',
        part: 'H630SXC001',
        price: 428,
        image: item,
    },
    {
        id: 3,
        title: 'Rockford Fosgate Audio Upgrade',
        part: 'H630SXC001',
        price: 428,
        image: item,
    },
    {
        id: 4,
        title: 'Rockford Fosgate Audio Upgrade',
        part: 'H630SXC001',
        price: 428,
        image: item,
    },
    {
        id: 5,
        title: 'Rockford Fosgate Audio Upgrade',
        part: 'H630SXC001',
        price: 428,
        image: item,
    },
    {
        id: 6,
        title: 'Rockford Fosgate Audio Upgrade',
        part: 'H630SXC001',
        price: 428,
        image: item,
    },
    {
        id: 7,
        title: 'Rockford Fosgate Audio Upgrade',
        part: 'H630SXC001',
        price: 428,
        image: item,
    }
]

const Items = () => {
    return (
        <div className={cn('wrapper', 'products')}>
            <h3>Audio / Media</h3>
            <Row gutter={[32,64]}>
                {data.map((item) => {
                    return (
                        <Col key={item.id} span={6} className="products-item">
                            <img src={item.image} />
                            <h4>{item.title}</h4>
                            <div><span>{item.part}</span> <span className='price'>$ {item.price}</span></div>
                            <Link to={`${item.part}`}><Button type='primary'>More info</Button></Link>
                        </Col>
                    )
                })}
            </Row>
        </div>
    );
};

export { Items }

