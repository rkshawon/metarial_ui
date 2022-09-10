import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import "./homepageCharts.css";

export class FulfillOrderChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Salse",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "Costs",
          data: [11, 32, 45, 32, 34, 52, 41],
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

          type: "line",
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#8D40FF", "#B8C2CC"],
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
        yaxis: {
          show: false,
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  }

  render() {
    return (
      <div
        style={{
          borderRadius: "10px",
          boxShadow: "0 4px 16px 0 rgb(0 0 0 / 6%)",
          padding: "20px 40px 50px 30px",
          maxHeight: "390px",
        }}
      >
        <div className="flexbox" style={{ borderBottom: "2px solid #f0f2f2" }}>
          <h2
            style={{
              fontSize: "22px",
              color: "#2E2F39",
              fontWeight: "600",
              marginTop: "0",
            }}
          >
            Fulfilled Orders
          </h2>
          <div className="flexbox">
            <div className="flexbox" style={{ marginRight: "20px" }}>
              <span
                style={{
                  height: "12px",
                  width: "12px",
                  backgroundColor: "#8d40ff",
                  borderRadius: "50%",
                  marginRight: "5px",
                }}
              ></span>
              Sales
            </div>
            <div className="flexbox">
              <span
                style={{
                  height: "12px",
                  width: "12px",
                  backgroundColor: "#B8C2CC",
                  borderRadius: "50%",
                  marginRight: "5px",
                }}
              ></span>
              Costs
            </div>
          </div>
        </div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={300}
          />
        </div>
      </div>
    );
  }
}

export default FulfillOrderChart;
