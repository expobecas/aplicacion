<?php
require_once("../../app/views/dashboard/templates/page.class.php");
Page::templateHeader("Menu");
require_once("../../app/views/dashboard/menu/menu_index.php");
Page::templateFooter();
?>