import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Earnings (USD)',
    type: 'column',
    data: [23, 26, 22, 27, 26, 22, 23, 24, 20, 30, 31]
  },
  {
    name: 'Energy Stored (0.1 kWh)',
    type: 'area',
    data: [13, 11, 15, 17, 14, 11, 11, 16, 16, 17, 18]
  },
  {
    name: 'Temperature (°C)',
    type: 'line',
    data: [9, 9, 8, 8, 7, 7, 8, 7, 9, 8, 12]
  }
];

export default function AppOverview() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: [
      '02/07/2022',
      '02/08/2022',
      '02/09/2022',
      '02/10/2022',
      '02/11/2022',
      '02/12/2022',
      '02/13/2022',
      '02/14/2022',
      '02/15/2022',
      '02/16/2022',
      '02/17/2022'
    ],
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)}`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="Overview" subheader="(+43%) than last month" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
