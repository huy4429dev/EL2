import React, { Component } from 'react'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from "highcharts";
import moment from 'moment';
import './style.css'
import { Card } from 'antd';

const currentDate = moment().startOf('month').format("HH:mm ngà\\y DD t\\háng MM nă\\m YYYY");
const defaultOptions = {
    chart: {
        height: 285,
        type: 'column',
    },
    title: {
        text: "Biểu đồ tổng quan doanh thu trong tháng"
    },
    subtitle: {
        text: 'Số liệu tính đến ' + currentDate
    },
    xAxis: {
        categories: [
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'số học sinh'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y} đ</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: []
};

export default class ColumnChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            series: []
        }
    }

    render() {
        let { series, categories } = this.props;
        series = series ?? [];
        const options = { ...defaultOptions };
        options.xAxis.categories = categories;
        const chartConfig = {
            ...options,
            series: [...series]
        }

        return (
            <Card>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartConfig} />
            </Card>
        )
    }
}
