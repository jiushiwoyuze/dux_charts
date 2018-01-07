
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
<<<<<<< HEAD:assets/js/charts_bar.js
                ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '11:00', '12:00', '13:00']
=======
                ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '11:00', '12:00', '13:00'],
                ['周一','周二','周三','周四','周五','周六','周日']
>>>>>>> bd-internal-v2:src/assets/js/charts_bar.js
            ];



var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321];
var yMax = 500;
var dataShadow = [];

for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}


// Chart 1
//
if(document.getElementById('bar_v_base')) {
    var BarVBase    = echarts.init(document.getElementById('bar_v_base'),themename);
    var bar_v_base = {
        title: {
            text: "柱状基础图表"
        },
        tooltip: {
            // 参见 dux-theme.js
        },
        legend: {
            show: false,
            data: ["总收入"],
            right: 30
        },
        xAxis: [
            {
                type: "category",
                boundaryGap: true,
                axisTick: {
                    alignWithLabel: false
                },
                axisLabel: {
                    align: "center",
                    showMaxLabel: true,
                },
                data: xAxisData[4]
            }
        ],
        yAxis: [
            {
                type: "value",
                axisLabel: {
                    inside: false,
                    margin: 10
                }
            }
        ],
        series: [
            {
                name: "总收入",
                type: "bar",
                barWidth: 20,
                barMaxWidth: 40,
                label: {
                    normal:{
                        show: false
                    },
                    emphasis: {
                        show: true,
                        position: 'top',
                        color: '#333333',
                        fontSize: '14',
                        distance: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: "rgb(57, 152, 252)"
                    }
                },
                data: dataOpt[0]
            }
        ]
    }
    BarVBase.setOption(bar_v_base);
}

if(document.getElementById('bar_v_mult')) {
    var BarVMult    = echarts.init(document.getElementById('bar_v_mult'),themename);
    var bar_v_mult = {
        title: {
            text: "多数据柱状图表"
            // 参见 dux-theme.js
        },
        tooltip: {
            // 参见 dux-theme.js
        },
        legend: {
            data: ["总收入", "PV", "UV"],
            right: 30
            // 参见 dux-theme.js
        },
        toolbox: {
            // 参见 dux-theme.js
        },
        xAxis: [
            {
                type: "category",
                boundaryGap: true,
                axisTick: {
                    alignWithLabel: false
                },
                axisLabel: {
                    align: "center",
                    showMaxLabel: true,
                },
                data: xAxisData[2]
            }
        ],
        yAxis: [
            {
                type: "value",
                axisLabel: {
                    inside: false,
                    margin: 10
                }
            }
        ],
        series: [
            {
                name: "总收入",
                type: "bar",
                barMaxWidth: 14,
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
                name: "PV",
                type: "bar",
                barMaxWidth: 14,
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
            },
            {
                name: "UV",
                type: "bar",
                barMaxWidth: 14,
                itemStyle: {
                    normal: {
                        color: "#66D7D2",
                        lineStyle: {
                            width: 1
                        }
                    },
                    emphasis: {
                        borderWidth: 1,
                    }
                },
                // 参见 dux-theme.js
                data: dataOpt[2]
            }
        ]
    }
    BarVMult.setOption(bar_v_mult);
}

if(document.getElementById('bar_h_base')) {
    var BarHBase    = echarts.init(document.getElementById('bar_h_base'),themename);
    var bar_h_base = {
        title: {
            text: "条形图表"
        },

        tooltip: {
        },
        legend: {
            show:false
        },
        toolbox: {
        },
        xAxis: [
            {
                type: "value",
                inside: false,
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                margin: 10
            }
        ],
        yAxis: [
            {
                type: "category",
                boundaryGap: true,
                axisLine: {
                    show: false
                },
                axisLabel: {
                    align: "right",
                    margin: 10,
                    showMaxLabel: true,
                },
                data: ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        series: [
            {
                type: "bar",
                itemStyle: {
                    normal: {color: 'rgba(0,0,0,0.05)'}
                },
                barWidth: 20,
                barGap:'-100%',
                barCategoryGap:'40%',
                data: dataShadow,
                animation: false
            },
            {
                name: "图文阅读数",
                type: "bar",
                barWidth: 20,
                itemStyle: {
                    normal: {
                        color: "#60ACFC"
                    }
                },
                data: data
            }
        ]
    }
    BarHBase.setOption(bar_h_base);
}

if(document.getElementById('bar_h_stack')) {
    var BarHStack   = echarts.init(document.getElementById('bar_h_stack'),themename);
    var bar_h_stack = {
        title: {
            text: "条形堆叠图表"
        },

        tooltip: {
        },
        legend: {
            show:false
        },
        toolbox: {
        },
        xAxis: [
            {
                type: "value",
                axisLabel: {
                    show: true,
                    inside: false,
                    margin: 10
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#dbdbdb"
                    }
                },
                splitLine: {
                    show: true
                },
                margin: 10
            }
        ],
        yAxis: [
            {
                type: "category",
                boundaryGap: true,
                axisLine: {
                    show: false
                },
                axisLabel: {
                    align: "right",
                    margin: 10,
                    showMaxLabel: true,
                },
            data: ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: 20,
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    },
                    emphasis:{
                        show:true,
                        position: 'insideRight'
                    }
                },
                data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
                name: '邮件营销',
                type: 'bar',
                barWidth: 20,
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    },
                    emphasis:{
                        show:true,
                        position: 'insideRight'
                    }
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'bar',
                barWidth: 20,
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    },
                    emphasis:{
                        show:true,
                        position: 'insideRight'
                    }
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'bar',
                barWidth: 20,
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    },
                    emphasis:{
                        show:true,
                        position: 'insideRight'
                    }
                },
                data: [150, 212, 201, 154, 190, 330, 410]
            },
            {
                name: '搜索引擎',
                type: 'bar',
                barWidth: 20,
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    },
                    emphasis:{
                        show:true,
                        position: 'insideRight'
                    }
                },
                data: [820, 832, 901, 934, 1290, 1330, 1320]
            }
        ]
    }
    BarHStack.setOption(bar_h_stack);
}


if(document.getElementById('bar_h_negative')) {
    var BarHNegative   = echarts.init(document.getElementById('bar_h_negative'),themename);
    var bar_h_negative = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid:{
                right:50
            },
            xAxis : [
                {
                    type : 'value',
                    axisLabel: {
                        inside:false,
                        margin:10
                    }
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    axisLabel: {
                        inside:false,
                        align: "right",
                        margin: 10,
                        showMaxLabel: true,
                    },
                    boundaryGap: true,
                    axisTick : {show: false},
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            series : [
                {
                    name:'收入',
                    type:'bar',
                    stack: '总量',
                    barMaxWidth: 20,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideLeft'
                        }
                    },
                    data:[320, 302, 341, 374, 390, 450, 420]
                },
                {
                    name:'支出',
                    type:'bar',
                    stack: '总量',
                    barMaxWidth: 20,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data:[-220, -132, -401, -234, -390, -230, -210]
                }
            ]
        };

    BarHNegative.setOption(bar_h_negative);
}
