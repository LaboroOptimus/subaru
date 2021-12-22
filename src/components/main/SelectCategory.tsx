import React from 'react';
import { Col, Row, Form, Input, Button, Select } from 'antd';
import './index.scss'
import { data } from '../mock/category'

const SelectCategory = () => {
    return (
        <Row className='wrapper'>
            <Col span={24}>
                <div className='category'>
                    <h3>Select a Category</h3>

                    <Row className="category-items">
                        {data.map((item) => {
                            return (
                                <div key={item.title}>
                                    <img src={item.image} />
                                    <span>{item.title}</span>
                                </div>
                            )
                        })}
                    </Row>
                </div>
            </Col>
        </Row>
    )


}

export { SelectCategory }