
var themename = 'dux';

// 公用变量
//var colorOrder = ["#60ACFC", "#32D3EB", "#5BC49F", "#FEB64D", "#FF7B7B", "#9287E7", "#00C1E0", "#9CDC82"];
var colorOrder = ["#60ACFC","#4EBECD","#66D7D2","#AFE39B","#D4EC59","#FB8B89","#00C1E0", "#9CDC82"];



// 性别比例

var dataGender = [
    { value: 2600, name: "男性" },
    { value: 2000, name: "女性"}
];

var svggender = 'data:image/svg+xml;utf8,<svg width="48px" height="46px" viewBox="0 0 48 46" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="工具中心-定向助手-人群画像" transform="translate(-795.000000, -438.000000)" fill="#FB8B89"><g id="ic_男女比例" transform="translate(795.000000, 438.000000)"><path d="M47.8902082,22.4863322 C48.5409106,24.7951839 45.6527055,25.7484058 44.9534858,23.5251728 L42.116652,13.741806 L41.2148013,13.741806 L46.1863955,30.9283389 L41.508759,30.9283389 L41.508759,43.8453512 C41.508759,46.1827425 38.1781904,46.1827425 38.1781904,43.8453512 L38.1781904,30.9283389 L37.1022484,30.9283389 L37.1022484,43.8453512 C37.1022484,46.1827425 33.6575215,46.1827425 33.6575215,43.8453512 L33.6575215,30.9283389 L29.1054591,30.9283389 L33.9743108,13.741806 L33.1809106,13.741806 L30.3526386,23.5251728 C29.6362952,25.6998885 26.7338203,24.7951839 27.4102082,22.4777703 L30.5752473,11.8753177 C30.9405538,10.6481159 32.4617133,8.55616499 35.1130399,8.45627648 L40.2045003,8.45627648 C42.7673543,8.55331104 44.2970756,10.6652397 44.7223153,11.8667559 L47.8902082,22.4863322 Z M37.6416464,7.58867336 C35.4612227,7.58867336 33.7003309,5.8877146 33.7003309,3.7929097 C33.7003309,1.70095875 35.4612227,0 37.6416464,0 C39.82207,0 41.5858158,1.70095875 41.5858158,3.7929097 C41.5858158,5.89056856 39.82207,7.58867336 37.6416464,7.58867336 Z M9.37854716,7.59152731 C7.08396522,7.59152731 5.2260388,5.89342252 5.2260388,3.79576366 C5.2260388,1.70095875 7.08396522,0 9.37854716,0 C11.6702751,0 13.5310555,1.70095875 13.5310555,3.79576366 C13.5310555,5.90198439 11.6702751,7.6057971 9.37854716,7.59152731 Z M13.5367634,8.45056856 C16.664701,8.45056856 18.7224045,10.982029 18.7138426,13.3736455 L18.7138426,24.9321739 C18.7138426,27.1753846 15.1578114,27.1753846 15.1578114,24.9321739 L15.1578114,14.2498105 L14.6012896,14.2498105 L14.6012896,43.3116611 C14.6012896,46.1941583 10.0121258,46.4995318 9.81805663,43.3259309 L9.81805663,26.5646377 L8.92762185,26.5646377 L8.92762185,43.3116611 C8.81917146,46.3111706 4.14438885,46.4082051 4.14438885,43.3116611 L4.14438885,14.2498105 L3.47656276,14.2498105 L3.47656276,24.9350279 C3.47656276,27.1782386 0.0289819398,27.1782386 0.0289819398,24.9350279 L0.0289819398,13.3764994 C0.0289819398,10.9763211 2.07812352,8.45056856 5.21176901,8.45056856 L13.5367634,8.45056856 Z" id="Combined-Shape"></path></g></g></g></svg> ';

var gender_option = {
     graphic: {
         elements: [{
             type: 'image',
             style: {
                 image: svggender,
                 width: 48,
                 height: 48
             },
             left: 'center',
             top: 'center'
         }]
     },
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
    color: ["#FB8B89","#60ACFC"],
    series: [
        {
            name: "性别",
            type: "pie",
            label: {
              normal:{
                formatter: "{b}\n\n{d}%"
              },
            },
            labelLine: {
              normal:{
                show: false
              }
            },
            center: ["50%", "50%"],
            radius: ["35%", "50%"],
            data: dataGender
        }
    ]
};

if(document.getElementById('gender_option')) {
    var GenderOption = echarts.init(document.getElementById('gender_option'),themename);
    GenderOption.setOption(gender_option);
}




// 学历分布
var dataEducation = [
    { value: 600, name: "高中以下" },
    { value: 2300, name: "大专"},
    { value: 1400, name: "本科" },
    { value: 2500, name: "硕士"},
    { value: 800, name: "博士"},
    { value: 1000, name: "博士以上"}
];

var education_option = {
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
            name: "学历",
            type: "pie",
            label: {
              normal:{
                formatter: "{b}\n{d}%"
              },
            },
            labelLine: {
              normal:{
                show: true,
                length: 20,
                lineStyle:{
                  color: '#dbdbdb'
                }
              }
            },
            center: ["50%", "50%"],
            radius: ["35%", "50%"],
            data: dataEducation
        }
    ]
};

if(document.getElementById('education_option')) {
    var EducationOption = echarts.init(document.getElementById('education_option'),themename);
    EducationOption.setOption(education_option);
}




// 年龄分布
var dataAge = [
    { value: 600, name: "18岁以下" },
    { value: 2500, name: "18~25岁"},
    { value: 3500, name: "25~35岁" },
    { value: 3000, name: "35~45岁"},
    { value: 1000, name: "45~60岁"},
    { value: 100, name: "60岁以上"}
];

var age_option = {
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
            name: "年龄",
            type: "pie",
            label: {
              normal:{
                formatter: "{b}\n{d}%"
              },
            },
            labelLine: {
              normal:{
                show: true,
                length: 20,
                lineStyle:{
                  color: '#dbdbdb'
                }
              }
            },
            center: ["50%", "50%"],
            radius: ["35%", "50%"],
            data: dataAge
        }
    ]
};

if(document.getElementById('age_option')) {
    var AgeOption = echarts.init(document.getElementById('age_option'),themename);
    AgeOption.setOption(age_option);
}






// 地域分布


if(document.getElementById('region_option')) {
    var RegionOption = echarts.init(document.getElementById('region_option'),themename);


var citydata = [
    { name: "北京", value: 234 },
    { name: "天津", value: 532 },
    { name: "上海", value: 134 },
    { name: "重庆", value: 983 },
    { name: "河北", value: 783 },
    { name: "河南", value: 345 },
    { name: "云南", value: 872 },
    { name: "辽宁", value: 94 },
    { name: "黑龙江", value: 342 },
    { name: "湖南", value: 989 },
    { name: "安徽", value: 767 },
    { name: "山东", value: 675 },
    { name: "新疆", value: 874 },
    { name: "江苏", value: 874 },
    { name: "浙江", value: 878 },
    { name: "江西", value: 928 },
    { name: "湖北", value: 44 },
    { name: "广西", value: 448 },
    { name: "甘肃", value: 887 },
    { name: "山西", value: 903 },
    { name: "内蒙古", value: 673 },
    { name: "陕西", value: 563 },
    { name: "吉林", value: 747 },
    { name: "福建", value: 112 },
    { name: "贵州", value: 473 },
    { name: "广东", value: 647 },
    { name: "青海", value: 838 },
    { name: "西藏", value: 626 },
    { name: "四川", value: 515 },
    { name: "宁夏", value: 172 },
    { name: "海南", value: 77 },
    { name: "台湾", value: 837 },
    { name: "香港", value: 677 },
    { name: "澳门", value: 43 }
];

var yMax = 1000;
var dataShadow = [];

var resultdata0 = [];
var titledata = [];
var bartop10 = [];

for (var i = 0; i < citydata.length; i++) {
    var d0 = {
        name: citydata[i].name,
        value: citydata[i].value
    };
    resultdata0.push(d0);
}

for (var i = 0; i < 10; i++) {

      var top10 = {
          name: citydata[i].name,
          value: citydata[i].value
      };
      bartop10.push(top10);

    dataShadow.push(yMax);
    titledata.push(citydata[i].name);
}

function NumDescSort(a,b){
    return a.value-b.value;
}

resultdata0.sort(NumDescSort);
bartop10.sort(NumDescSort);


var region_option = {
    title: [
      {
        show: false
      },
      {
        show: true,
        text: 'TOP 10 城市排行榜',
        textStyle:{
          align: 'left'
        },
        //width: 200,
        top: 0,
        right: 240,
        textStyle: {
            color: '#999999',
            fontSize: 14
        }
    }
  ],
    tooltip:{
          trigger: "item"
      },
    legend: {
        show: false
    },
    grid: {
      // 仅仅控制条形图的位置
        show: true,
        containLabel: false,
        right: 40,
        top: 20,
        width: '30%'
    },
    visualMap: {
        type: 'continuous',
        min: 0,
        max: 1000,
        text:['多','少'],
        realtime: false,
        left: 30,
        calculable : true,
        inRange: {
            color: ['#60ACFC', 'rgba(159,205,253,0.70)'],
            symbolSize: [100, 100]
        },
        outOfRange: {
            color: ['#EEEEEE'],
            symbolSize: [100, 100]
        }
        //color: ['#60ACFC','rgba(159,205,253,0.70)']
    },
    toolbox: {
        show: false
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
            data: titledata
        }
    ],
    series: [
        {
            name: "人数",
            type: "map",
            mapType: "china",
            left: '130',
            width: '40%',
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
            data: resultdata0
        },
        {
            name: "背景",
            type: "bar",
            itemStyle: {
                normal: {
                  color: "#eeeeee",
                  opacity: 0.2
                }
            },
            barWidth: 14,
            barGap:'-100%',
            data: dataShadow,
            animation: false
        },
        {
            name: "人数",
            type: "bar",
            barWidth: 14,
            label: {
                normal: {
                    show: true,
                    fontSize: 8,
                    position: 'insideLeft'
                },
                emphasis: {
                    show: true
                }
            },
            data: bartop10
        }

    ]
};

    // 使用刚指定的配置项和数据显示图表。
    RegionOption.setOption(region_option);
}




// var themename = 'dux';

// 场所分布图

var size = 20;
var size1 = 50;
var size2 = 20;
var yy = 200;
var yy1 = 250;
var place_option = {
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
            repulsion: 80,
            gravity: 0.1,
            edgeLength: 80,
            layoutAnimation: true,
        },
        symbol: 'circle',
        focusNodeAdjacency: true,
        roam: false,
        itemStyle:{
          normal:{
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
          {
          name: '交通',itemStyle:{normal:{color:"#DCEF7A"}}, label: { normal: {fontSize:14 }}},
          {name: '生活服务',itemStyle:{normal:{color:"#60ACFC"}}, label: { normal: {fontSize:14 }}},
          {name: '楼宇园区',itemStyle:{normal:{color:"#4EBECD"}}, label: { normal: {fontSize:14 }}},
          {name: '教育培训',itemStyle:{normal:{color:"#63D5B2"}}, label: { normal: {fontSize:14 }}},
          {name: '丽人',itemStyle:{normal:{color:"#A1E497"}}, label: { normal: {fontSize:14 }}},
          {name: '购物',itemStyle:{normal:{color:"#DCEF7A"}}, label: { normal: {fontSize:14 }}}
        ],
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
                position: 'inside',
                color: '#333333'
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
                position: 'inside',
                color: '#ffffff'
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
                position: 'inside',
                color: '#ffffff'
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
                position: 'inside',
                color: '#ffffff'
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
                position: 'inside',
                color: '#ffffff'
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
                position: 'inside',
                color: '#333333'
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
            "source": 2,
            "target": '房产中介'
        }, {
            "source": 2,
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

if(document.getElementById('place_option')) {
    var PlaceOption = echarts.init(document.getElementById('place_option'),themename);
    PlaceOption.setOption(place_option);
}




// 兴趣分布图
var color = ["#60ACFC", "#32D3EB", "#5BC49F", "#FEB64D", "#FF7B7B", "#9287E7", "#00C1E0", "#9CDC82"];
var datalist = [];
var datalinks = [];
var datacats = [];
var FirstLevelData = ['文艺', '人文\n社科', '经管', '励志', '科技', '生活'];
var SecondLevelData = ["星星上的人", "心无挂碍", "解忧杂货店", "小王子", "次第花开", "老人与海", "影响力", "金字塔原理", "阿米巴经营", "断舍离", "非暴力沟通", "人性的弱点营", "时间重生", "宇宙源起何处", "从宇宙边", "哈勃", "肌肉健美训练图解", "如果可以去流浪", "孤独星球", "最好的时光" ];
var FirstLevelValue = [800, 700, 750, 850, 1000, 1200];
var SecondLevelValue = [280, 220, 300, 200, 240, 260, 300, 200, 250, 300, 200, 350, 300, 200, 180, 320, 320, 350, 250, 280];

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
            'color': color[i]
          }
        }
    });
}

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
            "symbolSize": 10,
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
            "symbolSize": 10,
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
            "symbolSize": 10,
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
            "symbolSize": 10,
            "category": "生活",
            "draggable": false
        });
        datalinks.push({
            "source": "生活",
            "target": SecondLevelData[k]
        })
    }
}

datalist.push({
    "name": "兴趣\n分布",
    "symbolSize": 70,
    "category": "兴趣\n分布",
    "draggable": "true",
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

var interests_option = {
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
          edgeLength: 70,
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

if(document.getElementById('interests_option')) {
    var InterestsOption = echarts.init(document.getElementById('interests_option'));
    InterestsOption.setOption(interests_option);
}









// 人生阶段
if(document.getElementById('stage_option')) {

    var StageOption    = echarts.init(document.getElementById('stage_option'),themename);

    var stage_value = [800, 700, 750, 850, 1000, 1200];
    var stage_cats = ["上学","工作","有孩子","有老人","退休","备孕"];

    var stage_option = {
        tooltip: {
            // 参见 dux-theme.js
        },
        legend: {
            show: false
        },
        color: colorOrder,
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
                data: stage_cats
            }
        ],
        yAxis: [
            {
                show: true,
                type: "value",
                splitLine:{
                  show: true
                },
                axisLabel: {
                    show: false,
                    inside: true,
                    margin: 0
                }
            }
        ],
        series: [
            {
                name: "人生阶段",
                type: "bar",
                barWidth: 20,
                barMaxWidth: 30,
                label: {
                    normal:{
                        show: true,
                        position: 'top',
                        color: '#333333',
                        fontSize: '14',
                        distance: 10
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
                data: stage_value
            }
        ]
    }
    StageOption.setOption(stage_option);
}






// 财产状况
if(document.getElementById('wealth_option')) {

    var WealthOption    = echarts.init(document.getElementById('wealth_option'),themename);

    var wealth_value = [200, 700, 1050, 850, 10];
    var wealth_cats = ["10W以下","10~30W","30~100W","100~500W","大于500W"];

    var wealth_option = {
        tooltip: {
            // 参见 dux-theme.js
        },
        legend: {
            show: false
        },
        color: colorOrder,
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
                axisLine:{
                  show: true
                },
                data: wealth_cats
            }
        ],
        yAxis: [
            {
              show: true,
                type: "value",
                axisLabel: {
                    show: false,
                    inside: true,
                    margin: 0
                }
            }
        ],
        series: [
            {
                name: "人生阶段",
                type: "bar",
                barWidth: 20,
                barMaxWidth: 30,
                label: {
                    normal:{
                        show: true,
                        position: 'top',
                        color: '#333333',
                        fontSize: '14',
                        distance: 10
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
                data: wealth_value
            }
        ]
    }
    WealthOption.setOption(wealth_option);
}





// APP 偏好
if(document.getElementById('app_option')) {

    var AppOption    = echarts.init(document.getElementById('app_option'),themename);

    var app_value = [320, 570, 945, 730, 150, 223];
    var app_cats = ["游戏","社交","资讯","视频","阅读","工具"];

    var app_option = {
        tooltip: {
            // 参见 dux-theme.js
        },
        legend: {
            show: false
        },
        color: colorOrder,
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
                data: app_cats
            }
        ],
        yAxis: [
            {
              show: true,
                type: "value",
                axisLabel: {
                    show: false,
                    inside: true,
                    margin: 0
                }
            }
        ],
        series: [
            {
                name: "APP 偏好",
                type: "bar",
                barWidth: 20,
                barMaxWidth: 30,
                label: {
                    normal:{
                        show: true,
                        position: 'top',
                        color: '#333333',
                        fontSize: '14',
                        distance: 10
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
                data: app_value
            }
        ]
    }
    AppOption.setOption(app_option);
}
