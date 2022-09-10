import ReactApexChart from "react-apexcharts";
import React from "react";
import "./homepageCharts.css";

export default class IncomeChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "",
          data: [110, 150, 75, 100, 80, 20, 30, 30, 80],
        },
      ],
      options: {
        grid: {
          show: false,
        },
        chart: {
          toolbar: {
            show: false,
          },
          sparkline: {
            enabled: true,
          },
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          show: false,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
        tooltip: {
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            return (
              '<div class="arrow_box">' +
              '<div class="arrow_box2">' +
              "$" +
              series[seriesIndex][dataPointIndex] +
              "</div>" +
              "</div>"
            );
          },
        },
        colors: ["#8D40FF", "#E91E63", "#9C27B0"],
      },
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="area"
        height={110}
      />
    );
  }
}
