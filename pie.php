<?php
    $page = 'pie.php';
    $page_title = '环形/饼形图表';
    $modal_title = '环形/饼形图表配置文件';
    $option_js = 'assets/js/charts_pie.js';


?>

<?php include 'header.php'; ?>

<div class="container">
    <div class="mt-4">
        <ul class="list-inline">
            <li class="list-inline-item"><h4 class="card-title"><?php echo $page_title; ?></h4></li>
            <li class="list-inline-item"><h5 class="card-title"><a href="#" data-toggle="modal" data-target="#myModal"><small class="pull-right" > 配置代码 </small></a></h5></li>
        </ul>
    </div>


    <div class="row">



        <?php 

        for ($i=0; $i < 5 ; $i++) { 
            
            $chart_width = array(4,4,4,6,6);
            
            echo '<div class="col-md-'.$chart_width[$i].'">';
            echo '<div class="card card-default">';
            echo '<div class="card-body">';
            echo '<div id="'.$charts_pie_name[$i][0].'"></div>';
            echo '</div>';
            echo '<div class="card-footer">';
            echo '<strong>'.$charts_pie_name[$i][1].': </strong></li>';
            echo '<a class="card-link" href="'.$charts_pie_name[$i][2].'" target="_blank"> 交互引用 </a>';
            if ( $charts_pie_name[$i][3] !== "#") {
            echo '<a class="card-link" href="'.$charts_pie_name[$i][3].'" target="_blank"> 编辑调整 </a>';
            }
            echo '</div>';
            echo '</div>';
            echo '</div>';
        }

        ?>

<!-- 
        <div class="col-md-4">
            <div class="card card-default">
                <div class="card-body">
                    <div id="<?php echo $charts_pie_name[0][0] ?>"></div>
                </div>
                <div class="card-footer">
                    <ul class="list-inline">
                      <li><strong><?php echo $charts_pie_name[0][1] ?>: </strong></li>
                      <li><a href="lite_pie/<?php echo $charts_pie_name[0][0] ?>.php" target="_blank"><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span> 交互引用 </a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card card-default">
                <div class="card-body">
                    <div id="<?php echo $charts_pie_name[1][0] ?>"></div>
                </div>
                <div class="card-footer">
                    <ul class="list-inline">
                      <li><strong><?php echo $charts_pie_name[1][1] ?>: </strong></li>
                      <li><a href="lite_pie/<?php echo $charts_pie_name[1][0] ?>.php" target="_blank"><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span> 交互引用 </a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card card-default">
                <div class="card-body">
                    <div id="<?php echo $charts_pie_name[2][0] ?>"></div>
                </div>
                <div class="card-footer">
                    <ul class="list-inline">
                      <li><strong><?php echo $charts_pie_name[2][1] ?>: </strong></li>
                      <li><a href="lite_pie/<?php echo $charts_pie_name[2][0] ?>.php" target="_blank"><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span> 交互引用 </a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card card-default">
                <div class="card-body">
                    <div id="<?php echo $charts_pie_name[3][0] ?>"></div>
                </div>
                <div class="card-footer">
                    <ul class="list-inline">
                      <li><strong><?php echo $charts_pie_name[3][1] ?>: </strong></li>
                      <li><a href="lite_pie/<?php echo $charts_pie_name[3][0] ?>.php" target="_blank"><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span> 交互引用 </a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card card-default">
                <div class="card-body">
                    <div id="<?php echo $charts_pie_name[4][0] ?>"></div>
                </div>
                <div class="card-footer">
                    <ul class="list-inline">
                      <li><strong><?php echo $charts_pie_name[4][1] ?>: </strong></li>
                      <li><a href="lite_pie/<?php echo $charts_pie_name[4][0] ?>.php" target="_blank"><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span> 交互引用 </a></li>
                    </ul>
                </div>
            </div>
        </div> -->
    </div>
</div>

<?php include 'chart_option_code.php'; ?>

<?php include 'footer.php'; ?>