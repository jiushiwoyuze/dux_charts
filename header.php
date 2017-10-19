<!DOCTYPE html>
<html lang="zh">

<?php 
  $site_name = 'Baidu Ecom Design 图表演示库';
?>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $page_title." - ".$site_name; ?></title>
    <meta name="description" content="百度商业设计规范库 度量衡图表 示例库">
    <meta name="author" content="ThirtyJin">


    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="style.css">


    <!-- 引入 echarts.js -->
    <script type="text/javascript" src="echarts.min.js"></script>
    <script src="china.js"></script>
    <script src="dux-theme.js"></script>


<!-- Piwik -->
<script type="text/javascript">
  var _paq = _paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//youcanyouup.info/piwik/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<!-- End Piwik Code -->


</head>
<body>
<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <!-- <a class="navbar-brand" href="index.php">度量衡图表演示库</a> -->
      <a href="index.php" title="度量衡图表演示库"><div class=" " id="line_logo">ECOM 图表库</div></a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li <?php echo ($page == 'index.php') ? 'class="active"' : '';?> ><a href="index.php">概览</a></li>
        <li <?php echo ($page == 'line.php') ? 'class="active"' : '';?> ><a href="line.php">线性图</a></li>
        <li <?php echo ($page == 'bar.php') ? 'class="active"' : '';?> ><a href="bar.php">条/柱图</a></li>
        <li <?php echo ($page == 'pie.php') ? 'class="active"' : '';?> ><a href="pie.php">饼/环图</a></li>
        <li <?php echo ($page == 'map.php') ? 'class="active"' : '';?> ><a href="map.php">地图</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li id="wise-view"><a data-toggle="tooltip" title="手机预览 <img src='img/qrcode.png' style='height:150px;' />"><span class="glyphicon glyphicon-phone" aria-hidden="true"></span> 手机版</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">使用帮助 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="https://github.com/thirtyjin/dux_charts/blob/master/README.md" target="_blank">视觉设计师教程</a></li>
            <li><a href="https://github.com/thirtyjin/dux_charts/blob/master/README.md" target="_blank">交互设计师教程</a></li>
            <li><a href="https://github.com/thirtyjin/dux_charts/blob/master/README.md" target="_blank">开发工程师教程</a></li>
            <li role="separator" class="divider"></li>
            <li><a data-toggle="modal" data-target="#OptionCode" href="#">主题配置文件预览</a></li>
            <li><a href="dux-theme.js" target="_blank">主题配置文件下载</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="mailto:jinlei01@baidu.com?subject=找你有点事&body=Hi%20 jinlei" target="_blank"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> 给我邮件</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">传送门 <span class="glyphicon glyphicon-th" aria-hidden="true"></span></a>
              <ul class="dropdown-menu">
            <li><a href="http://youcanyouup.info/" target="_blank"><span class="glyphicon glyphicon-home" aria-hidden="true"></span> 团队首页</a></li>
            <li><a href="http://youcanyouup.info/download/dux_v4_ui/" target="_blank"><span class="glyphicon glyphicon-leaf" aria-hidden="true"></span> 视觉规范标注 V4</a></li>
            <li><a href="http://youcanyouup.info/rp/" target="_blank"><span class="glyphicon glyphicon-fire" aria-hidden="true"></span> 交互产出</a></li>
            <li><a href="http://ecloud.baidu.com/index.html#team/t1802/self" target="_blank"><span class="glyphicon glyphicon-cloud" aria-hidden="true"></span> 企业云</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

<!-- 模态框（Modal） -->
<div class="modal fade" id="OptionCode" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;
                </button>
                <h4 class="modal-title" id="myModalLabel">
                    <?php echo '图表通用主题配置文件预览' ?>
                </h4>
            </div>
            <div class="modal-body">
                <?php
                show_source('dux-theme.js');
                ?>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭
                </button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>

<?php

    $charts_line_name = array(
        array("line_base_area",     "线性面积图表",       "lite_line/line_base_area.php",         "https://codepen.io/thirtyjin/pen/BwVzbJ"),
        array("line_base",          "线性基础图表",       "lite_line/line_base.php",              "https://codepen.io/thirtyjin/pen/GMdYEV/"),
        array("line_multi_y",       "多Y轴线性图表",      "lite_line/line_multi_y.php",           "https://codepen.io/thirtyjin/pen/JraqBJ"),
        array("line_broken",        "折线图表",           "lite_line/line_broken.php",           "https://codepen.io/thirtyjin/pen/YrObJL"),
        array("line_gradient_area", "线性极简面积图表",    "lite_line/line_gradient_area.php",     "https://codepen.io/thirtyjin/pen/oGPRJE"),
        array("line_area_datazoom", "线性数据缩放图表",    "lite_line/line_area_datazoom.php",     "#")
    );


    $charts_bar_name = array(
        array("bar_v_base","基础柱形图",       "lite_bar/bar_v_base.php",         "#"),
        array("bar_v_mult","对比柱形图",       "lite_bar/bar_v_mult.php",         "#"),
        array("bar_h_base","基础条形图",       "lite_bar/bar_h_base.php",         "#"),
        array("bar_h_stack","条形叠加图",      "lite_bar/bar_h_stack.php",        "#"),
        array("bar_h_negative","正负条形图",   "lite_bar/bar_h_negative.php",     "#")
    );

    $charts_pie_name = array(
        array("pie_base","基础饼图",            "lite_pie/pie_base.php",         "#"),
        array("pie_ring","基础环形图",           "lite_pie/pie_ring.php",         "#"),
        array("pie_ring_center","环形文字图",   "lite_pie/pie_ring_center.php",   "#"),
        array("pie_rose","玫瑰图",             "lite_pie/pie_rose.php",         "#"),
        array("pie_nest","环形嵌套图",           "lite_pie/pie_nest.php",         "#")
    );

    $charts_map_name = array(
        array("map_china","中国地图"),
        array("map_china","中国地图")
    );

?>

