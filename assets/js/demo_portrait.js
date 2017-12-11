
var themename = 'dux';

// 公用变量
//var colorOrder = ["#60ACFC", "#32D3EB", "#5BC49F", "#FEB64D", "#FF7B7B", "#9287E7", "#00C1E0", "#9CDC82"];
var colorOrder = ["#60ACFC","#4EBECD","#66D7D2","#AFE39B","#D4EC59","#FB8B89","#00C1E0", "#9CDC82"];

var hotColor = ["#8F95E7","#FEB64D","#FF9595","#DE7FB9","#C37CCA","#FF9F69","#FEC470","#E9668E","#84A4DE","#9287E7"];
var coolColor = ["#60ACFC","#48BECE","#61D7D3","#32D3EB","#5BC49F","#A1A9EB","#63D5B2","#828CE4","#AEE498","#39B3EA"];



// 性别比例

var dataGender = [
    { value: 2600, name: "女性" },
    { value: 1600, name: "男性"}
];


var svggender = 'data:image/svg+xml;utf8,<svg width="50px" height="50px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs> <path d="M84,0 C113.990165,0 141.701837,15.9994184 156.701917,41.9722406 C171.701996,67.9450628 171.701996,99.9438995 156.701917,125.916722 C150.81581,136.099987 142.851077,144.944137 133.337369,151.859564 L115.719022,127.605605 C131.318705,116.2731 139.683173,97.4855254 137.664508,78.3082089 C135.645843,59.1308923 123.55384,42.4918969 105.945486,34.6470853 C99.0400529,31.569121 91.5649967,29.9801718 84,29.9801718 L84,0 Z" id="path-1"></path> <path d="M133.337369,151.859564 C109.073417,169.487905 77.2544613,172.835691 49.8525843,160.633761 C22.4507072,148.431831 3.65313946,122.548949 0.515214805,92.7186781 C-2.62270985,62.8884071 10.3986781,33.6577396 34.6626305,16.0293985 C49.0031461,5.60629213 66.271725,0 84,0 L84,29.9801718 C64.7227495,29.9801718 46.904534,40.2633708 37.2609121,56.9623265 C27.6172902,73.6612822 27.6172902,94.2276801 37.2609121,110.926636 C46.904534,127.625592 64.7227495,137.90879 84,137.90879 C95.3924653,137.90879 106.495122,134.301176 115.719022,127.605605 L133.337369,151.859564 Z" id="path-2"></path> </defs> <g id="工具中心-定向助手-人群画像" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-794.000000, -436.000000)"> <rect id="Rectangle-6" fill="#F2F4F8" x="0" y="105" width="1440" height="2074"></rect> <rect id="Rectangle-6-Copy-6" fill="#FFFFFF" x="221" y="282" width="1200" height="320"></rect> <g id="Variable-segments-circle" transform="translate(734.000000, 376.000000)"> <path d="M84,0 C113.990165,0 141.701837,15.9994184 156.701917,41.9722406 C171.701996,67.9450628 171.701996,99.9438995 156.701917,125.916722 C141.701837,151.889544 113.990165,167.888962 84,167.888962 C54.0098348,167.888962 26.2981626,151.889544 11.2980833,125.916722 C-3.70199603,99.9438995 -3.70199603,67.9450628 11.2980833,41.9722406 C26.2981626,15.9994184 54.0098348,0 84,0 L84,29.9801718 C64.7227495,29.9801718 46.904534,40.2633708 37.2609121,56.9623265 C27.6172902,73.6612822 27.6172902,94.2276801 37.2609121,110.926636 C46.904534,127.625592 64.7227495,137.90879 84,137.90879 C103.27725,137.90879 121.095466,127.625592 130.739088,110.926636 C140.38271,94.2276801 140.38271,73.6612822 130.739088,56.9623265 C121.095466,40.2633708 103.27725,29.9801718 84,29.9801718 L84,0 Z" id="Base-plate" fill-opacity="0.002" fill="#455A64"></path> <g id="Segment-40"> <use fill="#FB8B89" fill-rule="evenodd" xlink:href="#path-1"></use> <path stroke="#FFFFFF" stroke-width="1" d="M84.5,0.501491524 L84.5,29.4824641 C91.9654593,29.5509313 99.3327632,31.1521706 106.148964,34.1903614 C123.922596,42.1088072 136.124652,58.9033329 138.16176,78.2558665 C140.181609,97.4444252 131.901517,116.247242 116.416062,127.71442 L133.447073,151.159833 C142.725451,144.330133 150.501075,135.645359 156.268938,125.666663 C171.179656,99.8485714 171.179656,68.0403909 156.268938,42.2222989 C141.441288,16.5480408 114.11872,0.67821394 84.5,0.501491524 Z"></path> </g> <g id="Segment-60"> <use fill="#60ACFC" fill-rule="evenodd" xlink:href="#path-2"></use> <path stroke="#FFFFFF" stroke-width="1" d="M132.638123,151.747712 L115.606903,128.30201 C106.377641,134.873278 95.3301117,138.40879 84,138.40879 C64.5421754,138.40879 46.5598921,128.028615 36.8279272,111.176684 C27.0949518,94.3230032 27.0949518,73.5659591 36.8279272,56.7122784 C46.4764777,40.0047883 64.2345228,29.658588 83.5,29.4824571 L83.5,0.501493915 C66.0481679,0.605889468 49.0730399,6.1736095 34.9565182,16.4339106 C10.8339463,33.9595354 -2.10635642,63.0176431 1.01247118,92.6663704 C4.13203331,122.32208 22.8200782,148.048978 50.055978,160.176999 C77.1399595,172.237372 108.568325,169.016643 132.638123,151.747712 Z"></path> </g> </g> <circle id="Oval-2" fill="#FFFFFF" cx="818" cy="460" r="63"></circle> <g id="ic_男女比例" transform="translate(794.000000, 436.000000)"> <path d="M48.8902082,24.4863322 C49.5409106,26.7951839 46.6527055,27.7484058 45.9534858,25.5251728 L43.116652,15.741806 L42.2148013,15.741806 L47.1863955,32.9283389 L42.508759,32.9283389 L42.508759,45.8453512 C42.508759,48.1827425 39.1781904,48.1827425 39.1781904,45.8453512 L39.1781904,32.9283389 L38.1022484,32.9283389 L38.1022484,45.8453512 C38.1022484,48.1827425 34.6575215,48.1827425 34.6575215,45.8453512 L34.6575215,32.9283389 L30.1054591,32.9283389 L34.9743108,15.741806 L34.1809106,15.741806 L31.3526386,25.5251728 C30.6362952,27.6998885 27.7338203,26.7951839 28.4102082,24.4777703 L31.5752473,13.8753177 C31.9405538,12.6481159 33.4617133,10.556165 36.1130399,10.4562765 L41.2045003,10.4562765 C43.7673543,10.553311 45.2970756,12.6652397 45.7223153,13.8667559 L48.8902082,24.4863322 Z M38.6988832,10 C36.4867949,10 34.7003309,8.20684468 34.7003309,5.99849568 C34.7003309,3.79315532 36.4867949,2 38.6988832,2 C40.9109715,2 42.7003309,3.79315532 42.7003309,5.99849568 C42.7003309,8.20985333 40.9109715,10 38.6988832,10 Z" id="Combined-Shape" fill="#FB8B89"></path> <path d="M10.2260388,9.99990623 C8.01572952,9.99990623 6.2260388,8.21045352 6.2260388,5.99995311 C6.2260388,3.79246019 8.01572952,2 10.2260388,2 C12.4335989,2 14.2260388,3.79246019 14.2260388,5.99995311 C14.2260388,8.21947597 12.4335989,10.0149436 10.2260388,9.99990623 Z M14.5367634,10.4505686 C17.664701,10.4505686 19.7224045,12.982029 19.7138426,15.3736455 L19.7138426,26.9321739 C19.7138426,29.1753846 16.1578114,29.1753846 16.1578114,26.9321739 L16.1578114,16.2498105 L15.6012896,16.2498105 L15.6012896,45.3116611 C15.6012896,48.1941583 11.0121258,48.4995318 10.8180566,45.3259309 L10.8180566,28.5646377 L9.92762185,28.5646377 L9.92762185,45.3116611 C9.81917146,48.3111706 5.14438885,48.4082051 5.14438885,45.3116611 L5.14438885,16.2498105 L4.47656276,16.2498105 L4.47656276,26.9350279 C4.47656276,29.1782386 1.02898194,29.1782386 1.02898194,26.9350279 L1.02898194,15.3764994 C1.02898194,12.9763211 3.07812352,10.4505686 6.21176901,10.4505686 L14.5367634,10.4505686 Z" id="Combined-Shape" fill="#60ACFC"></path> </g> </g> </svg>';


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
    color: hotColor ,
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
    color: coolColor ,
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
                    fontSize: 10,
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

if(document.getElementById('place_option')) {
    var PlaceOption = echarts.init(document.getElementById('place_option'),themename);
    PlaceOption.setOption(place_option);
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
