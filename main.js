



var themename = 'dux';
var backgroundOpt = "rgb(255, 255, 255)";

var dataOpt = [
                [699,1268,929,1778,453,387,870,1402,2797,1146],
                [1335,1934,723,1915,2852,757,1319,1238,2162,2359],
                [651,306,942,2420,1013,899,2660,2125,2639,1079]
            ];

var pie_label = {
                normal: {
                    textStyle: {
                        color: '#333333',
                        fontSize: 14
                    },
                    formatter: "{b}"  
                },
                emphasis: {
                    textStyle: {
                        color: '#7F9DB8',
                        fontSize: 14
                    }
                }
            };

var pie_labelLine = {
                normal: {
                    lineStyle: {
                        color: '#dbdbdb',
                        width: 2,
                        type: 'dotted'
                    },
                    smooth: 0.2,
                    length: 15,
                    length2: 12
                }
            };

var pie_itemStyle = {
                normal: {
                    // color: '#c23531',
                    borderColor: 'rgba(255, 255, 255, 1)',
                    borderWidth: 2,
                    //shadowBlur: 100,
                    //shadowColor: 'rgba(0, 0, 0, 0.3)',
                    //shadowOffsetX: 0,
                    //shadowOffsetY: 50,
                    opacity: 1
                },
                emphasis: {
                    borderColor: 'rgba(255, 255, 255, 1)',
                    borderWidth: 2,
                    label: {
                        show: true
                    }
                }
            };

var bar_label = {
            normal: {
                fontSize: 12,
                show: true,
                position: "top"
            },
            emphasis: {
            
            }
};
var bar_itemStyle = {
                normal: {
                    opacity: 0.7,
                    barBorderRadius: [20, 20, 20, 20],
                    shadowBlur: 50,
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                },
                emphasis: {
                    
                }
            };
var bar_grid = {
        x: 20,
        borderWidth: 1,
        x2: 20,
        bottom: 80
    };

var bar_barWidth = 17;

var xAxisOpt = {
        offset: 0,
        splitLine: {
            show: false
        },
        axisLabel: {
            show: true,
            interval: 0,
            rotate: 90,
            margin: 10,
            textStyle: {
                color: '#999'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                width: 1,
                color: '#dbdbdb'
            }
        }
    };

var yAxisOpt = {
            
            type: "value",
            splitLine: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    width: 1,
                    color: '#dbdbdb'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: "#999",
                    fontSize: 12
                }
            }
        };


//
// Gender Chart
//
var ChartLine = echarts.init(document.getElementById('base_line'),themename);
var ChartLineArea = echarts.init(document.getElementById('base_line_area'),themename);
var ChartBrokenLine = echarts.init(document.getElementById('broken_line'),themename);

var base_line_option = {
    title: {
        text: "线性基础图表",
        left: 30,
        top: 20,
        textAlign: "left",
        padding: 0,
        textStyle: {
            fontSize: 14,
            color: "rgb(68, 68, 68)"
        }
    },
    backgroundColor: backgroundOpt,
    
    tooltip: {
        trigger: "axis",
        show: true,
        axisPointer: {
            type: "line",
            lineStyle: {
                color: "rgb(181, 181, 181)",
                width: 1
            }
        },
        borderRadius: 0,
        padding: 10,
        backgroundColor: "rgba(51, 51, 51, 0.8)",
        textStyle: {
            fontSize: 12,
            color: "#fff"
        }
    },
    legend: {
        data: ["总收入", "图文页阅读数"],
        selectedMode: "multiple",
        top: 20,
        right: 30,
        textStyle: {
            fontSize: 12,
            color: "rgb(51, 51, 51)"
        }
    },
    toolbox: {
        show: false,
        feature: {
            dataView: {
                readOnly: true
            },
            magicType: {
                type: ["line", "bar", "stack", "tiled"],
                show: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        },
        x: "right",
        orient: "vertical"
    },
    calculable: false,
    xAxis: [
        {
            type: "category",
            boundaryGap: false,
            data: ["05-01", "05.02", "05.03", "05.04", "05.05", "05.06", "05.07", "05.08", "05.09", "05.10"],
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                interval: 0,
                margin: 10,
                showMaxLabel: false,
                textStyle: {
                    color: "rgb(153, 153, 153)",
                    align: "left"
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "rgb(219, 219, 219)",
                    width: 2
                }
            }
        }
    ],
    yAxis: [
        {
            type: "value",
            axisLabel: {
                textStyle: {
                    color: "rgb(153, 153, 153)"
                },
                inside: true,
                show: true,
                showMinLabel: false,
                margin: 0
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "rgb(231, 231, 231)",
                    type: "dashed"
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: "rgb(219, 219, 219)",
                    width: 2
                }
            },
            axisTick: {
                show: false
            }
        }
    ],
    series: [
        {
            name: "总收入",
            type: "line",
            smooth: true,
            itemStyle: {
                normal: {
                    color: "rgb(57, 152, 252)",
                    borderWidth: 2,
                    lineStyle: {
                        width: 2
                    },
                },
                emphasis: {
                    borderWidth: 2,
                    lineStyle: {
                        width: 2
                    },
                } 
            },
            data: [749, 1752, 1145, 1912, 1363, 2242, 1538, 2663, 1942, 2838],
            symbolSize: 3,
            showSymbol: false,
            symbol: "emptyCircle"
        },
        {
            name: "图文页阅读数",
            type: "line",
            itemStyle: {
                normal: {
                    color: "rgb(91, 196, 159)",
                    borderWidth: 2,
                    lineStyle: {
                        width: 2
                    }
                },
                emphasis: {
                    borderWidth: 2
                }
            },
            data: [1489, 517, 1753, 895, 2335, 596, 2434, 2011, 2945, 3200],
            smooth: true,
            symbol: "emptyCircle",
            showSymbol: false,
            symbolSize: 3
        }
    ],
    grid: {
        borderWidth: 0,
        x: 30,
        y: 60,
        x2: 30,
        y2: 50,
        containLabel: true
    },
    color: ["rgb(0, 127, 255)", "rgb(135, 206, 250)", "rgb(218, 112, 214)", "#32cd32", "#6495ed", "#ff69b4", "#ba55d3", "#cd5c5c", "#ffa500", "#40e0d0", "#1e90ff", "#ff6347", "#7b68ee", "#00fa9a", "rgb(255, 215, 0)", "#6699FF", "#ff6666", "#3cb371", "#b8860b", "#30e0e0", "#FFFFFF"]
}
var base_line_area_option = {
    title: {
        text: "线性面积图表",
        x: "left",
        textAlign: "left",
        padding: 10,
        y: "top",
        textStyle: {
            fontSize: 14,
            color: "rgb(68, 68, 68)"
        }
    },
    backgroundColor: backgroundOpt,
    
    tooltip: {
        trigger: "axis",
        show: true,
        axisPointer: {
            type: "line",
            lineStyle: {
                color: "rgb(181, 181, 181)",
                width: 1
            }
        },
        borderRadius: 0,
        padding: 10,
        backgroundColor: "rgba(51, 51, 51, 0.8)",
        textStyle: {
            fontSize: 12,
            color: "#fff"
        }
    },
    legend: {
        data: ["总收入", "图文页阅读数"],
        selectedMode: "multiple",
        top: 20,
        right: 30,
        textStyle: {
            fontSize: 12,
            color: "rgb(51, 51, 51)"
        }
    },
    toolbox: {
        show: false,
        feature: {
            dataView: {
                readOnly: true
            },
            magicType: {
                type: ["line", "bar", "stack", "tiled"],
                show: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        },
        x: "right",
        orient: "vertical"
    },
    calculable: false,
    xAxis: [
        {
            type: "category",
            boundaryGap: false,
            data: ["05-01", "05.02", "05.03", "05.04", "05.05", "05.06", "05.07", "05.08", "05.09", "05.10"],
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                interval: 0,
                margin: 10,
                showMaxLabel: false,
                textStyle: {
                    color: "rgb(153, 153, 153)",
                    align: "left"
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "rgb(219, 219, 219)",
                    width: 2
                }
            }
        }
    ],
    yAxis: [
        {
            type: "value",
            axisLabel: {
                textStyle: {
                    color: "rgb(153, 153, 153)"
                },
                inside: true,
                show: true,
                showMinLabel: false,
                margin: 0
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "rgb(231, 231, 231)",
                    type: "dashed"
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: "rgb(219, 219, 219)",
                    width: 2
                }
            },
            axisTick: {
                show: false
            }
        }
    ],
    series: [
        {
            name: "总收入",
            type: "line",
            smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: "default",
                        color: "rgba(57,152,252,0.10)"
                    },
                    color: "rgb(57, 152, 252)",
                    lineStyle: {
                        width: 1
                    }
                },
                emphasis: {
                    borderWidth: 1,
                    lineStyle: {
                        width: 1
                    }
                }
            },
            data: [749, 1752, 1145, 1912, 1363, 2242, 1538, 2663, 1942, 2838],
            symbolSize: 3,
            showSymbol: false,
            symbol: "emptyCircle"
        },
        {
            name: "图文页阅读数",
            type: "line",
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: "default",
                        color: "rgba(91, 196, 159, 0.10)"
                    },
                    color: "rgb(91, 196, 159)",
                    borderWidth: 0,
                    lineStyle: {
                        width: 1
                    }
                },
                emphasis: {
                    borderWidth: 1
                }
            },
            data: [1489, 517, 1753, 895, 2335, 596, 2434, 2011, 2945, 3200],
            smooth: true,
            symbol: "emptyCircle",
            showSymbol: false,
            symbolSize: 3
        }
    ],
    grid: {
        borderWidth: 0,
        x: 30,
        y: 60,
        x2: 30,
        y2: 50
    },
    color: ["rgb(0, 127, 255)", "rgb(135, 206, 250)", "rgb(218, 112, 214)", "#32cd32", "#6495ed", "#ff69b4", "#ba55d3", "#cd5c5c", "#ffa500", "#40e0d0", "#1e90ff", "#ff6347", "#7b68ee", "#00fa9a", "rgb(255, 215, 0)", "#6699FF", "#ff6666", "#3cb371", "#b8860b", "#30e0e0", "#FFFFFF"]
}
var broken_line_option = {
    title: {
        text: "折线图表",
        left: 30,
        top: 20,
        textAlign: "left",
        padding: 0,
        textStyle: {
            fontSize: 14,
            color: "rgb(68, 68, 68)"
        }
    },
    backgroundColor: backgroundOpt,
    
    tooltip: {
        trigger: "axis",
        show: true,
        axisPointer: {
            type: "line",
            lineStyle: {
                color: "rgb(181, 181, 181)",
                width: 1
            }
        },
        borderRadius: 0,
        padding: 10,
        backgroundColor: "rgba(51, 51, 51, 0.8)",
        textStyle: {
            fontSize: 12,
            color: "#fff"
        }
    },
    legend: {
        data: ["总收入", "图文页阅读数"],
        selectedMode: "multiple",
        top: 20,
        right: 30,
        textStyle: {
            fontSize: 12,
            color: "rgb(51, 51, 51)"
        }
    },
    toolbox: {
        show: false,
        feature: {
            dataView: {
                readOnly: true
            },
            magicType: {
                type: ["line", "bar", "stack", "tiled"],
                show: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        },
        x: "right",
        orient: "vertical"
    },
    calculable: false,
    xAxis: [
        {
            type: "category",
            boundaryGap: false,
            data: ["05-01", "05.02", "05.03", "05.04", "05.05", "05.06", "05.07", "05.08", "05.09", "05.10"],
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                interval: 0,
                margin: 10,
                showMaxLabel: false,
                textStyle: {
                    color: "rgb(153, 153, 153)",
                    align: "left"
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "rgb(219, 219, 219)",
                    width: 2
                }
            }
        }
    ],
    yAxis: [
        {
            type: "value",
            axisLabel: {
                textStyle: {
                    color: "rgb(153, 153, 153)"
                },
                inside: true,
                show: true,
                showMinLabel: false,
                margin: 0
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "rgb(231, 231, 231)",
                    type: "dashed"
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: "rgb(219, 219, 219)",
                    width: 2
                }
            },
            axisTick: {
                show: false
            }
        }
    ],
    series: [
        {
            name: "总收入",
            type: "line",
            smooth: false,
            itemStyle: {
                normal: {
                    color: "rgb(57, 152, 252)",
                    borderWidth: 1,
                    lineStyle: {
                        width: 2
                    }
                },
                emphasis: {
                    borderWidth: 2,
                    lineStyle: {
                        width: 2
                    }
                }
            },
            data: [749, 1752, 1145, 1912, 1363, 2242, 1538, 2663, 1942, 2838],
            symbolSize: 3,
            showSymbol: true,
            symbol: "emptyCircle"
        },
        {
            name: "图文页阅读数",
            type: "line",
            smooth: false,
            itemStyle: {
                normal: {
                    color: "rgb(91, 196, 159)",
                    borderWidth: 1,
                    lineStyle: {
                        width: 2
                    }
                },
                emphasis: {
                    borderWidth: 2
                }
            },
            data: [1489, 517, 1753, 895, 2335, 596, 2434, 2011, 2945, 3200],
            symbol: "emptyCircle",
            showSymbol: true,
            symbolSize: 3
        }
    ],
    grid: {
        borderWidth: 0,
        x: 30,
        y: 60,
        x2: 30,
        y2: 50,
        containLabel: true
    },
    color: ["rgb(0, 127, 255)", "rgb(135, 206, 250)", "rgb(218, 112, 214)", "#32cd32", "#6495ed", "#ff69b4", "#ba55d3", "#cd5c5c", "#ffa500", "#40e0d0", "#1e90ff", "#ff6347", "#7b68ee", "#00fa9a", "rgb(255, 215, 0)", "#6699FF", "#ff6666", "#3cb371", "#b8860b", "#30e0e0", "#FFFFFF"]
}

ChartLine.setOption(base_line_option);
ChartLineArea.setOption(base_line_area_option);
ChartBrokenLine.setOption(broken_line_option);


window.onresize = function() {
    ChartLine.resize();
    ChartLineArea.resize();
    ChartBrokenLine.resize();

    ChartChina.resize();
}



// 基于准备好的dom，初始化echarts实例
var ChartAge = echarts.init(document.getElementById('base_age'),themename);
var ChartTgi = echarts.init(document.getElementById('chart_tgi'),themename);
// 指定图表的配置项和数据


var base_age_option = {
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
        show: true
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: [
        {
            name: "年龄分布",
            type: "pie",
            radius: "50%",
            center: ["50%", "50%"],
            roseType : 'area',
            data: [
                {
                    value: 2600,
                    name: "<18岁"
                },
                {
                    value: 2200,
                    name: "18-24岁"
                },
                {
                    value: 2000,
                    name: "25-34岁"
                },
                {
                    value: 1900,
                    name: "35-44岁"
                },
                {
                    value: 1600,
                    name: "45-54岁"
                },
                {
                    value: 1500,
                    name: ">55岁"
                }
            ],
            label: pie_label,
            labelLine: pie_labelLine,
            itemStyle: pie_itemStyle
        }
    ],
    backgroundColor: backgroundOpt,
    title: {
        text: "年龄分布",
        x: "left",
        textAlign: "left",
        padding: 10,
        y: "top",
        textStyle: {
            fontSize: 14,
            color: "rgb(68, 68, 68)"
        }
    }
};


var chart_tgi_option = {

    backgroundColor: backgroundOpt,
    title: {
        text: "年龄分布 TGI",
        padding: 10,
        textStyle: {
            fontSize: 14
        }
    },
    tooltip: {
        trigger: "axis"
    },
    toolbox: {
        show: false
    },
    calculable: false,
    xAxis: [
        {
            type: "value",
            boundaryGap: [0, 0.01],
            splitLine: {
                show: false
            },
            axisLabel:{
                textStyle: {
                    color: '#999'
                }
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: '#dbdbdb'
                }
            },
            axisTick: {
                show: false
            }
        }
    ],
    yAxis: [
        {
            type: "category",
            data: ["<18", "  18-24", "  25-34", "  35-44", "  45-54", "  55+"],
            splitLine: {
                show: true
            },
            axisLabel:{
                textStyle: {
                    color: '#999'
                }
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: '#dbdbdb'
                }
            },
            axisTick: {
                show: false
            }
        }
    ],
    series: [
        {
            name: "2011年",
            type: "bar",
            data: [123, 200, 140, 170, 89, 45],
            markLine : {
                label:{
                    normal:{
                        show:true,
                        formatter:'{b}: {c}'
                    }
                },
                lineStyle: {
                    normal:{
                        type: 'solid',
                        color: '#FFCA73' 
                    }
                },
                data : [
                    {
                        //type : 'average', 
                        name : 'TGI',
                        xAxis: 100
                    }
                ]
            },
            barWidth: bar_barWidth,
            barGap:'50%',
            label: bar_label,
            itemStyle: bar_itemStyle
        }
    ],
    grid: {
        x: 60,
        borderWidth: 0,
        x2: 30
    }
};


ChartAge.setOption(base_age_option);
ChartTgi.setOption(chart_tgi_option);


//
// Gender Chart
//
var ChartGender = echarts.init(document.getElementById('base_gender'),themename);
// 指定图表的配置项和数据
var option = {
    backgroundColor: backgroundOpt,
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
        show: true
    },
    legend: {
        show: false,
        orient: "horizontal",
        x: "center",
        data: ["男性", "女性", "其它"],
        y: "bottom"
    },
    toolbox: {
        show: false,
        feature: {
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            },
            magicType: {
                type: ['bar']
            },
            mark: {
                show: false
            }
        }
    },
    calculable: false,
    series: [
        {
            name: "男女比例",
            type: "pie",
            radius: ["20%", "50%"],
            itemStyle: pie_itemStyle,
            label: pie_label,
            labelLine: pie_labelLine,
            data: [
                {
                    value: 335,
                    name: "男性"
                },
                {
                    value: 310,
                    name: "女性"
                }
            ]
        }
    ],
    title: {
        text: "性别比例",
        padding: 10,
        textStyle: {
            fontSize: 14
        }
    }
};
// 使用刚指定的配置项和数据显示图表。
ChartGender.setOption(option);



//
// education Chart
//


var ChartRing = echarts.init(document.getElementById('chart_ring'),themename);
// 指定图表的配置项和数据
var chart_ring_option = {
    backgroundColor: backgroundOpt,
    // backgroundColor:"#2c343c",
    title: {
        text: "标准环状图",
        x: "left",
        textAlign: "left",
        padding: 10,
        y: "top",
        textStyle: {
            fontSize: 14,
            color: "rgb(68, 68, 68)"
            //color: "#ffffff"
        }
    },
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
        show: true
    },
    legend: {
        show: false,
        orient: "horizontal",
        x: "center",
        data: ["高中以下", "高中", "本科", "硕士", "博士"],
        y: "bottom",
        padding: 20
    },
    toolbox: {
        show: false
    },
    series: [
        {
            name: "环形图",
            type: "pie",
            center: ["50%", "50%"],
            //roseType : 'area',
            radius: ["35%", "50%"],
            label: pie_label,
            labelLine: pie_labelLine,
            itemStyle: pie_itemStyle,
            data: [
                {
                    value: 1600,
                    name: "高中以下"
                },
                {
                    value: 2000,
                    name: "高中"
                },
                {
                    value: 3000,
                    name: "本科"
                },
                {
                    value: 2500,
                    name: "硕士"
                },
                {
                    value: 1300,
                    name: "博士"
                }
            ]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
ChartRing.setOption(chart_ring_option);


//
// china map chart
//

// 基于准备好的dom，初始化echarts实例
var ChartChina = echarts.init(document.getElementById('base_china'),themename);

var option = {
    backgroundColor: backgroundOpt,
    title: {
        text: "地域分布",
        x: "left",
        textAlign: "left",
        padding: 10,
        y: "top",
        textStyle: {
            fontSize: 14,
            color: "rgb(68, 68, 68)"
        }
    },
    tooltip: {
        trigger: "item"
    },
    legend: {
        show: false
    },
    dataRange: {
        min: 0,
        max: 2500,
        x: "left",
        y: "bottom",
        text: ["多", "少"],
        calculable: true
    },
    toolbox: {
        show: false
    },
    roamController: {
        show: false,
        x: "right",
        mapTypeControl: {
            china: true
        }
    },
    series: [
        {
            name: "人数",
            type: "map",
            mapType: "china",
            roam: true,
            mapValueCalculation: "sum",
            scaleLimit:{
                max: 1,
                min: 1
            },
            label:{
                normal:{
                    textStyle:{
                        color: '#666'
                    }
                },
                emphasis:{
                    textStyle:{
                        color: '#234EA5'
                    }
                }
            },
            itemStyle: {
                    normal: {
                    areaColor: '#323c48',
                    borderColor: '#f7f7f7',
                    // borderColor: 'rgba(0, 0, 0, 0.1)',
                    label: {
                        show: true
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data: [
                {
                    name: "北京",
                    value: 234
                },
                {
                    name: "天津",
                    value: 532
                },
                {
                    name: "上海",
                    value: 134
                },
                {
                    name: "重庆",
                    value: 983
                },
                {
                    name: "河北",
                    value: 783
                },
                {
                    name: "河南",
                    value: 345
                },
                {
                    name: "云南",
                    value: 872
                },
                {
                    name: "辽宁",
                    value: 94
                },
                {
                    name: "黑龙江",
                    value: 342
                },
                {
                    name: "湖南",
                    value: 989
                },
                {
                    name: "安徽",
                    value: 767
                },
                {
                    name: "山东",
                    value: 675
                },
                {
                    name: "新疆",
                    value: 874
                },
                {
                    name: "江苏",
                    value: 874
                },
                {
                    name: "浙江",
                    value: 878
                },
                {
                    name: "江西",
                    value: 928
                },
                {
                    name: "湖北",
                    value: 44
                },
                {
                    name: "广西",
                    value: 448
                },
                {
                    name: "甘肃",
                    value: 887
                },
                {
                    name: "山西",
                    value: 903
                },
                {
                    name: "内蒙古",
                    value: 673
                },
                {
                    name: "陕西",
                    value: 563
                },
                {
                    name: "吉林",
                    value: 747
                },
                {
                    name: "福建",
                    value: 112
                },
                {
                    name: "贵州",
                    value: 473
                },
                {
                    name: "广东",
                    value: 647
                },
                {
                    name: "青海",
                    value: 838
                },
                {
                    name: "西藏",
                    value: 626
                },
                {
                    name: "四川",
                    value: 515
                },
                {
                    name: "宁夏",
                    value: 172
                },
                {
                    name: "海南",
                    value: 77
                },
                {
                    name: "台湾",
                    value: 837
                },
                {
                    name: "香港",
                    value: 677
                },
                {
                    name: "澳门",
                    value: 43
                }
            ]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
ChartChina.setOption(option);



//
// 汽车行业
//



// 基于准备好的dom，初始化echarts实例
var AutoPurpose = echarts.init(document.getElementById('auto_purpose'),themename);
// 指定图表的配置项和数据
var option = {
    backgroundColor: backgroundOpt,
    title: {
        text: "汽车用途",
        x: "left",
        textAlign: "left",
        padding: 10,
        y: "top",
        textStyle: {
            fontSize: 14,
            color: "rgb(68, 68, 68)"
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        show: false
    },
    series: [
        {
            name:'用途',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '50%'],
            itemStyle: pie_itemStyle,
            label: pie_label,
            labelLine: pie_labelLine,
            data:[
                {value:335, name:'家庭用车'},
                {value:679, name:'商务用车'},
                {value:1548, name:'休闲用车'}
            ]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
AutoPurpose.setOption(option);


// 基于准备好的dom，初始化echarts实例
var AutoLevel = echarts.init(document.getElementById('auto_level'),themename);
// 指定图表的配置项和数据
var option = {
    backgroundColor: backgroundOpt,
    title: {
        text: "汽车级别",
        x: "left",
        textAlign: "left",
        padding: 10,
        y: "top",
        textStyle: {
            fontSize: 14,
            color: "rgb(68, 68, 68)"
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        show: false
    },
    series: [
        {
            name:'车型',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '50%'],

            itemStyle: pie_itemStyle,
            label: pie_label,
            labelLine: pie_labelLine,
            data:[
                {name: '微型车', value: 2131},
                {name: '小型车', value: 1134},
                {name: '紧凑型车', value: 6545},
                {name: '中型车', value: 2345},
                {name: '中大型车', value: 974},
                {name: '大型车', value: 6321}
            ]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
AutoLevel.setOption(option);



// 基于准备好的dom，初始化echarts实例
var AutoModels = echarts.init(document.getElementById('auto_models'),themename);
// 指定图表的配置项和数据
var option = {
    backgroundColor: backgroundOpt,
    title: {
        text: "车型",
        x: "left",
        textAlign: "left",
        padding: 10,
        y: "top",
        textStyle: {
            fontSize: 14,
            color: "rgb(68, 68, 68)"
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        show: false
    },
    series: [
        {
            name:'车型',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '50%'],
            itemStyle: pie_itemStyle,
            label: pie_label,
            labelLine: pie_labelLine,
            data:[
                {name: '轿车', value: 2131},
                {name: 'MPV', value: 3134},
                {name: '跑车', value: 545},
                {name: '皮卡', value: 2345},
                {name: '微面', value: 974},
                {name: '轻客', value: 6321}
            ]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
AutoModels.setOption(option);




// 基于准备好的dom，初始化echarts实例
var AutoBrand = echarts.init(document.getElementById('auto_brand'),themename);
// 指定图表的配置项和数据
var auto_brand_option = {
    backgroundColor: backgroundOpt,
    title: {
        text: "品牌",
        x: "left",
        textAlign: "left",
        padding: 10,
        y: "top",
        textStyle: {
            fontSize: 14,
            color: "rgb(68, 68, 68)"
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        show: false
    },
    label: {
        normal: {
            textStyle: {
                color: '#7F9DB8',
                fontSize: 12
            },
            formatter: "{b}"  
        },
        emphasis: {
            textStyle: {
                color: '#7F9DB8',
                fontSize: 12
            }
        }
    },
    labelLine: {
        normal: {
            lineStyle: {
                color: '#7F9DB8'
            },
            smooth: 0.2,
            length: 5,
            length2: 20
        }
    },
    series: [
        {
            name:'品牌',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '50%'],

            label: {
                normal: {
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {name: '大众', value: 2131},
                {name: '宝马', value: 3134},
                {name: '奔驰', value: 545},
                {name: '奥迪', value: 2345},
                {name: '起亚', value: 974},
                {name: '丰田', value: 545},
                {name: '凯迪拉克', value: 2345},
                {name: '福特', value: 974},
                {name: '红旗', value: 6321}
            ]
        }
    ]
};

var auto_brand_bar_option = {

    backgroundColor: backgroundOpt,
    title: {
        text: "品牌",
        padding: 10,
        textStyle: {
            fontSize: 14
        }
    },
    tooltip: {
        trigger: "axis"
    },
    toolbox: {
        show: false,
    },
    calculable: false,
    xAxis: [
        {
            type: "category",
            data: ['大众','宝马','奔驰','奥迪','起亚','丰田','凯迪拉克','福特','红旗','百度'],
            offset: 0,
            splitLine: {
                show: false
            },
            axisLabel: {
                show: true,
                interval: 0,
                rotate: 90,
                margin: 10,
                textStyle: {
                    color: '#999'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        }
    ],
    yAxis: [yAxisOpt],
    series: [
        {
            name: "2011年",
            type: "bar",
            data: dataOpt[0],
            barWidth: bar_barWidth,
            label: bar_label,
            itemStyle: bar_itemStyle
        }
    ],
    grid: bar_grid,
};
// 使用刚指定的配置项和数据显示图表。
AutoBrand.setOption(auto_brand_bar_option);






// 基于准备好的dom，初始化echarts实例
var AutoPrice = echarts.init(document.getElementById('auto_price'),themename);
// 指定图表的配置项和数据
var auto_price_pie_option = {
    backgroundColor: backgroundOpt,
    title: {
        text: "价格",
        x: "left",
        textAlign: "left",
        padding: 10,
        y: "top",
        textStyle: {
            fontSize: 14,
            color: "rgb(68, 68, 68)"
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        show: false
    },
    label: {
        normal: {
            textStyle: {
                color: '#7F9DB8',
                fontSize: 12
            },
            formatter: "{b}"  
        },
        emphasis: {
            textStyle: {
                color: '#7F9DB8',
                fontSize: 12
            }
        }
    },
    labelLine: {
        normal: {
            lineStyle: {
                color: '#7F9DB8'
            },
            smooth: 0.2,
            length: 5,
            length2: 20
        }
    },
    series: [
        {
            name:'价格',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '50%'],

            label: {
                normal: {
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {name: '0-5万', value: 123},
                {name: '5-10万', value: 234},
                {name: '10-15万', value: 432},
                {name: '15-20万', value: 654},
                {name: '20-25万', value: 734},
                {name: '25-30万', value: 654},
                {name: '30-35万', value: 754},
                {name: '35-50万', value: 434},
                {name: '50-70万', value: 123},
                {name: '70-100万', value: 90}
            ]
        }
    ]
};

var auto_price_bar_option = {

    backgroundColor: backgroundOpt,
    title: {
        text: "价格",
        padding: 10,
        textStyle: {
            fontSize: 14
        }
    },
    tooltip: {
        trigger: "axis"
    },
    toolbox: {
        show: false,
    },
    calculable: false,
    xAxis: [
        {
            type: "category",
            data: ['0-5万','5-10万','10-15万','15-20万','20-25万','25-30万','30-35万','35-50万','50-70万','70-100万'],
            offset: 0,
            splitLine: {
                show: false
            },
            axisLabel: {
                show: true,
                interval: 0,
                rotate: 90,
                margin: 10,
                textStyle: {
                    color: '#999'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        }
    ],
    yAxis: [yAxisOpt],
    series: [
        {
            name: "2011年",
            type: "bar",
            data: dataOpt[1],
            barWidth: bar_barWidth,
            label: bar_label,
            itemStyle: bar_itemStyle
        }
    ],
    grid: bar_grid
};
// 使用刚指定的配置项和数据显示图表。
AutoPrice.setOption(auto_price_bar_option);





// 基于准备好的dom，初始化echarts实例
var AutoCountry = echarts.init(document.getElementById('auto_country'),themename);
// 指定图表的配置项和数据
var auto_country_pie_option = {
    backgroundColor: backgroundOpt,
    title: {
        text: "产地",
        x: "left",
        textAlign: "left",
        padding: 10,
        y: "top",
        textStyle: {
            fontSize: 14,
            color: "rgb(68, 68, 68)"
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        show: false
    },
    label: {
        normal: {
            textStyle: {
                color: '#7F9DB8',
                fontSize: 12
            },
            formatter: "{b}"  
        },
        emphasis: {
            textStyle: {
                color: '#7F9DB8',
                fontSize: 12
            }
        }
    },
    labelLine: {
        normal: {
            lineStyle: {
                color: '#7F9DB8'
            },
            smooth: 0.2,
            length: 5,
            length2: 20
        }
    },
    series: [
        {
            name:'产地',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '50%'],

            label: {
                normal: {
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {name: '中国', value: 123},
                {name: '德国', value: 432},
                {name: '日本', value: 654},
                {name: '美国', value: 734},
                {name: '韩国', value: 654},
                {name: '法国', value: 754},
                {name: '英国', value: 434},
                {name: '意大利', value: 123},
                {name: '瑞典', value: 90},
                {name: '荷兰', value: 20}
            ]
        }
    ]
};

var auto_country_bar_option = {

    backgroundColor: backgroundOpt,
    title: {
        text: "国家",
        padding: 10,
        textStyle: {
            fontSize: 14
        }
    },
    tooltip: {
        trigger: "axis"
    },
    toolbox: {
        show: false,
    },
    calculable: false,
    xAxis: [
        {
            type: "category",
            data: ['中国','德国','日本','美国','韩国','法国','英国','意大利','瑞典','荷兰'],
            offset: 0,
            splitLine: {
                show: false
            },
            axisLabel: {
                show: true,
                interval: 0,
                rotate: 90,
                margin: 10,
                textStyle: {
                    color: '#999'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        }
    ],
    yAxis: [yAxisOpt],
    series: [
        {
            name: "2011年",
            type: "bar",
            data: dataOpt[2],
            barWidth: bar_barWidth,
            label: bar_label,
            itemStyle: bar_itemStyle
        }
    ],
    grid: bar_grid
};
// 使用刚指定的配置项和数据显示图表。
AutoCountry.setOption(auto_country_bar_option);






// 基于准备好的dom，初始化echarts实例
var AutoGrade = echarts.init(document.getElementById('auto_grade'),themename);
// 指定图表的配置项和数据
var option = {
    backgroundColor: backgroundOpt,
    title: {
        text: "档次",
        x: "left",
        textAlign: "left",
        padding: 10,
        y: "top",
        textStyle: {
            fontSize: 14,
            color: "rgb(68, 68, 68)"
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        show: false
    },
    series: [
        {
            name:'档次',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '50%'],
            itemStyle: pie_itemStyle,
            label: pie_label,
            labelLine: pie_labelLine,
            data:[
                {name: '高档', value: 123},
                {name: '中档', value: 432},
                {name: '入门级', value: 654}
            ]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
AutoGrade.setOption(option);






//
// interest chart
//

var ChartInterest = echarts.init(document.getElementById('base_interest'),themename);

var keywords = {
  "个护美容": 231,
  "书籍阅读": 353,
  "休闲爱好": 456,
  "体育健身": 342,
  "公益": 234,
  "医疗健康": 765,
  "商务服务": 678,
  "婚恋交友": 234,
  "家电数码": 543,
  "建材家居": 987,
  "影视音乐": 765,
  "房产": 446,
  "教育培训": 334,
  "旅游出行": 654,
  "星座运势": 724,
  "服饰鞋包": 187,
  "母婴亲子": 145,
  "求职创业": 945,
  "汽车": 234,
  "游戏": 166,
  "生活服务": 222,
  "网络购物": 444,
  "花鸟萌宠": 634,
  "资讯": 276,
  "软件应用": 234,
  "金融财经": 123,
  "非汽车类机动车": 876,
  "餐饮美食": 234,
  "borderColorSaturation": 110,
  "handleIcon": 232,
  "handleStyle": 645,
  "borderType": 231,
  "constantSpeed": 431,
  "polyline": 223,
  "blendMode": 123,
  "dataBackground": 176,
  "textAlign": 845,
  "textBaseline": 734,
  "brush": 934
};

var data = [];
for (var name in keywords) {
    data.push({
        name: name,
        value: Math.sqrt(keywords[name])
    })
}

var maskImage = new Image();

var option = {
    backgroundColor: backgroundOpt,
    title: {
        text: "兴趣词云",
        x: "left",
        textAlign: "left",
        padding: 10,
        y: "top",
        textStyle: {
            fontSize: 14,
            color: "rgb(68, 68, 68)"
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c}"
    },
    series: [ {
        type: 'wordCloud',
        sizeRange: [10, 100],
        rotationRange: [-90, 90],
        rotationStep: 45,
        gridSize: 2,
        shape: 'pentagon',
        maskImage: maskImage,
        textStyle: {
            normal: {
                fontWeight: '100',
                /*color: function () {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }*/
                opacity:0.7
            },
            emphasis: {
                shadowBlur: 50,
                shadowColor: '#2D74FF'
            }
        },
        data: data.sort(function (a, b) {
            return b.value  - a.value;
        })
    } ]
};

maskImage.onload = function () {
    option.series[0].maskImage
    ChartInterest.setOption(option);
}

maskImage.src = 'logo.png';




