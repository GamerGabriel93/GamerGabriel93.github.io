<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP teszt oldal</title>
    <link rel="stylesheet" href="kezdo.css">
</head>
<body>
    <header>
        <div>
            <h1 id="title">Az oldal címe</h1>
        </div>
        <div>
            <div>
                <section id="menu">
                    <h3>Minta szöveg1</h3>
                    <p>Minta szöveg 2</p>
                    <a href="">Link</a>
                </section>
                </div>
        </div>
    </header>
<?php

$open = 8;
$close = 16;
$now = date("H");
$message = "Ügyfélszolgálatunk jelenleg elérhető";

if ($now < $open) {
    $next = $open - $now;
    $message = "Ügyfélszolgálatunk jelenleg még zárva tart, <br>". $next . " óra múlva újra elérhető";
}else
if ($now >= $close){
    $next = (24 - $now) + $open;
    $message = "Ügyfélszolgálatunk a mai napon már nem elérhető, <br>". $next . " óra múlva újra elérhető";
}

echo    '<section id="box">
        <p id="fejlec"><b>Ügyfélszolgálat</b></p>
        <p>Telefonszám: +36 70 318 71 33</p>
        <p>Nyitvatartás: ' . $open . ' - ' . $close . ' óráig</p>
        <p>'. $message .'</p>
        </section>'
?>

<?php
echo '<h2>Termék kiválasztó felület</h2>
    <p>Válasszon ki egy terméket a legördülő listából!</p>
        
    <form action="b.php" method="POST">
        <label for="year">Termék:</label>
        <select name="year">
            <option value="0" selected>...</option>
            <option value="4.5">HP Notebook</option>
            <option value="2.5">Fogkefe</option>
            <option value="4.3">Apple Iphone 13 PRO MAX</option>
            <option value="3.5">Samsung Galaxy Z Fold</option>
            <option value="0">Szobor</option>
        </select>
    <input id="year" type="submit" value="Küldés" />
    </form>'
?>
</body>
</html>