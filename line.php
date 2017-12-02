<?php
    $page = 'line.php';
    $page_title = '线性图表';
    $modal_title = '线性图表配置文件';
    $option_js = 'assets/js/charts_line.js';

?>


<?php include 'header.php'; ?>


<div class="container">
    <div class="mt-4">
        <ul class="list-inline">
            <li class="list-inline-item"><h4 class="card-title"><?php echo $page_title; ?></h4></li>
            <li class="list-inline-item"><h5 class="card-title"><a href="#" data-toggle="modal" data-target="#myModal"><small class="pull-right"> 配置代码 </small></a></h5></li>
        </ul>
    </div>
    <div class="row">

        <?php 

        for ($i=0; $i < 6 ; $i++) { 

            $chart_width = array(12,12,12,6,6,12);

            echo '<div class="col-md-'.$chart_width[$i].'">';
            echo '<div class="card card-default">';
            echo '<div class="card-body">';
            echo '<div id="'.$charts_line_name[$i][0].'"></div>';
            echo '</div>';
            echo '<div class="card-footer">';
            echo '<strong>'.$charts_line_name[$i][1].': </strong>';
            echo '<a class="card-link" href="'.$charts_line_name[$i][2].'" target="_blank"> 交互引用 </a>';
            if ( $charts_line_name[$i][3] !== "#") {
                echo '<a class="card-link" href="'.$charts_line_name[$i][3].'" target="_blank"> 编辑调整 </a>';
            }
            echo '</div>';
            echo '</div>';
            echo '</div>';
        }

        ?>

    </div>
</div>

<?php include 'chart_option_code.php'; ?>


<?php include 'footer.php'; ?>