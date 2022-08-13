function getDate() {
    let base = +new Date(1968, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let date = [];
    // 总数据X轴
    for (let i = 1; i < 240; i++) {
        var now = new Date((base += oneDay));
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    }
    return date;
}
function getData() {
    let data = [Math.random() * 300];
    // 接受到的数据
    for (let i = 1; i < 140; i++) {
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }
    return data;
}
var date = getDate();
var data = getData();
export const option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    title: {
        left: 'right',
        textStyle: {
            fontSize: 15,

            color: '#a6a6a6',
        },
        text: ' 点击右边的还原可查看数据详情                      '
    },
    // 实现了区域缩放
    // toolbox: {
    //     feature: {
    //         dataZoom: {
    //             yAxisIndex: 'none'
    //         },
    //         restore: {},
    //         saveAsImage: {}
    //     },
    //     show:true
    // },
    toolbox: {
        feature: {
            //   dataZoom: {
            //     yAxisIndex: "none"
            //   },
            restore: {},
            saveAsImage: {}
        },
        show: true
    },
    grid: {

    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        // x轴
        data: date,
        nameTextStyle: {
            color: "rgba(204, 44, 44, 1)"
        },
        axisLine: {
            lineStyle: {
                color: "rgba(61, 157, 235, 1)"
            }
        },
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        nameTextStyle: {
            color: "rgba(204, 44, 44, 1)"
        },
        axisLine: {
            lineStyle: {
                color: "rgba(61, 157, 235, 1)"
            }
        },
    },

    dataZoom: [
        {
            type: 'inside',
            start: 0,
            end: 100
        }
    ],
    series: [
        {
            name: 'Fake Data',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            // y轴
            data: data
        }
    ]
};
