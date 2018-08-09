$(document).ready(function(){
    CargarTabla();

    function CargarTabla()
    {
        $.ajax({
            type: 'GET',
            url: '../../app/controllers/dashboard/solicitudes/index_controller.php',
            dataType: 'json',
            success: function(datos)
            {
                if(datos !="")
                {
                    $('#solicitudes').empty();
                    console.log(datos);
                    var i = 0;
                    for(i; i<datos.length; i++)
                    {
                        var fila = "";
                        fila = fila.concat(
                            '<tr class="'+datos[i].id_detalle+'" id="'+datos[i].id_solicitud+'">',
                            '<td>' +datos[i].primer_nombre+'</td>',
                            '<td>' +datos[i].primer_apellido+'</td>',
                            '<td>' +datos[i].n_carnet+'</td>',
                            '<td>' +datos[i].grado+'</td>',
                            '<td>' +datos[i].especialidad+'</td>',
                            '<td>' +datos[i].encargado+'</td>',
                            '<td>' +datos[i].tel_fijo+'</td>',
                            '</tr>'
                        );
                        $('#solicitudes').append(fila);
                    }
                }
                else
                {
                    swal({
                        title: 'Aviso',
                        text: 'No hay solicitudes, por favor espere que se genere una',
                        icon: 'warning',
                        button: 'aceptar'
                    });
                }
            }
        });
    }
});