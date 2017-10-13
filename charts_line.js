
var themename = 'dux';



var valueList = [
                [749, 1752, 1145, 1912, 1363, 2242, 1538, 2663, 1942, 3138],
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
                name: "访问量",
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
                name: "访问量",
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
                name: "访问量",
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
                name: "访问量",
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
                    name: "访问量",
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
                label: {
                    normal:{
                        show: false
                    },
                    emphasis: {
                        show: true,
                        position: 'top',
                        color: '#333333',
                        fontSize: '12',
                        distance: 10
                    }
                },
                data: valueList[0]
            },
            {
                name: "访问量",
                type: "line",
                smooth: false,
                label: {
                    normal:{
                        show: false
                    },
                    emphasis: {
                        show: true,
                        position: 'top',
                        color: '#333333',
                        fontSize: '12',
                        distance: 10
                    }
                },
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
// Chart 4
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


//
// Chart 5
//
if(document.getElementById('line_multi_y') ) {
    var LineMultiY    = echarts.init(document.getElementById('line_multi_y'),themename);
    var line_multi_y   = {
        title: {
            text: "多Y轴线性图表"
        },
        tooltip: {
            trigger:'axis',
            axisPointer: {
                type: 'cross'
            }
            // 参见 dux-theme.js
        },
        legend: {
            data: [{
                name: "总收入",
                icon: 'rect'
        },{
                name: "访问量",
                icon: 'rect'
        }],
        right: 30
        },
        grid: {
            top: 80
        },
        xAxis: [
            {
                type: "category",
                boundaryGap: true,
                axisLabel:{
                    show: true,
                    showMaxLabel: true,
                    align: 'center'
                },
                data: categoryList[0]
            }
        ],
        yAxis: [
            {
                type: "value",
                //name:'总收入',
                //nameLocation:'end',
                axisLine:{
                    show: true,
                    lineStyle:{
                        color: "rgb(57, 152, 252)",
                        width: 2
                    }
                },
                axisLabel:{
                    show: true,
                    inside:true,
                    margin: 10,
                    formatter:'{value} 元'
                }
            },
            {
                type: "value",
                //name:'访问量',
                //nameLocation:'end',
                position: 'right',
                axisLine:{
                    show: true,
                    lineStyle:{
                        color: 'rgb(91, 196, 159)',
                        width: 2
                    }
                },
                splitLine:{
                    //show:false
                },
                axisLabel:{
                    show: true,
                    inside:true,
                    margin: 10,
                    align: 'right',
                    formatter:'{value} pv'
                }
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
                name: "访问量",
                type: "line",
                itemStyle: {
                    normal: {
                        color: "rgb(91, 196, 159)"
                    }
                },
                yAxisIndex: 1,
                data: valueList[1]
            }
        ]
    }
    LineMultiY.setOption(line_multi_y);
}







//
// Chart 4
//
if(document.getElementById('line_logo')) {
    var LineLogo    = echarts.init(document.getElementById('line_logo'));
    var line_logo  = {

        // Make gradient line here
        visualMap: [{
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 30
        }],
        legend:{
            show:false,
        },
        title: {
            //show:false,
            text: "图表演示库",
            link: 'index.php',
            textStyle:{
                fontSize:18,
                fontFamily: 'PingFang SC',
                fontWeight: 'lighter',
                color: '#ffffff',
                verticalAlign: 'middle',
                lineHeight: 50,
                align:'center',
                height:50,
                width: 150,
            },
            top: 12,
            left: 100,
        },
        grid:{
            top: 10,
            left:0,
            right:50,
            bottom:10
        },
        tooltip: {
            show:false,
        },
        xAxis: [
            {
                type: "category",
                show:false,
                data: [8,2,16,8,20,18,30]
            }
        ],
        yAxis: {
            show: false
        },
        series: [
            {
                name: "用户",
                type: "line",
                smooth: true,
                data: [-50,50,-50,50,-50],
                //data: [-20,30,-50,30,-20],
                //silent: true,
                cursor: 'pointer',
                label:{
                    normal:{
                        show: false
                    }
                },
                showSymbol:false,
                itemStyle: {
                    normal :{
                        borderWidth: 1,
                        borderColor:'#ffffff',
                        color: "#ffffff"
                    }
                },
                lineStyle:{
                    normal:{
                        width: 1,
                        shadowBlur: 5,
                        shadowColor: '#ffffff',
                        shadowOffsetY: 2,
                        //color: "rgba(255, 255, 255, 1)"
                        color: "rgba(57,152,252,1)",
                    }
                },
                areaStyle: {
                    normal: {
                        color: "rgba(57,152,252,0.50)",
                        /*color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(255, 255, 255, 0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(34, 34, 34, 0.1)'
                        }])*/
                    }
                }
            },
            {
                name: "第二",
                type: "line",
                smooth: true,
                data: [50,-50,50,-50,50],
                //data: [20,-30,50,-30,20],
                //silent: true,
                cursor: 'pointer',
                label:{
                    normal:{
                        show: false
                    }
                },
                showSymbol:false,
                itemStyle: {
                    normal :{
                        borderWidth: 2,
                        borderColor:'#ffffff',
                        color: "#ffffff"
                    }
                },
                lineStyle:{
                    normal:{
                        width: 1,
                        shadowBlur: 5,
                        shadowColor: '#ffffff',
                        shadowOffsetY: 2,
                        //color: "rgba(255, 255, 255, 1)"
                        color: "rgba(91, 196, 159, 1)"
                    }
                },
                areaStyle: {
                    normal: {
                        color: "rgba(91, 196, 159, 0.50)"
                        /*color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(255, 255, 255, 0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(34, 34, 34, 0.1)'
                        }])*/
                    }
                }
            }
        ]
    };
    LineLogo.setOption(line_logo);
    
}

