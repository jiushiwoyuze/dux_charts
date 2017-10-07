<?php
    $page = 'line.php';
    $page_title = '线性图表 度量衡图表演示库';
    $modal_title = '线性图表配置文件';
    $option_js = 'charts_line.js';
?>


<?php include 'header.php'; ?>


<div class="container-fluid">
    <div class="page-header">
        <ul class="list-inline">
            <li><h3>线性图表</h3></li>
            <li><h3><a href="#" data-toggle="modal" data-target="#myModal"><small class="pull-right"> 配置代码 <span class="glyphicon glyphicon-cog" ></span></small></a></h3></li>
        </ul>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div id="line_base_area" class="card_area"></div>
        </div>
        <div class="col-md-12">
            <div id="line_base" class="card_area"></div>
        </div>
        <div class="col-md-6">
            <div id="line_broken" class="card_area">123</div>
        </div>
        <div class="col-md-6">
            <div id="line_gradient_area" class="card_area"></div>
        </div>
    </div>
</div>

<?php include 'chart_option_code.php'; ?>


<?php include 'footer.php'; ?>