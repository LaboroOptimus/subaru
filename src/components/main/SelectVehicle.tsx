import React from 'react'
import { Col, Row, Form, Input, Button, Select } from 'antd';
import './index.scss'

const { Option } = Select;
const { Item } = Form;

const SelectVehicle = () => {
    const [form] = Form.useForm();

    return (
        <Row className="wrapper">
            <Col span={24}>
                <div className='vehicle'>
                    <h3>Select a Vehicle</h3>
                    <Form form={form} name="vehicle-form" layout='vertical'>
                        <Row gutter={[32, 16]}>
                            <Col span={5}>
                                <Item name="year" label="Year" >
                                    <Select size="large">
                                        <Option value="2021">2021</Option>
                                        <Option value="2020">2020</Option>
                                        <Option value="2019">2019</Option>
                                    </Select>
                                </Item>
                            </Col>
                            <Col span={5}>
                                <Item name="model" label="Model">
                                <Select size="large">
                                        <Option value="Ascent">Ascent</Option>
                                        <Option value="Baja">Baja</Option>
                                        <Option value="BRZ">BRZ</Option>
                                        <Option value="Crosstrek">Crosstrek</Option>
                                        
                                    </Select>
                                </Item>
                            </Col>
                            <Col span={5}>
                                <Item name="driveline" label="Driveline">
                                    <Input size="large" />
                                </Item>
                            </Col>
                            <Col span={5}>
                                <Item name="trimlevel" label="Trim Level">
                                    <Input size="large" />
                                </Item>
                            </Col>

                            <Col span={4}>
                                <Button size='large' type="primary">Search</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Col>

        </Row>
    )
};

export { SelectVehicle }