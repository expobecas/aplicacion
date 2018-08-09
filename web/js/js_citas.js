$(document).ready(function(){
    CargarTabla();

    function CargarTabla()
    {
        $.ajax({
            type: 'GET',
            url: '../../app/controllers/dashboard/citas/citas.php',
            dataType: 'json',
            success: function(datos)
            {
                if(datos !="")
                {
                    $('#citas').empty();
                    console.log(datos);
                    var i = 0;
                    for(i; i<datos.length; i++)
                    {
                        var fila = "";
                        nombres = datos[i].primer_nombre +" "+ datos[i].segundo_nombre;
                        apellidos = datos[i].primer_apellido +" "+ datos[i].segundo_apellido;
                        fecha = datos[i].start.split(" ");
                        fila = fila.concat(
                            '<tr class="'+datos[i].id_detalle+'" id="'+datos[i].id+'">',
                            '<td>' +nombres+'</td>',
                            '<td>' +apellidos+'</td>',
                            '<td>' +datos[i].title+'</td>',
                            '<td>' +datos[i].descripcion+'</td>',
                            '<td>' +fecha[0]+'</td>',
                            '</tr>'
                        );
                        $('#citas').append(fila);
                    }
                }
                else
                {
                    swal({
                        title: 'Aviso',
                        text: 'No hay citas, por favor genere una cita',
                        icon: 'warning',
                        button: 'aceptar'
                    });
                }
            }
        });
    }
});