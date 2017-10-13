<?php
    $page = 'index.php';
    $page_title = '度量衡 图表演示库';

?>


<?php include 'header.php'; ?>


<div class="container-fluid">

    <div class="jumbotron card_area" id="hero_time">
      <h2><?php print $page_title; ?></h2>
        <blockquote>
        <p>这里是百度商业产品设计规范的<mark><strong>图表部分设计展示</strong></mark>。</p>
        <p><mark>视觉设计师：</mark> 直接拷贝标准图表应用于产品视觉设计。</p>
        <p><mark>交互设计师：</mark> 在原型设计中嵌入真实可交互图表。</p>
        <p><mark>前端工程师：</mark> 可快速查看对应的 Echarts 主题/配置文件。</p>
        <footer>Thirtyjin 更新日期：20171011</footer>
        </blockquote>
    </div>

    <div class="page-header">
        <ul class="list-inline">
            <li><h3>线性图表</h3></li>
            <li><h3><a href="line.php"><small class="pull-right"> 查看更多(5)</small></a></h3></li>
        </ul>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="<?php echo $charts_line_name[0][0] ?>"></div>
                </div>
                <div class="panel-footer">
                    <ul class="list-inline">
                      <li><strong><?php echo $charts_line_name[0][1] ?>: </strong></li>
                      <li><a href="lite_line/<?php echo $charts_line_name[0][0] ?>.php" target="_blank"><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span> 交互引用 </a></li>
                      <li><a href="https://codepen.io/thirtyjin/pen/BwVzbJ" target="_blank"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> 编辑调整</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="<?php echo $charts_line_name[1][0] ?>"></div>
                </div>
                <div class="panel-footer">
                    <ul class="list-inline">
                      <li><strong><?php echo $charts_line_name[1][1] ?>: </strong></li>
                      <li><a href="lite_line/<?php echo $charts_line_name[1][0] ?>.php" target="_blank"><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span> 交互引用 </a></li>
                      <li><a href="https://codepen.io/thirtyjin/pen/GMdYEV/" target="_blank"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> 编辑调整</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="page-header">
        <ul class="list-inline">
            <li><h3>条形/柱状图表</h3></li>
            <li><h3><a href="bar.php"><small class="pull-right"> 查看更多(5)</small></a></h3></li>
        </ul>
    </div>
    <div class="row">
        <div class="col-md-8">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="<?php echo $charts_bar_name[1][0] ?>"></div>
                </div>
                <div class="panel-footer">
                    <ul class="list-inline">
                      <li><strong><?php echo $charts_bar_name[1][1] ?>: </strong></li>
                      <li><a href="lite_bar/<?php echo $charts_bar_name[1][0] ?>.php" target="_blank"><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span> 交互引用 </a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="<?php echo $charts_bar_name[2][0] ?>"></div>
                </div>
                <div class="panel-footer">
                    <ul class="list-inline">
                      <li><strong><?php echo $charts_bar_name[2][1] ?>: </strong></li>
                      <li><a href="lite_bar/<?php echo $charts_bar_name[2][0] ?>.php" target="_blank"><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span> 交互引用 </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="page-header">
        <ul class="list-inline">
            <li><h3>饼/环图表</h3></li>
            <li><h3><a href="pie.php"><small class="pull-right"> 查看更多(5)</small></a></h3></li>
        </ul>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="<?php echo $charts_pie_name[0][0] ?>"></div>
                </div>
                <div class="panel-footer">
                    <ul class="list-inline">
                      <li><strong><?php echo $charts_pie_name[0][1] ?>: </strong></li>
                      <li><a href="lite_pie/<?php echo $charts_pie_name[0][0] ?>.php" target="_blank"><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span> 交互引用 </a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="<?php echo $charts_pie_name[1][0] ?>"></div>
                </div>
                <div class="panel-footer">
                    <ul class="list-inline">
                      <li><strong><?php echo $charts_pie_name[1][1] ?>: </strong></li>
                      <li><a href="lite_pie/<?php echo $charts_pie_name[1][0] ?>.php" target="_blank"><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span> 交互引用 </a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="<?php echo $charts_pie_name[3][0] ?>"></div>
                </div>
                <div class="panel-footer">
                    <ul class="list-inline">
                      <li><strong><?php echo $charts_pie_name[3][1] ?>: </strong></li>
                      <li><a href="lite_pie/<?php echo $charts_pie_name[3][0] ?>.php" target="_blank"><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span> 交互引用 </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


    <div class="page-header">
        <ul class="list-inline">
            <li><h3>地图图表</h3></li>
            <li><h3><a href="map.php"><small class="pull-right"> 查看更多(1)</small></a></h3></li>
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

<?php include 'footer.php'; ?>