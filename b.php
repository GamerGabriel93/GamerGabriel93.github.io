<?php
    /*$ev=$_POST['year'];
    $honap=$_POST['honap'];
    $nap=$_POST['nap'];
    --$today=date("Y/m/d - l");--
    $paros="<i>A kiválasztott év:</i> <b>$ev</b> <i>ami</i> <b>Páros</b>!";
    $paratlan="<i>A kiválasztott év:</i> <b>$ev</b> <i>ami</i> <b>Páratlan</b>!";
    echo "$ev . $honap . $nap";*/


    /* Év listák
    switch($ev){
        case "0": 
            echo "<b>ValueError:</b> There is no selected year from the drop-down list!";
            break;
        case "2021":
            echo $paratlan;
            break;
        case "2020":
            echo $paros;
            break;
        case "2019":
            echo $paratlan;
            break;
        case "2018":
            echo $paros;
            break;
        case "2017":
            echo $paratlan;
            break;
        case "2016":
            echo $paros;
            break;
        case "2015":
            echo $paratlan;
            break;
        }*/

    $pontszam = $_POST['year'];
    $i = 1;
    if ($pontszam >= 1 && $pontszam <= 5) {
        echo "A termék értékelése: $pontszam </br>";
    } else {
        echo "A termék nincs értékelve! </br>";
    }

    /*$nameErr = $emailErr = $genderErr = websiteErr = "";
    $name = $email = $gender = $website = "";
    if ($_SERVER("REQUEST_METHOD") == "POST") {
        if (empty($_POST["name"])) {
            $nameErr = "Name is required";
        } else {
            $name = test_input($_POST["name"]);
        }
        if (!preg_match("/^[a-zA-Z-' ]/", $name)) {
            $nameErr = "Only ltters and white space allowed!";
        }
    }*/

?>