
// var themename = 'dux';


var size = 20;
var size1 = 50;
var size2 = 20;
var yy = 200;
var yy1 = 250;
var option_graph_place = {
    tooltip: {
        formatter: '{b}'
    },
    color: ['#DCEF7A','#60ACFC', '#4EBECD', '#63D5B2', '#A1E497'],
    toolbox: {
        show: true,
        feature: {
            restore: {
                show: true
            }
        }
    },
    backgroundColor: '#FFFFFF',
    animationDuration: 1000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '场所',
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 120,
            gravity: 0.1,
            edgeLength: 80,
            layoutAnimation: true,
        },
        categories:[
          {
          name: '交通',itemStyle:{normal:{color:"#DCEF7A"}}, label: { normal: {fontSize:14 }}},
          {name: '生活服务',itemStyle:{normal:{color:"#60ACFC"}}, label: { normal: {fontSize:14 }}},
          {name: '楼宇园区',itemStyle:{normal:{color:"#4EBECD"}}, label: { normal: {fontSize:14 }}},
          {name: '教育培训',itemStyle:{normal:{color:"#63D5B2"}}, label: { normal: {fontSize:14 }}},
          {name: '丽人',itemStyle:{normal:{color:"#A1E497"}}, label: { normal: {fontSize:14 }}},
          {name: '购物',itemStyle:{normal:{color:"#DCEF7A"}}, label: { normal: {fontSize:14 }}}
        ],
        symbol: 'circle',
        roam: false,

        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{b}',
                fontSize: 10,
                fontStyle: '400',
                color: '#666'
            },
            emphasis:{
              show: true
            }
        },
        lineStyle: {
            normal: {
                width: 1,
                color: '#cccccc',
                curveness: 0,
                type: "solid"
            }
        },
        data: [
        {
            "name": "全部\n场所",
            "symbolSize": 70,
            "category": "全部场所",
            "draggable": "true",
            itemStyle:{
              normal:{
                color: "#60ACFC"
              }
            },
            label: {
              normal:{
                show: true,
                position: 'inside',
                fontSize: 14,
                color: '#ffffff'
              }
            }
        }, {
            "name": "交通",
            "symbolSize": size1,
            "category": 0,
            "draggable": "false",
            label: {
              normal:{
                show: true,
                position: 'inside'
              }
            }
        }, {
            "name": "生活服务",
            "symbolSize": size1,
            "category": 1,
            "draggable": "false",
            label: {
              normal:{
                show: true,
                position: 'inside',
                color: '#ffffff'
              }
            }
        }, {
            "name": "楼宇园区",
            "symbolSize": size1,
            "category": 2,
            "draggable": "false",
            label: {
              normal:{
                show: true,
                position: 'inside'
              }
            }
        }, {
            "name": "教育培训",
            "symbolSize": size1,
            "category": 3,
            "draggable": "true",
            "value": 1,
            label: {
              normal:{
                show: true,
                position: 'top'
              }
            }
        }, {
            "name": "丽人",
            "symbolSize": size1,
            "category": 4,
            "draggable": "true",
            label: {
              normal:{
                show: true,
                position: 'top'
              }
            }
        }, {
            "name": "购物",
            "symbolSize": size1,
            "category": 5,
            "draggable": "true",
            label: {
              normal:{
                show: true,
                position: 'top'
              }
            }
        }, {
            "name": "超市",
            "symbolSize": 10,
            "category": '购物',
            "draggable": "true"
        }, {
            "name": "数码家电",
            "symbolSize": 5,
            "category": '购物',
            "draggable": "true"
        }, {
            "name": "高端写字楼",
            "symbolSize": 20,
            "category": '楼宇园区',
            "draggable": "true"
        }, {
            "name": "大型企业",
            "symbolSize": 10,
            "category": '楼宇园区',
            "draggable": "true"
        }, {
            "name": "高端住宅",
            "symbolSize": 10,
            "category": '楼宇园区',
            "draggable": "false"
        }, {
            "name": "宠物服务",
            "symbolSize": 8,
            "category": '生活服务',
            "draggable": "true"
        }, {
            "name": "房产中介",
            "symbolSize": 12,
            "category": '生活服务',
            "draggable": "true"
        }, {
            "name": "火车站",
            "symbolSize": 10,
            "category": '交通',
            "draggable": "true"
        }, {
            "name": "飞机场",
            "symbolSize": 6,
            "category": '交通',
            "draggable": "true"
        }, {
            "name": "公交站",
            "symbolSize": 12,
            "category": '交通',
            "draggable": "true"
        }, {
            "name": "地铁",
            "symbolSize": 16,
            "category": '交通',
            "draggable": "true"
        }],

        links: [{
            "source": 0,
            "target": '交通',
            value: 150
        }, {
            "source": 0,
            "target": 2,
            value: 150
        }, {
            "source": 0,
            "target": 3,
            value: 150
        }, {
            "source": 0,
            "target": 4,
            value: 150
        }, {
            "source": 0,
            "target": 5
        }, {
            "source": 0,
            "target": 6
        }, {
            "source": 6,
            "target": 7
        }, {
            "source": 6,
            "target": 8
        }, {
            "source": 3,
            "target": 9
        }, {
            "source": 3,
            "target": 10
        }, {
            "source": 3,
            "target": 11
        }, {
            "source": '生活服务',
            "target": '房产中介'
        }, {
            "source": '生活服务',
            "target": '宠物服务'
        }, {
            "source": '交通',
            "target": '飞机场'
        }, {
            "source": '交通',
            "target": '火车站'
        }, {
            "source": '交通',
            "target": '公交站'
        }, {
            "source": '交通',
            "target": '地铁'
        }]
    }]

};



if(document.getElementById('graph_place_option')) {
    var GraphPlace = echarts.init(document.getElementById('graph_place_option'),themename);
    GraphPlace.setOption(option_graph_place);
}
