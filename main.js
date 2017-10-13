




$('#wise-view [data-toggle="tooltip"]').tooltip({
    animated: 'fade',
    placement: 'bottom',
    html: true
});




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


