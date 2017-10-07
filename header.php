<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php print $page_title; ?></title>
    <meta name="description" content="百度商业设计规范库 度量衡图表 示例库">
    <meta name="author" content="ThirtyJin">


    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="style.css">


    <!-- 引入 echarts.js -->
    <script type="text/javascript" src="echarts.min.js"></script>
    <script src="china.js"></script>
    <script src="dux-theme.js"></script>

</head>
<body>
<nav class="navbar navbar-inverse navbar-static-top">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="index.php">度量衡图表演示库</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li <?php echo ($page == 'index.php') ? 'class="active"' : '';?> ><a href="index.php">首页</a></li>
        <li <?php echo ($page == 'line.php') ? 'class="active"' : '';?> ><a href="line.php">线性图</a></li>
        <li <?php echo ($page == 'bar.php') ? 'class="active"' : '';?> ><a href="bar.php">条/柱图</a></li>
        <li <?php echo ($page == 'pie.php') ? 'class="active"' : '';?> ><a href="pie.php">饼/环图</a></li>
        <li <?php echo ($page == 'map.php') ? 'class="active"' : '';?> ><a href="map.php">地图</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">图表通用主题 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a data-toggle="modal" data-target="#OptionCode" href="#">配置文件预览</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="dux-theme.js" target="_blank">配置文件下载</a></li>
          </ul>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="http://youcanyouup.info/" target="_blank">团队百科</a></li>
        <li><a href="http://youcanyouup.info/download/dux_v4_ui/" target="_blank">度量衡规范库 V4</a></li>
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



