
var themename = 'dux';

var dataOpt = [
                { value: 1600, name: "高中以下" },
                { value: 2000, name: "高中"},
                { value: 3000, name: "本科" },
                { value: 2500, name: "硕士"},
                { value: 1300, name: "博士"}
            ];

var colorOrder = ['#60ACFC', '#4EBECD', '#63D5B2', '#A1E497', '#DCEF7A']


// 指定图表的配置项和数据

var pie_base_option = {
    title: {
        text: "标准饼图"
    },
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
        show: true
    },
    legend: {
        show: false
    },
    color: colorOrder ,
    series: [
        {
            name: "学位",
            type: "pie",
            center: ["50%", "50%"],
            radius: ["0", "50%"],
            itemStyle: {
                normal: {
                    borderWidth: 0
                },
                emphasis: {
                    borderWidth: 0
                }
            },
            data: dataOpt
        }
    ]
};

var pie_ring_option = {
    title: {
        text: "标准环状图"
    },
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
        show: true
    },
    legend: {
        show: false
    },
    color: colorOrder ,
    series: [
        {
            name: "学位",
            type: "pie",
            center: ["50%", "50%"],
            radius: ["35%", "50%"],
            data: dataOpt
        }
    ]
};

var pie_ring_center_option = {
    title: {
        text: "标签居中环状图"
    },
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
        show: true
    },
    legend: {
        show: false
    },
    color: colorOrder ,
    series: [
        {
            name: "学位",
            type: "pie",
            center: ["50%", "50%"],
            radius: ["35%", "50%"],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: 18
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: dataOpt
        }
    ]
};

var pie_rose_option = {
    title: {
        text: "南丁格尔玫瑰图"
    },
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
        show: true
    },
    legend: {
        show: false
    },
    color: colorOrder ,
    series: [
        {
            name: "学位",
            type: "pie",
            center: ["50%", "50%"],
            radius: ["10%", "60%"],
            roseType : 'area',
            data: dataOpt
        }
    ]
};

var pie_nest_option = {
    title: {
        text: "饼环嵌套图"
    },
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
        show: true
    },
    legend: {
        show: false
    },
    color: colorOrder ,
    series: [
        {
            name: "大学升学率",
            type: "pie",
            center: ["50%", "50%"],
            radius: ["0%", "35%"],
            label: {
                normal: {
                    show: true,
                    position: "inner",
                    formatter: "{d}%"
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 3600, name: "大学以下" },
                { value: 6800, name: "大学以上"}
            ]
        },
        {
            name: "学历",
            type: "pie",
            center: ["50%", "50%"],
            radius: ["50%", "65%"],
            data: dataOpt
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。



if(document.getElementById('pie_base')) {
    var PieBase = echarts.init(document.getElementById('pie_base'),themename);
    PieBase.setOption(pie_base_option);
}

if(document.getElementById('pie_ring')) {
    var PieRing = echarts.init(document.getElementById('pie_ring'),themename);
    PieRing.setOption(pie_ring_option);
}

if(document.getElementById('pie_ring_center')) {
    var PieRingCenter = echarts.init(document.getElementById('pie_ring_center'),themename);
    PieRingCenter.setOption(pie_ring_center_option);
}

if(document.getElementById('pie_rose')) {
    var PieRose = echarts.init(document.getElementById('pie_rose'),themename);
    PieRose.setOption(pie_rose_option);
}

if(document.getElementById('pie_nest')) {
    var PieNest = echarts.init(document.getElementById('pie_nest'),themename);
    PieNest.setOption(pie_nest_option);

}



