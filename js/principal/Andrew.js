Parse.initialize("wCxAtie3514LsUqYtyn93WG4BoYoCqRzevStYEEC", "ALvgMhLwrQUABjYDmYX3d81VuI1SRc4X8UlS4MvO");

function mostrarElementos() {

    var listaFrutas = Parse.Object.extend("Andrew");

    var query = new Parse.Query(listaFrutas);

    query.find({
        success: function(results) {

            for (var i = 0; i < results.length; i++) {

                var object = results[i];

                var nombre = object.get('NombreColegios');
                var imagen = object.get('Imagen');
                var direccion = object.get('Direccion');
                var ubicacion = object.get('Ubicacion');
                var telefono = object.get('Telefono');
                var web = object.get('NombreDireccion');
                var simce = object.get('Simce');

                var contenido = ""
                contenido += '<div class="container pt">'
                contenido += '<div class="row mt centered">'
                contenido += '<div class="col-lg-12">'
                contenido += '<h1>' + nombre + '</h1>'
                contenido += '<a href="' + direccion +'"><img class="img-responsive center-block" src="' + imagen + '""></a>'
                contenido += '</br>'
                contenido += '<p>' + ubicacion + '</p>'
                contenido += '<p>' + telefono + '</p>'
                contenido += '<p>' + web+ '</p>'
                contenido += '<p>' + simce + '</p>'
                contenido += '<br>'
                contenido += '</div>'
                contenido += '</div>'
                contenido += '</div>'

                $('#contenedorColegio').append(contenido)

            }

        },
        error: function() {

        }
    })
}
mostrarElementos()