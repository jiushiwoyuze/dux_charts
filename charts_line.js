
var themename = 'dux';

var dataOpt = [
                [749, 1752, 1145, 1912, 1363, 2242, 1538, 2663, 1942, 2838],
                [1489, 517, 1753, 895, 2335, 596, 2434, 2011, 2945, 3200],
                [699, 1268, 929, 1778, 453, 387, 870, 1402, 2797, 1146],
                [1335, 1934, 723, 1915, 2852, 757, 1319, 1238, 2162, 2359],
                [651, 306, 942, 2420, 1013, 899, 2660, 2125, 2639, 1079]
            ];

var xAxisData = [
                ["05.01", "05.02", "05.03", "05.04", "05.05", "05.06", "05.07", "05.08", "05.09", "05.10"],
                ['首次', '1~5 天', '6~10 天', '11~15 天', '16~20 天', '21~25 天', '26~30 天'],
                ['0~10 分钟', '10~30 分钟', '31~60 分钟', '61~90 分钟', '91~120 分钟'],
                ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '11:00', '12:00', '13:00']
            ];          



//
// Gender Chart
//
var LineBase                      = echarts.init(document.getElementById('line_base'),themename);
var LineBaseArea                   = echarts.init(document.getElementById('line_base_area'),themename);
var LineBroken                 = echarts.init(document.getElementById('line_broken'),themename);
var LineGradientArea           = echarts.init(document.getElementById('line_gradient_area'),themename);
var line_base = {
    title: {
        text: "线性基础图表"
    },
    tooltip: {
        // 参见 dux-theme.js
    },
    legend: {
        data: ["总收入", "图文页阅读数"],
        right: 30
    },
    xAxis: [
        {
            type: "category",
            boundaryGap: false,
            data: xAxisData[0]
        }
    ],
    yAxis: [
        {
            type: "value"
        }
    ],
    series: [
        {
            name: "总收入",
            type: "line",
            itemStyle: {
                normal: {
                    color: "rgb(57, 152, 252)"
                }
            },
            data: dataOpt[0]
        },
        {
            name: "图文页阅读数",
            type: "line",
            itemStyle: {
                normal: {
                    color: "rgb(91, 196, 159)"
                }
            },
            data: dataOpt[1]
        }
    ]
}
var line_base_area = {
    title: {
        text: "线性面积图表"
        // 参见 dux-theme.js
    },
    tooltip: {
        // 参见 dux-theme.js
    },
    legend: {
        data: ["总收入", "图文页阅读数"],
        right: 30
        // 参见 dux-theme.js
    },
    toolbox: {
        // 参见 dux-theme.js
    },
    xAxis: [
        {
            data: xAxisData[0]
            // 参见 dux-theme.js
        }
    ],
    yAxis: [
        {
            // 参见 dux-theme.js
        }
    ],
    series: [
        {
            name: "总收入",
            type: "line",
            areaStyle: {
                normal:{
                    color: "rgba(57,152,252,0.10)"
                }
            },
            itemStyle: {
                normal: {
                    color: "rgb(57, 152, 252)",
                    lineStyle: {
                        width: 1
                    }
                },
                emphasis: {
                    borderWidth: 1,
                }
            },
            // 参见 dux-theme.js
            data: dataOpt[0]
        },
        {
            name: "图文页阅读数",
            type: "line",
            areaStyle: {
                normal:{
                    color: "rgba(91, 196, 159, 0.10)"
                }
            },
            itemStyle: {
                normal: {
                    color: "rgb(91, 196, 159)",
                    lineStyle: {
                        width: 1
                    }
                },
                emphasis: {
                    borderWidth: 1,
                }
            },
            // 参见 dux-theme.js
            data: dataOpt[1]
        }
    ]
}
var line_broken = {
    title: {
        text: "折线图表"
    },
    
    tooltip: {
    },
    legend: {
        data: ["总收入", "图文页阅读数"],
        right: 30
    },
    toolbox: {
    },
    xAxis: [
        {
            type: "category",
            data: xAxisData[0]
        }
    ],
    yAxis: [
        {
            type: "value"
        }
    ],
    series: [
        {
            name: "总收入",
            type: "line",
            smooth: false,
            data: dataOpt[0]
        },
        {
            name: "图文页阅读数",
            type: "line",
            smooth: false,
            itemStyle: {
                normal: {
                    color: "rgb(91, 196, 159)"
                }
            },
            data: dataOpt[1]
        }
    ]
}
var line_gradient_area = {

    // Make gradient line here
    visualMap: [{
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        min: 0,
        max: 3000
    }],
    title: {
        text: "面积渐变图表"
    },
    tooltip: {
    },
    xAxis: [
        {
            type: "category",
            axisLine: {
                show: false
            },
            data: xAxisData[0]
        }
    ],
    yAxis: {
        show: false,
        axisLabel: {
            inside: true
        }
    },
    series: [
        {
            name: "用户",
            type: "line",
            smooth: true,
            data: dataOpt[0],
            label:{
                normal:{
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal :{
                    borderWidth: 1,
                },
                emphasis: {
                    borderWidth: 2,
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(57, 152, 252, 0.5)'
                    }, {
                        offset: 1,
                        color: 'rgba(255, 255, 255, 0.1)'
                    }])
                }
            }
        }
    ]
};


LineBase.setOption(line_base);
LineBaseArea.setOption(line_base_area);
LineBroken.setOption(line_broken);
LineGradientArea.setOption(line_gradient_area);



window.onresize = function() {
    LineBase.resize();
    LineBaseArea.resize();
    LineBroken.resize();
    LineGradientArea.resize();
}






