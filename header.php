<!DOCTYPE html>
<html lang="zh">

<?php 
  $site_name = 'Baidu ONE DESIGN 数据图表';
?>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $page_title." - ".$site_name; ?></title>
    <meta name="description" content="百度商业设计规范库 ONE DESIGN 数据图表库">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <meta name="author" content="ThirtyJin">

    <!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
    <link href="https://cdn.bootcss.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" rel="stylesheet">

    <link rel="stylesheet" type="text/css" href="assets/css/style.css">


    <!-- 引入 echarts.js -->
    <script type="text/javascript" src="assets/js/echarts.min.js"></script>
    <script type="text/javascript" src="assets/js/china.js"></script>
    <script type="text/javascript" src="assets/js/dux-theme.js"></script>


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
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <!-- Navbar content -->
  <a class="navbar-brand" href="./">ONE 图表库<sup>Beta</sup></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav mr-auto">

        <li class="nav-item" <?php echo ($page == 'index.php') ? 'class="active"' : '';?> ><a class="nav-link" href="index.php">首页</a></li>
        <li class="nav-item" <?php echo ($page == 'line.php') ? 'class="active"' : '';?> ><a class="nav-link" href="line.php">线性图</a></li>
        <li class="nav-item" <?php echo ($page == 'bar.php') ? 'class="active"' : '';?> ><a class="nav-link" href="bar.php">条/柱图</a></li>
        <li class="nav-item" <?php echo ($page == 'pie.php') ? 'class="active"' : '';?> ><a class="nav-link" href="pie.php">饼/环图</a></li>
        <li class="nav-item" <?php echo ($page == 'map.php') ? 'class="active"' : '';?> ><a class="nav-link" href="map.php">地图</a></li>

    </ul>

    <ul class="navbar-nav">
        <li class="nav-item" id="wise-view"><a class="nav-link" data-toggle="tooltip" title="手机预览 <img src='assets/img/qrcode.png' style='height:150px;' />">手机版</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">使用帮助</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="https://github.com/thirtyjin/dux_charts/blob/master/README.md" target="_blank">视觉设计师教程</a></li>
            <li><a class="dropdown-item" href="https://github.com/thirtyjin/dux_charts/blob/master/README.md" target="_blank">交互设计师教程</a></li>
            <li><a class="dropdown-item" href="https://github.com/thirtyjin/dux_charts/blob/master/README.md" target="_blank">开发工程师教程</a></li>
            <div class="dropdown-divider"></div>
            <li><a class="dropdown-item" data-toggle="modal" data-target="#OptionCode" href="#">主题配置文件预览</a></li>
            <li><a class="dropdown-item" href="assets/js/dux-theme.js" target="_blank">主题配置文件下载</a></li>
            <div class="dropdown-divider"></div>
            <li><a class="dropdown-item" href="mailto:jinlei01@baidu.com?subject=找你有点事&body=Hi%20 jinlei" target="_blank"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> 给我邮件</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              传送门
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <h6 class="dropdown-header">百度内网</h6>
              <a class="dropdown-item" href="http://youcanyouup.info/" target="_blank">首页 <mark>团队百科</mark></a>
              <a class="dropdown-item" href="http://ecloud.baidu.com/index.html#team/t1802/self" target="_blank">视觉产出 <mark>企业云</mark></a>
              <a class="dropdown-item" href="http://youcanyouup.info/rp/" target="_blank">交互产出  <mark>RP 目录</mark></a>
              <a class="dropdown-item" href="http://youcanyouup.info/download/dux_v4_ui/" target="_blank">ONE 视觉标注</a>
              <a class="dropdown-item" href="http://youcanyouup.info/dux_icons/" target="_blank">ONE 图标库</a>
              <a class="dropdown-item" href="http://youcanyouup.info/dux_charts/" target="_blank">ONE 数据图表库</a>
              <a class="dropdown-item" href="http://youcanyouup.info/dux_axure_libs/" target="_blank">ONE 交互设计库</a>
              <a class="dropdown-item" href="http://youcanyouup.info/dux/" target="_blank">ONE 设计规范</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="mailto:jinlei01@baidu.com?subject=找你有点事&body=Hi%20 jinlei" target="_blank">提点意见</a>

            </div>
        </li>
    </ul>
  </div>
</nav>


<!-- 模态框（Modal） -->
<div class="modal fade" id="OptionCode" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">
                    <?php echo '图表通用主题配置文件预览' ?>
                </h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;
                </button>
            </div>
            <div class="modal-body">
                <?php
                show_source('assets/js/dux-theme.js');
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

