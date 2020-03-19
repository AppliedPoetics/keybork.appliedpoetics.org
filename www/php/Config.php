<?php

  define('INDEX_FILE',dirname(__DIR__,1).'/index.json');
  define('PHP_DIR',dirname(__DIR__,2).'/php/');
  define('EXEC_DIR','/opt/keybork.appliedpoetics.org/');
  define('TEXT_DIR','/opt/keybork.appliedpoetics.org/scratch/');
  define('IS_DEBUG',FALSE);
  define('AJAX_RQ',strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest' ? TRUE : FALSE);
  define('IS_SELF',strpos($_SERVER['HTTP_REFERER'],getenv('HTTP_HOST')) ? TRUE : FALSE);
?>
