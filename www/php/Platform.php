<?php

  namespace AppliedPoetics\Keybork;

  class Platform {
    
    public function __construct($props) {
      $this->text = "platform";
      $this->menu = self::createMenu($props->menu);
    }
    
    private function createMenu($items) {
      $menu = $items;
      return $menu;
    }
  }
?>
