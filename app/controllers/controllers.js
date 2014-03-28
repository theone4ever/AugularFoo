demoApp.controller("SimplerController", function ($scope, AjaxFactory) {
    $scope.customers = AjaxFactory.getCustomers(
        function (result) {
            $scope.customers = result;
        }
    );

    $scope.addCustomer = function () {
        $scope.customers = AjaxFactory.putCustomer(
            {
                name: $scope.newCustomer.name,
                city: $scope.newCustomer.city,
                address: $scope.newCustomer.address
            }, function (result) {
                $scope.customers = result;
            }
        );
    };

    $scope.alerts = [
        { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
        { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    ];
    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };

});

demoApp.controller("ChartController", function ($scope) {
    $scope.chart = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        datasets: [
            {
                fillColor: "rgba(151,187,205,0)",
                strokeColor: "#e67e22",
                pointColor: "rgba(151,187,205,0)",
                pointStrokeColor: "#e67e22",
                data: [4, 3, 5, 4, 6]
            },
            {
                fillColor: "rgba(151,187,205,0)",
                strokeColor: "#f1c40f",
                pointColor: "rgba(151,187,205,0)",
                pointStrokeColor: "#f1c40f",
                data: [8, 3, 2, 5, 4]
            }
        ]
    };

    $scope.myChartData = [
        {
            value: 30,
            color: "#F7464A"
        },
        {
            value: 50,
            color: "#E2EAE9"
        },
        {
            value: 100,
            color: "#D4CCC5"
        },
        {
            value: 40,
            color: "#949FB1"
        },
        {
            value: 120,
            color: "#4D5360"
        }
    ];

    $scope.myChartOptions = {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke: true,

        //String - The colour of each segment stroke
        segmentStrokeColor: "#fff",

        //Number - The width of each segment stroke
        segmentStrokeWidth: 24,

        //The percentage of the chart that we cut out of the middle.
        percentageInnerCutout: 50,

        //Boolean - Whether we should animate the chart
        animation: true,

        //Number - Amount of animation steps
        animationSteps: 100,

        //String - Animation easing effect
        animationEasing: "easeOutBounce",

        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate: true,

        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale: false,

        //Function - Will fire on animation completion.
        onAnimationComplete: null
    };
});


demoApp.controller('MainCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http({
            method: 'GET',
            url: 'app/data/data.json'
        }).then(function (data, status) {
                $scope.d3data = data.data.result;
            });
    }
]);

demoApp.controller('NavbarController', function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    }
});


demoApp.controller('DependencyGraphController', function ($scope, $http) {
    $scope.d3dataset = {};

    $http({method: 'GET', url: 'app/data/default/objects.json'})
        .success(function (totalresult) {
            //data is a map instead of list with object name as key and object itself as value.
            var result = totalresult.objects;
            $scope.d3dataset.config = totalresult.config;
            var error = {};
            $scope.d3dataset.dataset = {},
                $scope.d3dataset.doc = {};

            //result is an array.
            for (var i in result) {
                $scope.d3dataset.dataset[result[i].name] = result[i];
            }

            for (var i in $scope.d3dataset.dataset) {
                $scope.d3dataset.dataset[i].dependedOnBy = new Array();
            }


            for (var i in $scope.d3dataset.dataset) {
                for (var j in $scope.d3dataset.dataset[i].depends) {
                    var name = $scope.d3dataset.dataset[i].depends[j];
                    if ($scope.d3dataset.dataset[name]) {
                        $scope.d3dataset.dataset[name].dependedOnBy.push($scope.d3dataset.dataset[i].name);
                    }
                }
            }


            for (var i in totalresult.doc) {
                $scope.d3dataset.dataset[totalresult.doc[i].name].docs = totalresult.doc[i].doc;
            }

            for (var i in $scope.d3dataset.dataset) {
                $scope.d3dataset.dataset[i].docshtml = printdocs($scope.d3dataset.dataset[i]);
            }

            function printdocs(obj) {
                var docshtml = "<h2>" + obj.name + "<em>" + obj.type + "</em></h2>";
                if (!obj.docs) {
                    docshtml += "<div class=\"alert alert-warning\">No documentation for this object</div>";
                } else {
                    docshtml += "<div >" + obj.docs + "</div>";
                }
                docshtml += "<h3>Depends on</h3><ul>";
                for (var i in obj.depends) {
                    docshtml += "<li><a href=\"#obj-db-view-9\" class=\" select-object\" data-name=" + obj.depends[i] + ">" + obj.depends[i] + "</a></li>";
                }
                docshtml += "</ul><h3>Depends on by</h3><ul>";
                for (var i in obj.dependedOnBy) {
                    docshtml += "<li><a href=\"#obj-db-view-9\" class=\" select-object\" data-name=" + obj.dependedOnBy[i] + ">" + obj.dependedOnBy[i] + "</a></li>";
                }

                docshtml += "</ul>";
                return docshtml;

            }

        })
        .error(function (data, status, headers, config) {
            //  Do some error handling here
        });
});

demoApp.controller('FlareCtrl', function ($scope, $http) {
    $http({method: 'GET', url: 'app/data/flare.json'})
        .success(function (data) {
            $scope.flare = data.data;
        })
        .error(function (data, status, headers, config) {
            //  Do some error handling here
        });
});