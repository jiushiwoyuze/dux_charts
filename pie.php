<?php
    $page = 'pie.php';
    $page_title = '环形/饼形图表 度量衡图表演示库';
    $modal_title = '环形/饼形图表配置文件';
    $option_js = 'charts_pie.js';
?>

<?php include 'header.php'; ?>

<div class="container-fluid">
    <div class="page-header">
        <ul class="list-inline">
            <li><h3>环形/饼形图表</h3></li>
            <li><h3><a href="#" data-toggle="modal" data-target="#myModal"><small class="pull-right" > 配置代码 <span class="glyphicon glyphicon-cog" ></span></small></a></h3></li>
        </ul>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div id="pie_base" class="card_area"></div>
        </div>
        <div class="col-md-4">
            <div id="pie_ring" class="card_area"></div>
        </div>
        <div class="col-md-4">
            <div id="pie_ring_center" class="card_area"></div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div id="pie_rose" class="card_area"></div>
        </div>
        <div class="col-md-6">
            <div id="pie_nest" class="card_area"></div>
        </div>
    </div>
</div>

<?php include 'chart_option_code.php'; ?>

<?php include 'footer.php'; ?>