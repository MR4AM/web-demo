<?php
    
    $address1 = isset($_GET['address1']) ? $_GET['address1'] : null;
    
    $nameList = array('张三','李四','王尼玛','奥巴马','奥尼玛','lemon','王巴马');

    if(in_array($address1,$nameList)){
        echo "no";
    }else{
        echo "yes";
    }

?>