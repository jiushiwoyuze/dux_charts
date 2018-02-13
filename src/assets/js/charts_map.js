
var themename = 'dux';


//
// china map chart
//

// 基于准备好的dom，初始化echarts实例

if(document.getElementById('map_china')) {
    var MapChina = echarts.init(document.getElementById('map_china'),themename);

    var map_china = {
        title: {
            text: "地域分布"
        },
        tooltip: {
            trigger: "item"
        },
        legend: {
            show: false
        },
        visualMap: {
            type: 'continuous',
            min: 0,
            max: 1000,
            text:['多','少'],
            realtime: false,
            itemWidth: 16,
            itemHeight: 120,
            left: 0,
            calculable : true,
            inRange: {
                color: ['#60ACFC', 'rgba(159,205,253,0.70)'],
                symbolSize: [100, 100]
            },
            outOfRange: {
                color: ['#EEEEEE'],
                symbolSize: [100, 100]
            }
        },
        toolbox: {
            show: false
        },
        series: [
            {
                name: "人数",
                type: "map",
                mapType: "china",
                roam: 'move',
                mapValueCalculation: "sum",
                zoom:1,
                selectedMode: false,
                showLegendSymbol: false,
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
                        areaColor: '#EEEEEE',
                        borderColor: '#FFFFFF'
                    },
                    emphasis: {
                        areaColor: '#E5F39B'
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
    MapChina.setOption(map_china);
}
