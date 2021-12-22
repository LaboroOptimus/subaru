import React from "react";
import cn from "classnames";
import { Col, Row, Form, Input, Button, Select } from "antd";

const Cta = () => {
  return (
    <Row className={cn("wrapper", "cta")}>
      <Col span={16}>
        <h3>Service your Subaru and support a great cause.</h3>
        <p>
          Participating Subaru retailers will donate $5 to their hometown
          charity(ies) for every routine Subaru vehicle service visit during The
          Subaru Share the Love® Event – now through January 3.
        </p>
      </Col>

      <Col span={6} offset={2}>
        <Button size="large" ghost>
          Learn more
        </Button>
      </Col>
    </Row>
  );
};

export { Cta };
