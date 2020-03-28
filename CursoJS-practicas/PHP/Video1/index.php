<?php

  function contar(Type $var = null)
  {
    static $numero = 5;
    $numero++;
    echo $numero;
  }
  contar();
  contar();
  contar();
  contar();
  contar();
?>