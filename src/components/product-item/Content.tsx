import React from 'react'
import { Row, Col, Tabs } from 'antd';
const { TabPane } = Tabs;

interface Props {
    product?: any
}

const Content: React.FC<Props> = ({ product }) => {

    function callback(key: any) {
        console.log(key);
    }

    return (
        <>
            <h4>Part Number: {product.part}</h4>
            <p>Enhance your Ascent audio system to a new level of sound quality
                so you not only hear the music, but feel it. The Rockford Fosgate®
                Audio Upgrade consists of an amplifier, upgraded speakers and an
                integrated digital signal processor tuned to align the system to the
                listener's preference. Not applicable to models with Harman
                Kardon® Premium Audio System with amplifier.</p>

            <Tabs onChange={callback} type="card" className='products-tabs'>
                <TabPane tab="What this fits" key="1">
                    This product fits 16 vehicle variants.
                    Subaru: 1 models, 16 variants between 2019
                    and 2022.
                </TabPane>
                <TabPane tab="Product types" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Services" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </>
    )
}

export { Content }