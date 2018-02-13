
// var themename = 'dux';



var hotColor = ["#8F95E7","#FEB64D","#FF9595","#DE7FB9","#C37CCA","#FF9F69","#FEC470","#E9668E","#84A4DE","#9287E7"];
var coolColor = ["#60ACFC","#48BECE","#61D7D3","#32D3EB","#5BC49F","#A1A9EB","#63D5B2","#828CE4","#AEE498","#39B3EA"];


// 场所分布图

var size = 20;
var size1 = 50;
var size2 = 20;
var yy = 200;
var yy1 = 250;
var option_graph_force_one = {
    tooltip: {
        formatter: '{b}'
    },
    color: coolColor,
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
            repulsion: 80,
            //gravity: 0.1,
            edgeLength: [40, 70],
            layoutAnimation: true,
        },
        symbol: 'circle',
        focusNodeAdjacency: true,
        roam: false,
        itemStyle:{
          normal:{
            color: coolColor,
            borderWidth: 0
          }
        },
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
        categories:[
          {name: '交通',itemStyle:{normal:{color:coolColor[1]}}, label: { normal: {fontSize:14, color: '#ffffff' }}},
          {name: '生活服务',itemStyle:{normal:{color:coolColor[2]}}, label: { normal: {fontSize:14, color: '#ffffff' }}},
          {name: '楼宇园区',itemStyle:{normal:{color:coolColor[3]}}, label: { normal: {fontSize:14, color: '#ffffff' }}},
          {name: '教育培训',itemStyle:{normal:{color:coolColor[4]}}, label: { normal: {fontSize:14, color: '#ffffff' }}},
          {name: '丽人',itemStyle:{normal:{color:coolColor[5]}}, label: { normal: {fontSize:14, color: '#ffffff' }}},
          {name: '购物',itemStyle:{normal:{color:coolColor[6]}}, label: { normal: {fontSize:14, color: '#ffffff' }}}
        ],
        data: [
        {
            "name": "全部\n场所",
            "symbolSize": 70,
            "category": "全部场所",
            "draggable": "true",
            itemStyle:{
              normal:{
                color: coolColor[0]
              }
            },
            label: {
              normal:{
                show: true,
                position: 'inside',
                fontSize: 16,
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
            "name": "生活\n服务",
            "symbolSize": size1,
            "category": 1,
            "draggable": "false",
            label: {
              normal:{
                show: true,
                position: 'inside'
              }
            }
        }, {
            "name": "楼宇\n园区",
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
            "name": "教育\n培训",
            "symbolSize": size1,
            "category": 3,
            "draggable": "true",
            "value": 1,
            label: {
              normal:{
                show: true,
                position: 'inside'
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
                position: 'inside'
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
                position: 'inside'
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
            "name": "大卖场",
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
            "name": "保洁保姆",
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
        }, {
            "name": "幼儿园",
            "symbolSize": 16,
            "category": '教育培训',
            "draggable": "true"
        }, {
            "name": "课外培训班",
            "symbolSize": 16,
            "category": '教育培训',
            "draggable": "true"
        }, {
            "name": "新东方",
            "symbolSize": 16,
            "category": '教育培训',
            "draggable": "true"
        }, {
            "name": "美容院",
            "symbolSize": 16,
            "category": '丽人',
            "draggable": "true"
        }, {
            "name": "美发厅",
            "symbolSize": 16,
            "category": '丽人',
            "draggable": "true"
        }, {
            "name": "按摩院",
            "symbolSize": 16,
            "category": '丽人',
            "draggable": "true"
        }],

        links: [{
            "source": 0,
            "target": '交通',
            "value": 100
        }, {
            "source": 0,
            "target": 2,
            "value": 150
        }, {
            "source": 0,
            "target": 3,
            "value": 250
        }, {
            "source": 0,
            "target": 4,
            "value": 950
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
            "source": 2,
            "target": '房产中介'
        }, {
            "source": '高端住宅',
            "target": '楼宇\n园区'
        }, {
            "source": '大卖场',
            "target": '购物'
        }, {
            "source": "生活\n服务",
            "target": '宠物服务'
        }, {
            "source": "生活\n服务",
            "target": '保洁保姆'
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
        }, {
            "source": '幼儿园',
            "target": '教育\n培训'
        }, {
            "source": '课外培训班',
            "target": '教育\n培训'
        }, {
            "source": '新东方',
            "target": '教育\n培训'
        }, {
            "source": '美容院',
            "target": '丽人'
        }, {
            "source": '美发厅',
            "target": '丽人'
        }, {
            "source": '按摩院',
            "target": '丽人'
        }]
    }]

};

if(document.getElementById('graph_force_one')) {
    var GraphForceOne = echarts.init(document.getElementById('graph_force_one'),themename);
    GraphForceOne.setOption(option_graph_force_one);
}




// 兴趣分布图
var datalist = [];
var datalinks = [];
var datacats = [];
var FirstLevelData = ['文艺', '人文\n社科', '经管', '励志', '科技', '生活'];
var SecondLevelData = ["星星上的人", "心无挂碍", "解忧杂货店", "小王子", "次第花开", "老人与海", "影响力", "金字塔原理", "阿米巴经营", "断舍离", "非暴力沟通", "人性的弱点营", "时间重生", "宇宙源起何处", "从宇宙边", "哈勃", "肌肉健美训练图解", "如果可以去流浪", "孤独星球", "最好的时光" ];
var FirstLevelValue = [800, 700, 750, 850, 1000, 1200];
var SecondLevelValue = [280, 220, 300, 200, 240, 260, 300, 200, 250, 300, 200, 350, 300, 200, 180, 320, 320, 350, 250, 280];

// 0级别
datalist.push({
    "name": "兴趣\n分布",
    "symbolSize": 70,
    "category": "兴趣\n分布",
    "draggable": "true",
    "itemStyle": {
      "normal": {
        "color": hotColor[0]
      }
    },
    "label": {
      "normal":{
        "show": true,
        "position": 'inside',
        fontSize: 16,
        "color": '#ffffff'
      }
    },
    "value": []
});

// 1级内容
for (var i = 0; i < FirstLevelData.length; i++) {
    datalist.push({
        "name": FirstLevelData[i],
        "value": FirstLevelValue[i],
        "symbolSize": 50,
        "category": FirstLevelData[i],
        "label": {
          "normal":{
            "show": true,
            "position": 'inside',
            fontSize:14,
            "color": '#ffffff'
          }
        },
        "draggable": false
    });
    datalinks.push({
        "source": "兴趣\n分布",
        "target": FirstLevelData[i]
    });
    datacats.push({
        'name': FirstLevelData[i],
        'itemStyle':{
          'normal':{
            'color': hotColor[i+1]
          }
        }
    });
}

// 2级内容
for (var k = 0; k < SecondLevelData.length; k++) {
    if (k < 3) {
        datalist.push({
            "name": SecondLevelData[k],
            "value": SecondLevelValue[k],
            "symbolSize": 10,
            "category": "文艺",
            "draggable": false
        });
        datalinks.push({
            "source": "文艺",
            "target": SecondLevelData[k]
        })
    } else if (k < 6) {
        datalist.push({
            "name": SecondLevelData[k],
            "value": SecondLevelValue[k],
            "symbolSize": 16,
            "category": "人文\n社科",
            "draggable": false
        });
        datalinks.push({
            "source": "人文\n社科",
            "target": SecondLevelData[k]
        })
    } else if (k < 9) {
        datalist.push({
            "name": SecondLevelData[k],
            "value": SecondLevelValue[k],
            "symbolSize": 14,
            "category": "经管",
            "draggable": false
        });
        datalinks.push({
            "source": "经管",
            "target": SecondLevelData[k]
        })
    } else if (k < 12) {
        datalist.push({
            "name": SecondLevelData[k],
            "value": SecondLevelValue[k],
            "symbolSize": 12,
            "category": "励志",
            "draggable": false
        });
        datalinks.push({
            "source": "励志",
            "target": SecondLevelData[k]
        })
    } else if (k < 16) {
        datalist.push({
            "name": SecondLevelData[k],
            "value": SecondLevelValue[k],
            "symbolSize": 10,
            "category": "科技",
            "draggable": false
        });
        datalinks.push({
            "source": "科技",
            "target": SecondLevelData[k]
        })
    } else if (k < 20) {
        datalist.push({
            "name": SecondLevelData[k],
            "value": SecondLevelValue[k],
            "symbolSize": 8,
            "category": "生活",
            "draggable": false
        });
        datalinks.push({
            "source": "生活",
            "target": SecondLevelData[k]
        })
    }
}

var option_graph_force_two = {
    tooltip: {},
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true
            },
            restore: {
                show: true
            }
        }
    },
    animationDuration: 3000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '兴趣\n分布',
        type: 'graph',
        layout: 'force',

        force: {
          edgeLength: [40, 70],
          repulsion: 80
        },
        data: datalist,
        links: datalinks,
        categories: datacats,
        focusNodeAdjacency: true,
        symbol: 'roundRect',
        roam: false,
        label: {
            normal: {
                show: true,
                position: 'top',
                color:'#666666',
                fontSize: 10
            }
        },
        lineStyle: {
            normal: {
                width: 1,
                color: '#cccccc',
                curveness: 0.1,
                type: "solid"
            }
        }
    }]
};

if(document.getElementById('graph_force_two')) {
    var GraphForceTwo = echarts.init(document.getElementById('graph_force_two'));
    GraphForceTwo.setOption(option_graph_force_two);
}
