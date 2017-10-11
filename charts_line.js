
var themename = 'dux';



var valueList = [
                [749, 1752, 1145, 1912, 1363, 2242, 1538, 2663, 1942, 2838],
                [1489, 517, 1753, 895, 2335, 596, 2434, 2011, 2945, 3200],
                [699, 1268, 929, 1778, 453, 387, 870, 1402, 2797, 1146],
                [1335, 1934, 723, 1915, 2852, 757, 1319, 1238, 2162, 2359],
                [651, 306, 942, 2420, 1013, 899, 2660, 2125, 2639, 1079]
            ];

var categoryList = [
                ["05.01", "05.02", "05.03", "05.04", "05.05", "05.06", "05.07", "05.08", "05.09", "05.10"],
                ['首次', '1~5 天', '6~10 天', '11~15 天', '16~20 天', '21~25 天', '26~30 天'],
                ['0~10 分钟', '10~30 分钟', '31~60 分钟', '61~90 分钟', '91~120 分钟'],
                ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '11:00', '12:00', '13:00']
            ];          

//
// Chart 1
//
if(document.getElementById('line_base') ) {
    var LineBase    = echarts.init(document.getElementById('line_base'),themename);
    var line_base   = {
        title: {
            text: "线性基础图表",
            link: 'lite_line/line_base.php'
        },
        tooltip: {
            // 参见 dux-theme.js
        },
        legend: {
            data: [{
                name: "总收入",
                icon: 'rect'
        },{
                name: "图文页阅读数",
                icon: 'rect'
        }],
        right: 30
        },
        xAxis: [
            {
                type: "category",
                boundaryGap: false,
                data: categoryList[0]
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
                data: valueList[0]
            },
            {
                name: "图文页阅读数",
                type: "line",
                itemStyle: {
                    normal: {
                        color: "rgb(91, 196, 159)"
                    }
                },
                data: valueList[1]
            }
        ]
    }
    LineBase.setOption(line_base);
}

//
// Chart 2
//
if(document.getElementById('line_base_area')) {
    var LineBaseArea    = echarts.init(document.getElementById('line_base_area'),themename);
    var line_base_area  = {
        title: {
            text: "线性面积图表"
            // 参见 dux-theme.js
        },
        tooltip: {
            // 参见 dux-theme.js
        },
        legend: {
            data: [{
                name: "总收入",
                icon: 'rect'
        },{
                name: "图文页阅读数",
                icon: 'rect'
        }],
        right: 30
        },
        toolbox: {
            // 参见 dux-theme.js
        },
        xAxis: [
            {
                data: categoryList[0]
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
                data: valueList[0]
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
                data: valueList[1]
            }
        ]
    }
    LineBaseArea.setOption(line_base_area);
}
//
// Chart 3
//
if(document.getElementById('line_broken')) {
    var LineBroken      = echarts.init(document.getElementById('line_broken'),themename);
    var line_broken     = {
        title: {
            text: "折线图表"
        },
        
        tooltip: {
        },
        legend: {
            data: [{
                name: "总收入",
                icon: 'rect'
        },{
                name: "图文页阅读数",
                icon: 'rect'
        }],
        right: 30
        },
        toolbox: {
        },
        xAxis: [
            {
                type: "category",
                data: categoryList[0]
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
                data: valueList[0]
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
                data: valueList[1]
            }
        ]
    }
    LineBroken.setOption(line_broken);
}

//
// Chart 3
//
if(document.getElementById('line_gradient_area')) {
    var LineGradientArea    = echarts.init(document.getElementById('line_gradient_area'),themename);
    var line_gradient_area  = {

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
                data: categoryList[0]
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
                data: valueList[0],
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
    LineGradientArea.setOption(line_gradient_area);
    
}




