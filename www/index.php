<?php

  namespace AppliedPoetics\Keybork;

  require(__DIR__.'/php/Config.php');
  require('../../AppliedPoetics/Property.php');
  require('../../AppliedPoetics/Renderer.php');

  class Keybork {

    function __construct() {
      // Show template
    }

  }

  // Read platform stuff from JSON file
  $prop = new \Appliedpoetics\Property(INDEX_FILE,__NAMESPACE__);
  $rend = new \AppliedPoetics\Renderer($prop,__FILE__);

?>
