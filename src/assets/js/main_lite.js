

// 为每一个独立图表设置一个出事的尺寸，宽高同浏览器窗口；

var chartId = {

    LineBase:           'line_base',
    LineBaseArea:       'line_base_area',
    LineBroken:         'line_broken',
    LineGradientArea:   'line_gradient_area',
    LineMultiY:         'line_multi_y',
    LineAreaDataZoom :  'line_area_datazoom',

    BarVBase :          'bar_v_base',
    BarVMult :          'bar_v_mult',
    BarHBase :          'bar_h_base',
    BarHStack :         'bar_h_stack',
    BarHNegative :      'bar_h_negative',

    PieBase :           'pie_base',
    PieRing :           'pie_ring',
    PieRingCenter :     'pie_ring_center',
    PieRose :           'pie_rose',
    PieNest :           'pie_nest',

    GraphForceOne :     'graph_force_one',
    GraphForceTwo :     'graph_force_two',

    MapChina :          'map_china'
}


var i;

for (i in chartId ) {
    if(document.getElementById(chartId[i])) {
        var myChart = document.getElementById(chartId[i]);
        //自适应宽高
        var myChartContainer = function () {
            //myChart.style.width = window.innerWidth+'px';
            myChart.style.height = window.innerHeight +'px';
        };
        myChartContainer();

        // console.log(i+':'+chartId[i]);
    }
}


// 整体窗口有变化时 调用 resize
// 一个页面只能有一个 window.onsize

window.onresize = function() {

    var i;

    for (i in chartId ) {
        if(document.getElementById(chartId[i])) {
            var myChart = document.getElementById(chartId[i]);
            //自适应宽高
            var myChartContainer = function () {
                //myChart.style.width = window.innerWidth+'px';
                myChart.style.height = window.innerHeight +'px';
            };
            myChartContainer();

            // console.log(i+':'+chartId[i]);
        }
    }




	// Line
    if(document.getElementById('line_base')) {
        LineBase.resize();
    }
    if(document.getElementById('line_base_area')) {
        LineBaseArea.resize();
    }
    if(document.getElementById('line_broken')) {
        LineBroken.resize();
    }
    if(document.getElementById('line_gradient_area')) {
        LineGradientArea.resize();
    }
    if(document.getElementById('line_multi_y')) {
        LineMultiY.resize();
    }
    if(document.getElementById('line_area_datazoom')) {
        LineAreaDataZoom.resize();
    }

    // Bar
    if(document.getElementById('bar_v_base')) {
        BarVBase.resize();
    }
    if(document.getElementById('bar_v_mult')) {
        BarVMult.resize();
    }
    if(document.getElementById('bar_h_base')) {
        BarHBase.resize();
    }
    if(document.getElementById('bar_h_stack')) {
        BarHStack.resize();
    }
    if(document.getElementById('bar_h_negative')) {
        BarHNegative.resize();
    }

    // Pie
    if(document.getElementById('pie_base')) {
        PieBase.resize();
    }
    if(document.getElementById('pie_ring')) {
        PieRing.resize();
    }
    if(document.getElementById('pie_ring_center')) {
        PieRingCenter.resize();
    }
    if(document.getElementById('pie_rose')) {
        PieRose.resize();
    }
    if(document.getElementById('pie_nest')) {
        PieNest.resize();
    }

    // Map
    if(document.getElementById('map_china')) {
        MapChina.resize();
    }

    // Graph
    if(document.getElementById('graph_force_one')) {
        MapChina.resize();
    }
    if(document.getElementById('graph_force_two')) {
        MapChina.resize();
    }
}
