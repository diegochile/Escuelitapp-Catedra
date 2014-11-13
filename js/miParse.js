Parse.initialize("wCxAtie3514LsUqYtyn93WG4BoYoCqRzevStYEEC", "ALvgMhLwrQUABjYDmYX3d81VuI1SRc4X8UlS4MvO");

function mostrarElementos() {

    var PantallaPrincipal = Parse.Object.extend("Categorias");

    var query = new Parse.Query(PantallaPrincipal);
    
    query.ascending("NombreCategoria");

    query.find({
        success: function(results) {

            for (var i = 0; i < results.length; i++) {

                var object = results[i];

                var nombre = object.get('NombreCategoria');
                var descripcion = object.get('Descripcion');
                var imagen = object.get('Imagen');
                var imagen2 = object.get('Imagen2');
                var direccion = object.get('Direccion');

                var contenido = ""
                contenido += '<div class="col-md-3 col-xs-6">'
                ////contenido += '<div class="thumbnail">'
                contenido += '<br>'
                contenido += '<h5 align="center">' + nombre + '</h5>'
                ///contenido += '<a href="' + direccion +'"><img class="img-responsive center-block" src="' + imagen + '"">'
                contenido += '<a href="' + direccion +'"><img class="img-responsive center-block" src="' + imagen + '" ng-src="{{imagen3}}" ng-mouseenter="imagen3=' + imagen2 + '" ng-mouseleave="imagen3=' + imagen + '" >'
                contenido += '<br>'
                contenido += '<br>'
                contenido += '</div>'
                contenido += '</div>'
                contenido += '</div>'

                $('#contenedorGeneral').append(contenido)

            }

        },
        error: function() {

        }
    })
}
mostrarElementos()