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
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="<?php echo $charts_bar_name[0][0] ?>"></div>
                </div>
                <div class="panel-footer">
                    <ul class="list-inline">
                      <li><strong><?php echo $charts_bar_name[0][1] ?></strong></li>
                      <li><a href="lite_bar/<?php echo $charts_bar_name[0][0] ?>.php" target="_blank"><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span> 交互引用 </a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="<?php echo $charts_bar_name[1][0] ?>"></div>
                </div>
                <div class="panel-footer">
                    <ul class="list-inline">
                      <li><strong><?php echo $charts_bar_name[1][1] ?></strong></li>
                      <li><a href="lite_bar/<?php echo $charts_bar_name[1][0] ?>.php" target="_blank"><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span> 交互引用 </a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="<?php echo $charts_bar_name[2][0] ?>"></div>
                </div>
                <div class="panel-footer">
                    <ul class="list-inline">
                      <li><strong><?php echo $charts_bar_name[2][1] ?></strong></li>
                      <li><a href="lite_bar/<?php echo $charts_bar_name[2][0] ?>.php" target="_blank"><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span> 交互引用 </a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="<?php echo $charts_bar_name[3][0] ?>"></div>
                </div>
                <div class="panel-footer">
                    <ul class="list-inline">
                      <li><strong><?php echo $charts_bar_name[3][1] ?></strong></li>
                      <li><a href="lite_bar/<?php echo $charts_bar_name[3][0] ?>.php" target="_blank"><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span> 交互引用 </a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="<?php echo $charts_bar_name[4][0] ?>"></div>
                </div>
                <div class="panel-footer">
                    <ul class="list-inline">
                      <li><strong><?php echo $charts_bar_name[4][1] ?></strong></li>
                      <li><a href="lite_bar/<?php echo $charts_bar_name[4][0] ?>.php" target="_blank"><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span> 交互引用 </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include 'chart_option_code.php'; ?>

<?php include 'footer.php'; ?>