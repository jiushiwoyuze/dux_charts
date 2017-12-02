<?php
    $page = 'index.php';
    $page_title = '首页概览';

?>


<?php include 'header.php'; ?>
<?php include 'hero_show.php'; ?>

<div class="container content">
    
    <ul class="list-inline">
        <li class="list-inline-item"><h4 class="card-title mt-5">线性图表</h4></li>
        <li class="list-inline-item"><h5 class="card-title"><a href="line.php"><small class="pull-right"> 查看更多(6)</small></a></h5></li>
    </ul>
    <div class="row">
        <?php 

        for ($i=0; $i < 2 ; $i++) { 

            $chart_width = array(6,6,12,6,6);

            echo '<div class="col-md-'.$chart_width[$i].'">';
            echo '<div class="card card-default">';
            echo '<div class="card-body">';
            echo '<div id="'.$charts_line_name[$i][0].'"></div>';
            echo '</div>';
            echo '<div class="card-footer">';
            echo '<strong>'.$charts_line_name[$i][1].': </strong>';
            echo '<a class="card-link" href="'.$charts_line_name[$i][2].'" target="_blank">交互引用</a>';
            if ( $charts_line_name[$i][3] !== "#") {
                echo '<a class="card-link" href="'.$charts_line_name[$i][3].'" target="_blank">编辑调整</a>';
            }
            echo '</div>';
            echo '</div>';
            echo '</div>';
        }

        ?>
    </div>

    <ul class="list-inline">
        <li class="list-inline-item"><h4 class="card-title mt-4">条形/柱状图表</h4></li>
        <li class="list-inline-item"><h5 class="card-title"><a href="bar.php"><small class="pull-right"> 查看更多(5)</small></a></h5></li>
    </ul>
    <div class="row">

        <?php 

        for ($i=0; $i < 2 ; $i++) { 
            
            $chart_width = array(6,6,6,6,6);
            
            echo '<div class="col-md-'.$chart_width[$i].'">';
            echo '<div class="card card-default">';
            echo '<div class="card-body">';
            echo '<div id="'.$charts_bar_name[$i][0].'"></div>';
            echo '</div>';
            echo '<div class="card-footer">';
            echo '<strong>'.$charts_bar_name[$i][1].': </strong>';
            echo '<a class="card-link" href="'.$charts_bar_name[$i][2].'" target="_blank">交互引用</a>';
            if ( $charts_bar_name[$i][3] !== "#") {
            echo '<a class="card-link" href="'.$charts_bar_name[$i][3].'" target="_blank">编辑调整</a>';
            }
            echo '</div>';
            echo '</div>';
            echo '</div>';
        }

        ?>

    </div>


    <ul class="list-inline">
        <li class="list-inline-item"><h4 class="card-title mt-4">饼/环图表</h4></li>
        <li class="list-inline-item"><h5 class="card-title"><a href="pie.php"><small class="pull-right"> 查看更多(5)</small></a></h5></li>
    </ul>
    <div class="row">
        <?php 

        for ($i=0; $i < 3 ; $i++) { 
            
            $chart_width = array(4,4,4,6,6);
            
            echo '<div class="col-md-'.$chart_width[$i].'">';
            echo '<div class="card card-default">';
            echo '<div class="card-body">';
            echo '<div id="'.$charts_pie_name[$i][0].'"></div>';
            echo '</div>';
            echo '<div class="card-footer">';
            echo '<strong>'.$charts_pie_name[$i][1].': </strong>';
            echo '<a class="card-link" href="'.$charts_pie_name[$i][2].'" target="_blank">交互引用 </a>';
            if ( $charts_pie_name[$i][3] !== "#") {
            echo '<a class="card-link" href="'.$charts_pie_name[$i][3].'" target="_blank">编辑调整 </a>';
            }
            echo '</div>';
            echo '</div>';
            echo '</div>';
        }

        ?>
    </div>

    <ul class="list-inline">
        <li class="list-inline-item"><h4 class="card-title mt-4">地图图表</h4></li>
        <li class="list-inline-item"><h5 class="card-title"><a href="map.php"><small class="pull-right"> 查看更多(1)</small></a></h5></li>
    </ul>
    <div class="row">
        <div class="col-md-12">
            <div class="card card-default">
                <div class="card-body">
                    <div id="<?php echo $charts_map_name[0][0] ?>"></div>
                </div>
                <div class="card-footer">
                      <strong><?php echo $charts_map_name[0][1] ?>: </strong>
                      <a class="card-link" href="lite_map/<?php echo $charts_map_name[0][0] ?>.php" target="_blank">交互引用 </a>
                    
                </div>
            </div>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>