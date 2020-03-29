<?php
  $nombre = 'Betza';
  define('CANAL', "BLC");
  $numero = 3;
  $euros = 100;

  $mensaje = "Mi nombre es $nombre, mi canal es " . CANAL . ", estamos en el año " . date('Y') . ", después del número $numero viene el número " . ++$numero . " y el valor de $euros € equivalen a " . convertir($euros) . " pesos mexicanos";
  echo $mensaje;

  function convertir($a) {
    $resultado = $a * 22.23;
    return $resultado;
  }
?>