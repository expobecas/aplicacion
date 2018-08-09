$(document).ready(function(){
    CargarTabla();
    function CargarTabla()
    {
        $.ajax({
            type:'POST',
            url: '../../app/controllers/dashboard/casos/index_controller.php',
            dataType: 'json',
            success: function(casos)
            {
                console.log(casos);
                $('#casos').empty();
                if(casos != "")
                {
                    i = 0;
                    for(i; i<casos.length; i++)
                    {
                        var fila = "";
                        alumno = casos[i].primer_apellido +" "+ casos[i].segundo_apellido+', '+casos[i].primer_nombre +' '+ casos[i].segundo_nombre;
                        fecha = casos[i].start.split(" ");
                        fila = fila.concat(
                            '<tr id="'+casos[i].id_caso+'">',
                            '<td>'+alumno+'</td>',
                            '<td>'+casos[i].fecha+'</td>',
                            '<td>'+casos[i].estado_solicitud+'</td>',
                            '<td>'+fecha[0]+'</td>',
                            '<td class="descripcion">'+casos[i].descripcion+'</td>',
                            '<td class="carnet">'+casos[i].n_carnet+'</td>',
                            '</tr>'
                        );
                        $('#casos').append(fila);
                    }
                }
                else
                {
                    swal({
                        title: 'Aviso',
                        text: 'No hay casos, por favor genere un caso',
                        icon: 'warning',
                        button: 'aceptar'
                    });
                }
            }
        });         
    }
});