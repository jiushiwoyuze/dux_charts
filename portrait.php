<?php
    $page = 'bar.php';
    $page_title = '人群画像 Demo';
    $modal_title = '人群画像 Demo 配置文件';
    $option_js = 'assets/js/demo_portrait.js';


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

        for ($i=0; $i < 9 ; $i++) {

            $chart_width = array(4,4,4,12,6,6,4,4,4);

            echo '<div class="col-md-'.$chart_width[$i].'">';
            echo '<div class="card card-default">';
            echo '<div class="card-body">';
            echo '<h6 class="card-title">';
            echo $charts_portrait_name[$i][1] ;
            echo "</h6>";
            echo '<div id="'.$charts_portrait_name[$i][0].'"></div>';
            echo '</div>';
            echo '</div>';
            echo '</div>';
        }

        ?>

    </div>
</div>

<?php include 'chart_option_code.php'; ?>

<?php include 'footer.php'; ?>
