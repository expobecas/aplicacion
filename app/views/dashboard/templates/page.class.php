<?php 
require_once("../../app/helpers/validator.class.php");
require_once("../../app/helpers/component.class.php");
require_once("../../app/models/database.class.php");
class Page extends component{
    public static function templateHeader($title){
        session_start();
        ini_set("date.timezone","America/El_Salvador");
        print("
        <!DOCTYPE html>
        <html lang='es'>
        <head>
            <meta charset='utf-8'>
            <title>$title</title>
            <link type='text/css' rel='stylesheet' href='../../web/css/materialize.min.css'/>
            <link type='text/css' rel='stylesheet' href='../../web/css/material_icons.css'/>
            <link type='text/css' rel='stylesheet' href='../../web/css/material_icons.css'/>
            <link type='text/css' rel='stylesheet' href='../../web/css/menu.css'/>
            <link type='text/css' rel='stylesheet' href='../../web/css/citas.css'/>
            <script type='text/javascript' src='../../web/js/sweetalert.min.js'></script>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
        </head>
        <body>
        <div id='cssmenu'>
        <ul>
        <li class='active has-sub'><a href='#'>Opciones de administracion</a>
            <ul>|
                <li class='has-sub'><a href='#'>Citas</a>
                    <ul>
                    <li><a href='#'>Ver</a></li>
                    </ul>
                </li>
                <li class='has-sub'><a href='#'>Casos</a>
                    <ul>
                    <li><a href='#'>Ver</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><a href='#'>Cerrar sesion</a></li>
        </ul>
        </div>
      
        <main>
        ");
    }

    public static function templateFooter(){
        print("
        </main>
        <script type='text/javascript' src='../../web/js/jquery-3.2.1.min.js'></script>
        <script type='text/javascript' src='../../web/js/materialize.min.js'></script>
        <script type='text/javascript' src='../../web/js/script.js'></script>
        <script type='text/javascript' src='../../web/js/jquery-latest.min.js'></script>
        ");

        $filename = basename($_SERVER['PHP_SELF']);
        if($filename == "casos.php")
        {
            print("<script type='text/javascript' src='../../web/js/js_casos.js'></script>");
        }
        $filename = basename($_SERVER['PHP_SELF']);
        if($filename == "citas.php")
        {
            print("<script type='text/javascript' src='../../web/js/js_citas.js'></script>");
        }
        print("
        </body>
        </html>
        ");
    }
}
?> 