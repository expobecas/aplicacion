<?php
require_once("../../../models/database.class.php");
require_once("../../../helpers/validator.class.php");
require_once('../../../models/solicitud.class.php');
try
{
    $solicitud = new Solicitud;
    $solicitudes = $solicitud->getVistageneral();
    echo json_encode($solicitudes);
}
catch(Exception $error)
{
    Page::showMessage(2, $error->getMessage(), "");
}
?>