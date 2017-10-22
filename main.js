

$('#wise-view [data-toggle="tooltip"]').tooltip({
    animated: 'fade',
    placement: 'bottom',
    html: true
});



// 地图页面展示模块的底部链接由 JS 实现；
// 而不是php 变量实现；


function mycharts (zhName,IdName,URL,Path) {
    this.zhName = zhName;
    this.IdName = IdName;
    this.URL = URL;
    this.title = '<strong>'+ zhName +': </strong>';
    this.quote = Path+'/'+ IdName + '.php';
}

chinamap = new mycharts ('北京地图','map_china','https://codepen.io/','lite_map');


if(document.getElementById('map_one')) {
    var list = document.getElementById("map_one");
    list.getElementsByTagName("li")[0].innerHTML = chinamap.title;
    list.getElementsByTagName("li")[1].getElementsByTagName("a")[0].href  = chinamap.quote;
    list.getElementsByTagName("li")[2].getElementsByTagName("a")[0].href = chinamap.URL;
}








// 整体窗口有变化时 调用 resize 
// 一个页面只能有一个 window.onsize

window.onresize = function() {


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
}


