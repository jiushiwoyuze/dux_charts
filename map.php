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
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="<?php echo $charts_map_name[0][0] ?>"></div>
                </div>
                <div class="panel-footer">
                    <ul class="list-inline">
                      <li><strong><?php echo $charts_map_name[0][1] ?>: </strong></li>
                      <li><a href="lite_map/<?php echo $charts_map_name[0][0] ?>.php" target="_blank"><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span> 交互引用 </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include 'chart_option_code.php'; ?>

<?php include 'footer.php'; ?>