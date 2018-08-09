<?php
require_once("../../app/views/dashboard/templates/page.class.php");
Page::templateHeader("Menu");
require_once("../../app/views/dashboard/citas/index_view.php");
Page::templateFooter();
?>