import React, {Component} from 'react';
import { Form, Input, Row, Col, Radio } from 'antd';

interface IProps {

}

const FilterInput = (props: any) => {
  const {...put} = props
  return (
    <Form.Item
      label="选择">
      <Input {...put}/>
    </Form.Item>
  )
} 

const FilterRadio = (props: any) => {
  return (
    <Form.Item>
      < Radio.Group>
        <Radio/>
      </Radio.Group>
    </Form.Item>
  )
}

export default class Filter extends Component<IProps> {
  render () {
    return (
      <Form layout="inline">
        <FilterInput/>
        <Row>
          <FilterRadio/>
        </Row>
      </Form>
    )
  }
}