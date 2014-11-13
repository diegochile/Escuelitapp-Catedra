var escuelitapp = angular.module("escuelitapp",['ngRoute'])


escuelitapp.config(['$routeProvider',
                    function($routeProvider){
                        $routeProvider.
                    
                        when('/animales/jirafa',{
                            templateUrl:'partials/jirafa.html',
                        }).
                        when('/animales/jirafa',{
                            templateUrl:'partials/jirafa.html',
                            //imagenNombre:'animal2.jpg'
                        }).
                        otherwise({
                            redirectTo: '/',templateUrl:'partials/inicio.html'
                            });
                    }]);
                        