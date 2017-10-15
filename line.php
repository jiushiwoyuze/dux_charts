<?php
    $page = 'line.php';
    $page_title = '线性图表';
    $modal_title = '线性图表配置文件';
    $option_js = 'charts_line.js';

?>


<?php include 'header.php'; ?>


<div class="container-fluid">
    <div class="page-header">
        <ul class="list-inline">
            <li><h3><?php echo $page_title; ?></h3></li>
            <li><h3><a href="#" data-toggle="modal" data-target="#myModal"><small class="pull-right"> 配置代码 <span class="glyphicon glyphicon-cog" ></span></small></a></h3></li>
        </ul>
    </div>
    <div class="row">

        <?php 

        for ($i=0; $i < 5 ; $i++) { 

            $chart_width = array(12,12,12,6,6);

            echo '<div class="col-md-'.$chart_width[$i].'">';
            echo '<div class="panel panel-default">';
            echo '<div class="panel-body">';
            echo '<div id="'.$charts_line_name[$i][0].'"></div>';
            echo '</div>';
            echo '<div class="panel-footer"><ul class="list-inline">';
            echo '<li><strong>'.$charts_line_name[$i][1].': </strong></li>';
            echo '<li><a href="'.$charts_line_name[$i][2].'" target="_blank"><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span> 交互引用 </a></li>';
            echo '<li><a href="'.$charts_line_name[$i][3].'" target="_blank"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> 编辑调整 </a></li>';
            echo '</ul></div>';
            echo '</div>';
            echo '</div>';
        }

        ?>

    </div>
</div>

<?php include 'chart_option_code.php'; ?>


<?php include 'footer.php'; ?>