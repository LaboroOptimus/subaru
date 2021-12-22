import React from "react";
import { Col, Row, Form, Input, Button, Select } from "antd";
import { model, years } from "../mock/vehicle";
import "./index.scss";

const { Option } = Select;
const { Item } = Form;

const SelectVehicle = () => {
  const [form] = Form.useForm();

  return (
    <Row className="wrapper">
      <Col span={24}>
        <div className="vehicle">
          <h3>Select a Vehicle</h3>
          <Form form={form} name="vehicle-form" layout="vertical">
            <Row gutter={[32, 16]}>
              <Col span={5}>
                <Item name="year" label="Year">
                  <Select size="large">
                    {years.map((item) => {
                      return (
                        <Option key={item.title + item.id} value={item.title}>
                          {item.title}
                        </Option>
                      );
                    })}
                  </Select>
                </Item>
              </Col>
              <Col span={5}>
                <Item name="model" label="Model">
                  <Select size="large">
                    {model.map((item) => {
                      return (
                        <Option key={item.id + item.value} value={item.value}>
                          {item.value}
                        </Option>
                      );
                    })}
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
                <Button size="large" type="primary">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export { SelectVehicle };
