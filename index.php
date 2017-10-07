<?php
    $page = 'index.php';
    $page_title = '度量衡 图表演示库';
?>


<?php include 'header.php'; ?>


<div class="container-fluid">

    <div class="jumbotron card_area">
      <h2><?php print $page_title; ?></h2>
      <p>这里是百度商业产品设计规范的<mark><strong>图表部分设计展示</strong></mark>，并可快速查看对应的 Echarts 主题/配置文件。</p>
      <p><small>设计参与者：周文宁，魏博嘉，金磊</small></p>
    </div>

    <div class="page-header">
        <ul class="list-inline">
            <li><h3>线性图表</h3></li>
            <li><h3><a href="line.php"><small class="pull-right"> 查看更多</small></a></h3></li>
        </ul>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div id="line_base_area" class="card_area"></div>
        </div>
        <div class="col-md-6">
            <div id="line_base" class="card_area"></div>
        </div>
        <div class="col-md-6">
            <div id="line_broken" class="card_area">123</div>
        </div>
        <div class="col-md-6">
            <div id="line_gradient_area" class="card_area"></div>
        </div>
    </div>
    <div class="page-header">
        <ul class="list-inline">
            <li><h3>条形/柱状图表</h3></li>
            <li><h3><a href="bar.php"><small class="pull-right"> 查看更多</small></a></h3></li>
        </ul>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div id="bar_v_mult" class="card_area"></div>
        </div>
        <div class="col-md-6">
            <div id="bar_v_base" class="card_area"></div>
        </div>
        <div class="col-md-6">
            <div id="bar_h_base" class="card_area"></div>
        </div>
        <div class="col-md-6">
            <div id="bar_h_stack" class="card_area"></div>
        </div>
    </div>
    <div class="page-header">
        <ul class="list-inline">
            <li><h3>饼/环图表</h3></li>
            <li><h3><a href="pie.php"><small class="pull-right"> 查看更多</small></a></h3></li>
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
        <div class="col-md-4">
            <div id="pie_rose" class="card_area"></div>
        </div>
        <div class="col-md-4">
            <div id="pie_nest" class="card_area"></div>
        </div>
    </div>


    <div class="page-header">
        <ul class="list-inline">
            <li><h3>地图图表</h3></li>
            <li><h3><a href="map.php"><small class="pull-right"> 查看更多</small></a></h3></li>
        </ul>
    </div>
    <div class="row">
        <div class="col-md-8">
            <div id="map_china" class="card_area"></div>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>