<?php
    $page = 'map.php';
    $page_title = '中国地图';
    $modal_title = '中国地图图表配置文件';
    $option_js = 'assets/js/charts_map.js';

    
?>


<?php include 'header.php'; ?>



<div class="container">
    <div class="mt-4">
        <ul class="list-inline">
            <li class="list-inline-item"><h4 class="card-title"><?php echo $page_title; ?></h4></li>
            <li class="list-inline-item"><h5 class="card-title"><a href="#" data-toggle="modal" data-target="#myModal"><small class="pull-right" > 配置代码 </small></a></h5></li>
        </ul>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="card card-default">
                <div class="card-body">
                    <div id="<?php echo $charts_map_name[0][0] ?>"></div>
                </div>
                <div class="card-footer">
                      <strong>图表名称：</strong>
                      <a class="card-link" href="lite_map/<?php echo $charts_map_name[0][0] ?>.php" target="_blank"> 交互引用 </a>
                      
                </div>
            </div>
        </div>
    </div>
</div>

<?php include 'chart_option_code.php'; ?>

<?php include 'footer.php'; ?>