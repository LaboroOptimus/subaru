import React from 'react';
import { Col, Row, Form, Input, Button, Select } from 'antd';
import './index.scss'
import transmissionsAuto from '../images/transmission-auto.png';
import body from '../images/body.png';
import door from '../images/door.png'
import driveline from '../images/driveline-differential.png'
import electrical from '../images/electrical.png'
import engine from '../images/engine-cooling.png'
import fluids from '../images/fluids.png';
import heating from '../images/heating-ac.png';
import interioir from '../images/interior.png';
import maintenance from '../images/maintenance.png'
import transmissionManual from '../images/transmission-manual.png'
import steering from '../images/steering.png'
import gear from '../images/gear.png'
import accessories from '../images/accessories.png'
import suspensionsBrakes from '../images/suspension-brakes.png'


const data = [
    {
        image: transmissionsAuto,
        title: 'Automatic Transmissions'
    },
    {
        image: body,
        title: 'Body'
    },
    {
        image: door,
        title: 'Door'
    },
    {
        image: driveline,
        title: 'Driveline and Differential'
    },
    {
        image: electrical,
        title: 'Electrical'
    },
    {
        image: engine,
        title: 'Engine and Cooling'
    },
    {
        image: fluids,
        title: 'Fluids'
    },
    {
        image: heating,
        title: 'Hearting and Air Conditioning'
    },
    {
        image: interioir,
        title: 'Interior',
    },
    {
        image: maintenance,
        title: 'Maintenance'
    },
    {
        image: transmissionManual,
        title: 'Manual Transmission'
    },
    {
        image: steering,
        title: 'Steering',
    },
    {
        image: gear,
        title: 'Subaru Gear',
    },
    {
        image: accessories,
        title: 'Subaru Accessories'
    },
    {
        image: suspensionsBrakes,
        title: 'Suspension and Brakes'
    }

]

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