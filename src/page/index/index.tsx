// import Filter from '../../component/filter'
import { Chart, Tooltip, Axis, Bar, Coord, Legend } from 'viser-react'
import React, { Component } from 'react'
const DataSet = require('@antv/data-set')

const sourceData = [
  { label: 'Mon.', series1: 2800, series2: 2260 },
  { label: 'Tues.', series1: 1800, series2: 1300 },
  { label: 'Wed.', series1: 950, series2: 900 },
  { label: 'Thur.', series1: 500, series2: 390 },
  { label: 'Fri.', series1: 170, series2: 100 },
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'fold',
  fields: ['series1', 'series2'],
  key: 'type',
  value: 'value',
});
const data = dv.rows;

export default class Index extends Component {
  componentDidMount () {
  }
  render () {
    return (
      <div>
        this is a Index
        <Chart forceFit height={400} data={data}>
          <Coord type="rect" direction="LT" />
          <Tooltip />
          <Legend />
          <Axis dataKey="value" position="right" />
          <Axis dataKey="label" label={{ offset: 12 }} />
          <Bar position="label*value" color="type" adjust={[{ type: 'dodge', marginRatio: 1 / 32 }]} />
        </Chart>
      </div>
    )
  }
}