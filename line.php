<?php
    $page = 'line.php';
    $page_title = '线性图表 度量衡图表演示库';
    $modal_title = '线性图表配置文件';
    $option_js = 'charts_line.js';

    $charts_line_name = array("line_base_area","line_base","line_broken","line_gradient_area");


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
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="<?php echo $charts_line_name[0] ?>"></div>
                </div>
                <div class="panel-footer">
                    <ul class="list-inline">
                      <li><a href="lite_line/<?php echo $charts_line_name[0] ?>.php" target="_blank"><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span> 交互引用 </a></li>
                      <li><a href="https://codepen.io/thirtyjin/pen/BwVzbJ" target="_blank"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> 编辑调整</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="<?php echo $charts_line_name[1] ?>"></div>
                </div>
                <div class="panel-footer">
                    <ul class="list-inline">
                      <li><a href="lite_line/<?php echo $charts_line_name[1] ?>.php" target="_blank"><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span> 交互引用 </a></li>
                      <li><a href="https://codepen.io/thirtyjin/pen/GMdYEV/" target="_blank"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> 编辑调整</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="<?php echo $charts_line_name[2] ?>"></div>
                </div>
                <div class="panel-footer">
                    <a href="lite_line/<?php echo $charts_line_name[2] ?>.php" target="_blank"><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span> 交互引用 </a>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="<?php echo $charts_line_name[3] ?>"></div>
                </div>
                <div class="panel-footer">
                    <a href="lite_line/<?php echo $charts_line_name[3] ?>.php" target="_blank"><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span> 交互引用 </a>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include 'chart_option_code.php'; ?>


<?php include 'footer.php'; ?>