import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { Card } from '@/components/common/Card';

// Add custom styles for the x-axis tooltip and markers
const tooltipStyles = `
  .apexcharts-xaxistooltip {
    background: #EDEFF2 !important;
    border: none !important;
    color: #000 !important;
    padding: 8px 12px !important;
    border-radius: 4px !important;
  }

  .apexcharts-xaxistooltip:before {
    border-bottom-color: #EDEFF2 !important;
  }
`;

const series = [
  // BTC
  {
    name: 'BTC',
    data: [
      5.27,    // 2012
      13.30,   // 2013
      770.44,  // 2014
      314.89,  // 2015
      963.74,  // 2016
      13880.00,// 2017
      3742.44, // 2018
      7195.70, // 2019
      29391.78,// 2020
      47686.81,// 2021
      16547.50,// 2022
      42500.00,// 2023
      51200.00 // 2024
    ]
  },
  // ETH
  {
    name: 'ETH',
    data: [
      0,       // 2012 (ETH didn't exist)
      0,       // 2013 (ETH didn't exist)
      0.73,    // 2014
      0.95,    // 2015
      8.17,    // 2016
      756.76,  // 2017
      133.32,  // 2018
      129.50,  // 2019
      737.78,  // 2020
      3764.33, // 2021
      1196.22, // 2022
      2250.00, // 2023
      2950.00  // 2024
    ]
  },
  // Tether
  {
    name: 'USDT',
    data: [
      0,       // 2012 (USDT didn't exist)
      0,       // 2013 (USDT didn't exist)
      0,       // 2014 (USDT didn't exist)
      1.00,    // 2015
      1.00,    // 2016
      1.00,    // 2017
      1.00,    // 2018
      1.00,    // 2019
      1.00,    // 2020
      1.00,    // 2021
      1.00,    // 2022
      1.00,    // 2023
      1.00     // 2024
    ]
  },
  // XRP
  {
    name: 'XRP',
    data: [
      0,       // 2012
      0.005,   // 2013
      0.004,   // 2014
      0.006,   // 2015
      0.006,   // 2016
      0.20,    // 2017
      0.35,    // 2018
      0.19,    // 2019
      0.22,    // 2020
      0.84,    // 2021
      0.34,    // 2022
      0.62,    // 2023
      0.58     // 2024
    ]
  }
];

const options: ApexOptions = {
  chart: {
    type: 'area',
    height: 350,
    toolbar: {
      show: false
    },
    fontFamily: 'Satoshi, sans-serif'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 3
  },
  xaxis: {
    categories: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    labels: {
      style: {
        fontFamily: 'Satoshi, sans-serif'
      }
    },
    tooltip: {
      enabled: true,
      style: {
        fontSize: '12px',
        fontFamily: 'Satoshi, sans-serif'
      },
      offsetY: 0,
      formatter: (value: string, { dataPointIndex, w }: { dataPointIndex: number; w: any }) => {
        return w.globals.categoryLabels[dataPointIndex]
      }
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    labels: {
      style: {
        fontFamily: 'Satoshi, sans-serif'
      },
      formatter: (value) => {
        return `$${value.toLocaleString()}`
      }
    }
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
    style: {
      fontSize: '16px',
      fontFamily: 'Satoshi, sans-serif'
    },
    y: {
      formatter: (value) => {
        return `$${value.toLocaleString()}`
      }
    },
    marker: {
      show: true,
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100]
    }
  },
  colors: ['#8155FF', '#18BFFF', '#26A17B', '#23292F'],
  grid: {
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
};

export function SplineChart() {
  return (
    <Card>
      <style>{tooltipStyles}</style>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </Card>
  );
}