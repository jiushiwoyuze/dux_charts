<?php
    $page = 'bar.php';
    $page_title = '条形/柱状图表 度量衡图表演示库';
    $modal_title = '条形/柱状图表配置文件';
    $option_js = 'charts_bar.js';
?>

<?php include 'header.php'; ?>


<div class="container-fluid">
    <div class="page-header">
        
        <ul class="list-inline">
            <li><h3>条形/柱状图表</h3></li>
            <li><h3><a href="#" data-toggle="modal" data-target="#myModal"><small class="pull-right"> 配置代码 <span class="glyphicon glyphicon-cog" ></span></small></a></h3></li>
        </ul>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div id="bar_v_base" class="card_area"></div>
        </div>
        <div class="col-md-12">
            <div id="bar_v_mult" class="card_area"></div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-5">
            <div id="bar_h_base" class="card_area"></div>
        </div>
        <div class="col-md-7">
            <div id="bar_h_stack" class="card_area"></div>
        </div>
    </div>
</div>

<?php include 'chart_option_code.php'; ?>

<?php include 'footer.php'; ?>