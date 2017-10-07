<?php
    $page = 'map.php';
    $page_title = '中国地图 度量衡图表演示库';
    $modal_title = '中国地图图表配置文件';
    $option_js = 'charts_map.js';
?>


<?php include 'header.php'; ?>



<div class="container-fluid">
    <div class="page-header">
        <ul class="list-inline">
            <li><h3>中国地图</h3></li>
            <li><h3><a href="#" data-toggle="modal" data-target="#myModal"><small class="pull-right" > 配置代码 <span class="glyphicon glyphicon-cog" ></span></small></a></h3></li>
        </ul>
    </div>
    <div class="row">
        <div class="col-md-8">
            <div id="map_china" class="card_area"></div>
        </div>
    </div>
</div>

<?php include 'chart_option_code.php'; ?>

<?php include 'footer.php'; ?>